import React from 'react'
import Experience from '../Components/Experience'
import Resume from '../Components/Resume'
import Education from '../Components/Education'
import Vibe from '../Components/Vibe'

const About = () => {
  const row1 = [
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783346728/WhatsApp_Image_2026-07-06_at_09.48.57_uulk28.jpg",
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783346728/WhatsApp_Image_2026-07-06_at_09.48.57_uulk28.jpg",
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783346728/WhatsApp_Image_2026-07-06_at_09.48.57_uulk28.jpg",
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783346728/WhatsApp_Image_2026-07-06_at_09.48.57_uulk28.jpg"
  ]
  const row2 = [
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783346728/WhatsApp_Image_2026-07-06_at_09.48.57_uulk28.jpg",
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783346728/WhatsApp_Image_2026-07-06_at_09.48.57_uulk28.jpg",
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783346728/WhatsApp_Image_2026-07-06_at_09.48.57_uulk28.jpg",
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783346728/WhatsApp_Image_2026-07-06_at_09.48.57_uulk28.jpg"
  ]
  const row3 = [
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783346728/WhatsApp_Image_2026-07-06_at_09.48.57_uulk28.jpg",
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783346728/WhatsApp_Image_2026-07-06_at_09.48.57_uulk28.jpg",
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783346728/WhatsApp_Image_2026-07-06_at_09.48.57_uulk28.jpg",
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783346728/WhatsApp_Image_2026-07-06_at_09.48.57_uulk28.jpg"
  ]

  return (
    <div className='w-full max-w-[1100px] mx-auto px-4 pt-60 pt-8 pb-2 max-md:pt-40'>
      <h1 className='leading-normal text-[#e8e8e8] text-[clamp(1rem,3vw,1.7rem)] font-bold text-center pb-6'>Hey there! I'm Eshiet Ekemini. I'm a Mobile architect and Senior Flutter Engineer with 4+ years shipping production-grade cross-platform apps, across fintech, GIS, & consumer products. </h1>

      <p className='text-[#a0a0a0] text-center text-[clamp(0.75rem,2vw_+_0.4rem,1rem)] pb-6'>As a seasoned Mobile developer, I specialize in designing, leading, & shipping cross-platform apps that go from a blank repo to real users on the App Store & Play Store.</p>


      <div className='w-full h-[40rem] grid grid-cols-3 max-md:grid-cols-1  gap-2 py-18'>

        <div className="h-full overflow-hidden max-md:hidden">
          <div className="flex flex-col gap-2 h-max animate-about-up">
            {[...row1, ...row1].map((item, i) => (
              <img key={i} src={item} alt="" className="rounded-lg" />
            ))}
          </div>
        </div>

        <div className="h-full overflow-hidden">
          <div className="flex flex-col gap-2 h-max animate-about-down">
            {[...row2, ...row2].map((item, i) => (
              <img key={i} src={item} alt="" className="rounded-xl" />
            ))}
          </div>
        </div>

        <div className="h-full overflow-hidden max-md:hidden">
          <div className="flex flex-col gap-2 h-max animate-about-up">
            {[...row3, ...row3].map((item, i) => (
              <img key={i} src={item} alt="" className="rounded-xl" />
            ))}
          </div>
        </div>

      </div>

      <h1 className='leading-normal text-[#e8e8e8] text-[clamp(1rem,3vw,1.7rem)] font-bold text-center pb-6'>I got into this because I like building things that work, not prototypes that die after a pitch, but apps that stay in production, get updated, and actually earn their keep.</h1>

      <p className='text-[#a0a0a0] text-center text-[clamp(0.75rem,2vw_+_0.4rem,1rem)] pb-12'>I also write. I've published technical content on Flutter and mobile development with LogRocket, Codesource, Rewind, and Lightrun, breaking down complex mobile engineering concepts for other developers.</p>

      <div className='grid grid-cols-[minmax(300px,1.2fr)_minmax(280px,0.9fr)_minmax(250px,0.9fr)] gap-4 mt-10 mb-5 max-xl:grid-cols-1 items-center'>
        <Experience />
        <Education />
        <Resume />
      </div>

      <Vibe />

    </div>
  )
}

export default About
