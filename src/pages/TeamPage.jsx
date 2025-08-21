import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Team Member Data
const teamMembers = [
  {
    id: 1,
    name: "Mohammed Mansur Abubakar",
    title: "Co-founder & Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/mohammed-mansur-abubakar-b23ba510a/",
    image: "https://via.placeholder.com/400x500/1f2937/ffffff?text=Mohammed+Mansur+Abubakar",
    bio: "Mohammed Mansur Abubakar is a visionary leader with over 10 years of experience in robotics and automation. As Co-founder and CEO of Vora Robotics, he leads the company's strategic direction and innovation initiatives. His expertise spans drone technology, industrial automation, and sustainable manufacturing solutions. Mohammed is passionate about advancing Africa's technological capabilities and has been instrumental in establishing Vora Robotics as a leading force in the continent's robotics industry. He holds a degree in Mechanical Engineering and has been recognized for his contributions to innovation in Africa."
  },
  {
    id: 2,
    name: "Sadiq Salihijo Ahmed",
    title: "Co-founder & Chief Operations Officer",
    linkedin: "https://www.linkedin.com/in/sadiq-salihijo-ahmad-7a334010a/",
    image: "https://via.placeholder.com/400x500/1f2937/ffffff?text=Sadiq+Salihijo+Ahmed",
    bio: "Sadiq Salihijo Ahmed brings extensive operational expertise to Vora Robotics as Co-founder and COO. With a background in industrial engineering and project management, he oversees all operational aspects of the company including manufacturing, quality control, and supply chain management. Sadiq has successfully led multiple large-scale automation projects across various industries in Africa. His strategic approach to operations has been crucial in scaling Vora Robotics' manufacturing capabilities and ensuring consistent product quality. He is committed to building sustainable, efficient operations that support Africa's industrial growth."
  },
  {
    id: 3,
    name: "Benny",
    title: "Co-founder & Chief Executive Officer",
    linkedin: "",
    image: "https://via.placeholder.com/400x500/1f2937/ffffff?text=Benny",
    bio: "Benny is a co-founder and key executive at Vora Robotics, bringing innovative leadership to the company's executive team. With expertise in business development and strategic partnerships, Benny has been instrumental in expanding Vora Robotics' market presence across Africa. His vision for sustainable technology solutions and commitment to excellence has helped establish the company as a trusted partner for industries seeking automation and robotics solutions. Benny's leadership style emphasizes collaboration, innovation, and customer-centric approaches to problem-solving."
  },
  {
    id: 4,
    name: "Shamsuddeen Jibril",
    title: "Co-founder & Head of Unmanned Vehicles",
    linkedin: "https://www.linkedin.com/in/shamsuddeen-jibril-ba4866269/",
    image: "https://via.placeholder.com/400x500/1f2937/ffffff?text=Shamsuddeen+Jibril",
    bio: "Shamsuddeen Jibril leads Vora Robotics' unmanned vehicles division as Co-founder and Head of Unmanned Vehicles. With specialized expertise in drone technology and autonomous systems, he has developed innovative solutions for agriculture, security, and industrial applications. Shamsuddeen's technical background in aerospace engineering and his passion for cutting-edge technology have been driving forces behind the company's success in the drone manufacturing and services sector. He has overseen the development of multiple drone platforms and continues to push the boundaries of what's possible in unmanned vehicle technology."
  },
  {
    id: 5,
    name: "Abdurrahman Ariyibi",
    title: "Co-founder & Head of Robotics & Automation",
    linkedin: "https://www.linkedin.com/in/abdurrahman-ariyibi-32a186203/",
    image: "https://via.placeholder.com/400x500/1f2937/ffffff?text=Abdurrahman+Ariyibi",
    bio: "Abdurrahman Ariyibi serves as Co-founder and Head of Robotics & Automation at Vora Robotics. With a deep understanding of industrial automation and robotics systems, he leads the development of innovative automation solutions for manufacturing and industrial applications. Abdurrahman's expertise includes SCADA systems, process automation, and smart manufacturing technologies. His leadership has been crucial in establishing Vora Robotics as a leader in industrial automation across Africa. He is passionate about making advanced robotics technology accessible and practical for African industries."
  }
];

