import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-16 space-y-8 md:space-y-0">
    <img src="/Image.png" alt="Service" className="w-full md:w-2/5" />
    <div className="border-2 bg-slate-200 w-full md:w-3/5 p-8 md:p-20">
      <h1 className="text-xl md:text-2xl text-custom-purple">
        Our service isnt just personal, its actually hyper-personally exquisite
      </h1>
      <p className="text-custom-purple mt-6">
        When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique became the hotbed for the London interior design community.
      </p>
      <button className="bg-white h-12 w-40 rounded-sm mt-10 text-custom-purple">
        Get in Touch
      </button>
    </div>
  </div>
  )
}

export default About
