#!/bin/bash

# Video Compression Script for Vora Robotics Website
# This script compresses videos to WebM and MP4 formats for optimal web performance

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "FFmpeg is not installed. Please install it first:"
    echo "macOS: brew install ffmpeg"
    echo "Ubuntu: sudo apt install ffmpeg"
    echo "Windows: Download from https://ffmpeg.org/"
    exit 1
fi

# Create compressed folder if it doesn't exist
mkdir -p Assets/compressed

echo "🎬 Starting video compression for Vora Robotics..."
echo "=================================================="

# Function to compress a single video
compress_video() {
    local input_file="$1"
    local output_name="$2"
    
    if [ ! -f "$input_file" ]; then
        echo "⚠️  Warning: $input_file not found, skipping..."
        return
    fi
    
    echo "🔄 Processing: $input_file"
    
    # Create WebM version (smaller file size, modern browsers)
    echo "   Creating WebM version..."
    ffmpeg -i "$input_file" \
        -c:v libvpx-vp9 \
        -b:v 1M \
        -c:a libopus \
        -b:a 128k \
        -vf "scale=1280:720" \
        -r 30 \
        -quality good \
        -speed 4 \
        -y "Assets/${output_name}.webm"
    
    # Create optimized MP4 version (broader compatibility)
    echo "   Creating optimized MP4 version..."
    ffmpeg -i "$input_file" \
        -c:v libx264 \
        -preset medium \
        -b:v 1.5M \
        -c:a aac \
        -b:a 128k \
        -vf "scale=1280:720" \
        -r 30 \
        -movflags +faststart \
        -y "Assets/${output_name}.mp4"
    
    echo "✅ Completed: $output_name"
    echo ""
}

# Compress all videos
echo "Starting compression process..."
echo ""

compress_video "Assets/drone.mp4" "drone"
compress_video "Assets/automation.mov" "automation"
compress_video "Assets/tools.mp4" "tools"
compress_video "Assets/raas.mp4" "raas"

echo "🎉 Video compression completed!"
echo ""
echo "📊 File size comparison:"
echo "========================"

# Function to get file size
get_size() {
    if [ -f "$1" ]; then
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS
            stat -f%z "$1" | awk '{printf "%.1f MB", $1/1024/1024}'
        else
            # Linux
            stat -c%s "$1" | awk '{printf "%.1f MB", $1/1024/1024}'
        fi
    else
        echo "N/A"
    fi
}

# Show file sizes
for video in drone automation tools raas; do
    echo "📹 $video:"
    echo "   Original: $(get_size "Assets/${video}.*")"
    echo "   WebM:     $(get_size "Assets/${video}.webm")"
    echo "   MP4:      $(get_size "Assets/${video}.mp4")"
    echo ""
done

echo "🚀 Your videos are now optimized for web!"
echo "💡 Tips:"
echo "   - WebM files are ~30-50% smaller than MP4"
echo "   - Modern browsers will prefer WebM"
echo "   - MP4 provides fallback for older browsers"
echo "   - Both formats are now 720p @ 30fps for optimal web performance" 