// Technical, Operations & Support Team Data
const supportTeamMembers = [
  {
    id: 1,
    name: "Gloria Etuk",
    title: "Business Development Manager",
    linkedin: "",
    image: "https://via.placeholder.com/400x500/1f2937/ffffff?text=Gloria+Etuk",
    bio: "Gloria Etuk leads our business development initiatives, driving strategic partnerships and market expansion across Africa. With expertise in client relations and market analysis, she plays a crucial role in identifying new opportunities and fostering relationships with key stakeholders in the robotics and automation industry."
  },
  {
    id: 2,
    name: "Austine Timothy Edor",
    title: "IT Support",
    linkedin: "",
    image: "https://via.placeholder.com/400x500/1f2937/ffffff?text=Austine+Timothy+Edor",
    bio: "Austine Timothy Edor provides essential IT support and technical assistance to ensure smooth operations across all our systems. His expertise in troubleshooting, system maintenance, and technical problem-solving helps maintain the technological infrastructure that supports our robotics and automation solutions."
  },
  {
    id: 3,
    name: "Salihijo Mallam",
    title: "Robotics Engineer",
    linkedin: "",
    image: "https://via.placeholder.com/400x500/1f2937/ffffff?text=Salihijo+Mallam",
    bio: "Salihijo Mallam is a skilled robotics engineer who contributes to the design, development, and implementation of our robotic systems. His technical expertise in robotics programming, mechanical design, and system integration helps bring innovative automation solutions to life for our clients across various industries."
  },
  {
    id: 4,
    name: "Amina Ibrahim Manzo",
    title: "IT Support",
    linkedin: "",
    image: "https://via.placeholder.com/400x500/1f2937/ffffff?text=Amina+Ibrahim+Manzo",
    bio: "Amina Ibrahim Manzo provides comprehensive IT support services, ensuring our technology infrastructure runs efficiently. Her role includes system administration, network maintenance, and providing technical assistance to team members, contributing to the smooth operation of our digital systems."
  },
  {
    id: 5,
    name: "Haruna Badamasi",
    title: "Support Engineer",
    linkedin: "",
    image: "https://via.placeholder.com/400x500/1f2937/ffffff?text=Haruna+Badamasi",
    bio: "Haruna Badamasi serves as a support engineer, providing technical assistance and troubleshooting for our robotics and automation systems. His expertise in system diagnostics, maintenance, and customer support ensures that our solutions continue to operate at optimal performance for our clients."
  },
  {
    id: 6,
    name: "Affishetu Abu",
    title: "Business Development Manager",
    linkedin: "",
    image: "https://via.placeholder.com/400x500/1f2937/ffffff?text=Affishetu+Abu",
    bio: "Affishetu Abu works alongside our business development team, focusing on market research, client acquisition, and strategic partnerships. Her role in expanding our market presence and identifying new business opportunities contributes to the growth and success of Vora Robotics across Africa."
  },
  {
    id: 7,
    name: "Peter Udoka",
    title: "Project Manager",
    linkedin: "",
    image: "https://via.placeholder.com/400x500/1f2937/ffffff?text=Peter+Udoka",
    bio: "Peter Udoka manages project delivery and coordination across our robotics and automation initiatives. His expertise in project planning, resource allocation, and stakeholder management ensures that our solutions are delivered on time, within budget, and to the highest quality standards."
  },
  {
    id: 8,
    name: "Mahmood Adamu",
    title: "Supply Chain & Logistics Manager",
    linkedin: "",
    image: "https://via.placeholder.com/400x500/1f2937/ffffff?text=Mahmood+Adamu",
    bio: "Mahmood Adamu oversees our supply chain and logistics operations, ensuring efficient procurement, inventory management, and delivery of components and finished products. His role is crucial in maintaining the smooth flow of materials and equipment needed for our manufacturing and service operations."
  },
  {
    id: 9,
    name: "Bilkisu Mallam",
    title: "IT Support",
    linkedin: "",
    image: "https://via.placeholder.com/400x500/1f2937/ffffff?text=Bilkisu+Mallam",
    bio: "Bilkisu Mallam provides essential IT support services, helping maintain our technological infrastructure and assisting team members with technical issues. Her role ensures that our digital systems remain operational and efficient, supporting the overall productivity of our organization."
  },
  {
    id: 10,
    name: "Dami",
    title: "IT Support",
    linkedin: "",
    image: "https://via.placeholder.com/400x500/1f2937/ffffff?text=Dami",
    bio: "Dami contributes to our IT support team, providing technical assistance and system maintenance. His role in troubleshooting, software management, and technical problem-solving helps ensure that our technology infrastructure supports the efficient operation of our robotics and automation business."
  }
];

