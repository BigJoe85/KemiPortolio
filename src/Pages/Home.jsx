import React from 'react'
import Connect from '../Components/Connect'
import EssentialStack from '../Components/EssentialStack'
import Experience from '../Components/Experience'
import Skills_Expertise from '../Components/Skills_Expertise'
import Workers_Projects from '../Components/Works_Projects'


const Home = () => {
  return (
    <div className='text-[#e8e8e8] w-full'>
      <div className='w-full max-w-[1100px] mx-auto px-4 pt-60 pt-8 pb-2 max-md:pt-40'>
        <div className='pl-6'>
          <div className='w-full flex  flex-col '>
            <h1 className='text-sm text-[#a0a0a0] max-md:pb-2'>Hey there!</h1>
          <h1 className='max-md: leading-normal text-[clamp(1rem,3vw,1.7rem)] font-bold'>I'm Ekemini, Mobile architect and senior Flutter engineer  with 4+ years designing, leading, & shipping production-grade cross-platform applications at scale.</h1>
          </div>

          <div className='pt-8 flex gap-3 items-center max-md:flex-col max-md:items-start'>
            <div className='flex gap-2 items-center'>
              <div className='flex items-center justify-center bg-[#f54408] h-[7px] w-[7px] rounded-full'></div>
              <p className='text-[11px] text-[#a0a0a0]'>200,000+ combined users across shipped apps</p>
            </div>
            <p className='text-[11px] text-[#a0a0a0]'>PH, Nigeria • UTC/GMT +1:00</p>
          </div>
        </div>


        <div className='grid grid-cols-[minmax(300px,1.1fr)_minmax(280px,1fr)_minmax(250px,0.9fr)] gap-3 mt-10 mb-5 max-xl:grid-cols-1 items-center'>
          <Experience />
          <div className='grid grid-cols-1 gap-2 max-xl:grid-cols-1'>
            <Skills_Expertise />
            <EssentialStack />
          </div>
          <Connect />
        </div>

        <Workers_Projects limit={6} showButton={true} homePage={true} /> {/* Recieving our limit prop as splicing the project array to show only 6 products, also recieving button as a prop to show the botton when calling the component using conditional rendering */}

      </div>

    </div>
  )
}

export default Home
