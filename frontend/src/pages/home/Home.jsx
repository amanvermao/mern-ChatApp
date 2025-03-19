import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messagges/MessageContainer'

const Home = () => {
  return (
    <div className="relative flex sm:h-[450px] md:h-[550px] rounded-2xl overflow-hidden bg-gray-900/50 bg-clip-padding backdrop-blur-xl shadow-2xl border border-white/10">
    
    {/* Glowing Background Element */}
    <div className="absolute -top-10 -left-10 w-48 h-48 bg-green-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>

    {/* Main Content */}
    <Sidebar />
    <MessageContainer />
</div>
  )
}

export default Home