// Team Member Modal Component
const TeamMemberModal = ({ member, isOpen, onClose }) => {
  if (!member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 group"
            >
              <Icon icon="mdi:close" width="20" height="20" className="text-slate-600 group-hover:text-slate-800" />
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* Left Side - Image */}
              <div className="lg:w-2/5 relative">
                <div className="h-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Name and Title */}
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
                      {member.name}
                    </h2>
                    <p className="text-lg text-green-600 font-semibold">
                      {member.title}
                    </p>
                  </div>

                  {/* Biography */}
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {member.bio}
                    </p>
                  </div>

                  {/* LinkedIn Button */}
                  {member.linkedin && (
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-fit"
                    >
                      <Icon icon="mdi:linkedin" width="20" height="20" />
                      <span>Connect on LinkedIn</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSupportMember, setSelectedSupportMember] = useState(null);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const openSupportModal = (member) => {
    setSelectedSupportMember(member);
    setIsSupportModalOpen(true);
  };

  const closeSupportModal = () => {
    setIsSupportModalOpen(false);
    setSelectedSupportMember(null);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/group-afro-americans-working-together.jpg')"
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Subtle Glowing Nodes */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-400 rounded-full blur-sm"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full blur-sm"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full blur-sm"
          />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 leading-tight"
            >
              The People Behind
              <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Vora Robotics
              </span>
            </motion.h1>
            
            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-xl md:text-2xl lg:text-3xl font-light text-slate-300 max-w-4xl mx-auto leading-relaxed"
            >
              A passionate team of engineers, innovators, and problem-solvers driving Africa's future in drones, unmanned vehicles, robotics, and automation.
            </motion.p>
            
            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center items-center gap-8 mt-16 mb-20"
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 border-2 border-green-500 rounded-full flex items-center justify-center"
              >
                <Icon icon="mdi:robot" width="16" height="16" className="text-green-500" />
              </motion.div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
            </motion.div>
            
            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2 text-slate-400"
              >
                <span className="text-sm font-medium tracking-wide">Scroll to explore</span>
                <Icon icon="mdi:chevron-down" width="18" height="18" />
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </section>

      {/* Meet Our Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Visionaries shaping the future of robotics and automation in Africa.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Mohammed Mansur Abubakar */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group cursor-pointer"
              onClick={() => openModal(teamMembers[0])}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 overflow-hidden">
                {/* Profile Photo */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center shadow-lg overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/128x128/22c55e/ffffff?text=MM" 
                    alt="Mohammed Mansur Abubakar"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Name & Title */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    Mohammed Mansur Abubakar
                  </h3>
                  <p className="text-slate-600 font-medium">
                    Co-founder & Chief Executive Officer
                  </p>
                </div>
                
                {/* LinkedIn Button */}
                <div className="flex justify-center">
                  <motion.a
                    href="https://www.linkedin.com/in/mohammed-mansur-abubakar-b23ba510a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-blue-500/25"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon icon="mdi:linkedin" width="20" height="20" />
                    <span>Connect</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Sadiq Salihijo Ahmed */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group cursor-pointer"
              onClick={() => openModal(teamMembers[1])}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 overflow-hidden">
                {/* Profile Photo */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center shadow-lg overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/128x128/3b82f6/ffffff?text=SS" 
                    alt="Sadiq Salihijo Ahmed"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Name & Title */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    Sadiq Salihijo Ahmed
                  </h3>
                  <p className="text-slate-600 font-medium">
                    Co-founder & Chief Operations Officer
                  </p>
                </div>
                
                {/* LinkedIn Button */}
                <div className="flex justify-center">
                  <motion.a
                    href="https://www.linkedin.com/in/sadiq-salihijo-ahmad-7a334010a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-blue-500/25"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon icon="mdi:linkedin" width="20" height="20" />
                    <span>Connect</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Benny */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group cursor-pointer"
              onClick={() => openModal(teamMembers[2])}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 overflow-hidden">
                {/* Profile Photo */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center shadow-lg overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/128x128/a855f7/ffffff?text=B" 
                    alt="Benny"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Name & Title */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    Benny
                  </h3>
                  <p className="text-slate-600 font-medium">
                    Co-founder & Chief Executive Officer
                  </p>
                </div>
                
                {/* LinkedIn Button */}
                <div className="flex justify-center">
                  <motion.a
                    href="#"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-400 hover:bg-slate-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-not-allowed"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon icon="mdi:linkedin" width="20" height="20" />
                    <span>Coming Soon</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Shamsuddeen Jibril */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group cursor-pointer"
              onClick={() => openModal(teamMembers[3])}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 overflow-hidden">
                {/* Profile Photo */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center shadow-lg overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/128x128/f97316/ffffff?text=SJ" 
                    alt="Shamsuddeen Jibril"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Name & Title */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    Shamsuddeen Jibril
                  </h3>
                  <p className="text-slate-600 font-medium">
                    Co-founder & Head of Unmanned Vehicles
                  </p>
                </div>
                
                {/* LinkedIn Button */}
                <div className="flex justify-center">
                  <motion.a
                    href="https://www.linkedin.com/in/shamsuddeen-jibril-ba4866269/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-blue-500/25"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon icon="mdi:linkedin" width="20" height="20" />
                    <span>Connect</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Abdurrahman Ariyibi */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ 
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group cursor-pointer"
              onClick={() => openModal(teamMembers[4])}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 overflow-hidden">
                {/* Profile Photo */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-100 to-green-100 flex items-center justify-center shadow-lg overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/128x128/14b8a6/ffffff?text=AA" 
                    alt="Abdurrahman Ariyibi"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Name & Title */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    Abdurrahman Ariyibi
                  </h3>
                  <p className="text-slate-600 font-medium">
                    Co-founder & Head of Robotics & Automation
                  </p>
                </div>
                
                {/* LinkedIn Button */}
                <div className="flex justify-center">
                  <motion.a
                    href="https://www.linkedin.com/in/abdurrahman-ariyibi-32a186203/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-blue-500/25"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Icon icon="mdi:linkedin" width="20" height="20" />
                    <span>Connect</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical, Operations & Support Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Technical, Operations & Support Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Dedicated professionals driving innovation and excellence across all aspects of our operations.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            
            {supportTeamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -4,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group cursor-pointer"
                onClick={() => openSupportModal(member)}
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 overflow-hidden h-full flex flex-col">
                  {/* Profile Photo */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shadow-md overflow-hidden flex-shrink-0">
                    <img 
                      src={`https://via.placeholder.com/80x80/64748b/ffffff?text=${member.name.split(' ').map(n => n[0]).join('')}`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Name & Title */}
                  <div className="text-center mb-4 flex-1 flex flex-col justify-center">
                    <h3 className="text-sm font-bold text-slate-800 mb-1 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-tight min-h-[2.5rem] flex items-center justify-center">
                      {member.title}
                    </p>
                  </div>
                  
                  {/* LinkedIn Button - Only show if LinkedIn link exists */}
                  {member.linkedin && (
                    <div className="flex justify-center flex-shrink-0">
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ 
                          scale: 1.1,
                          transition: { duration: 0.2 }
                        }}
                        className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 group-hover:shadow-blue-500/25"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon icon="mdi:linkedin" width="16" height="16" />
                      </motion.a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <TeamMemberModal 
        member={selectedMember} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />

      {/* Support Team Modal */}
      <TeamMemberModal 
        member={selectedSupportMember} 
        isOpen={isSupportModalOpen} 
        onClose={closeSupportModal} 
      />
    </div>
  );
};

export default TeamPage;
