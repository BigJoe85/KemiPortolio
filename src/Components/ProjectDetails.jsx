import React from 'react'
import { useParams } from 'react-router-dom'
import useProjectsStore from '../Stores/useProjectsStore.js'

const ProjectDetails = () => {
    const { id } = useParams()


    const projects = useProjectsStore((state) => state.projects) // here im using selector to pick a state created in useProjectsStore and saving it in a variable to represent the sellected state, always best to use the same state selected  as the variable name.

    const pro = projects.find(el => el.id.toString() === id)
    return (
        <div className='text-white w-full'>
            {pro ?
                <div className='pt-10'>
                    <div
                        style={{ backgroundImage: `url(${pro.img2})` }}
                        className="w-full h-[27rem] max-md:h-[15rem] max-w-[95%] mx-auto bg-no-repeat bg-center bg-cover rounded-4xl">

                    </div>

                    <div className='w-full max-w-[1100px] mx-auto px-4 pt-15 py-8 max-md:pt-40'>
                        <div className='flex items-center justify-between pb-3'>
                            <h1 className='font-bold text-3xl'>{pro.title}</h1>
                            <h1 className='text-[#a0a0a0]'>{pro.date}</h1>
                        </div>
                        <h1 className='pb-14 text-[#a0a0a0]'>{pro.role}</h1>
                        <p className='text-[#a0a0a0] text-xl leading-normal pb-10'>{pro.des}</p>

                        <div className='flex flex-col gap-3'>
                            <img src={pro.img1} alt="" className='rounded-2xl' />
                            <img src={pro.img5} alt="" className='rounded-2xl' />
                            <img src={pro.img3} alt="" className='rounded-2xl' />
                            <img src={pro.img4} alt="" className='rounded-2xl' />
                        </div>

                        <p className='py-10'>{pro.des2}</p>
                        <img src={pro.img2} alt="" />
                        <p className='pt-10'>{pro.des3}</p>
                    </div>


                </div>
                : <p>Not Found</p>
            }

        </div>
    )
}

export default ProjectDetails
