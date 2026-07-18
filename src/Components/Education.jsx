import React from 'react'
import { motion } from 'framer-motion'

const Education = () => {
    const edu = [
        
        {
            course: "B.Sc Software Engineering- MIVA",
            loc: "Fingesi Road, Mabushi, Abuja.",
            date: "2025 - Present"
        },
        {
            course: "B.Sc Geography & Natural Resources Management - UniUyo",
            loc: "Akwa Ibom State, Nigeria.",
            date: "2014 -2019"
        },
        {
            course: "Jesus Cares Academy",
            loc: "Port Harcourt,Rivers State, Nigeria.",
            date: "2007-2013"
        }
    ];
    return (

        <div>
            <div className="shadow-[inset_0px_8px_6px_-7px_rgba(44,43,43,0.9)] hover:bg-[#0a0a0c] transition-all duration-300 w-full h-[400px] bg-[#0c0c0e] rounded-[20px] p-8 border border-gray-800/[0.17] flex flex-col">

                <h1 className='text-[#e8e8e8] font-medium text-[1.1rem]'>Education</h1>


                    <div className='flex flex-col gap-8 pt-6'>
                        {edu.map((el, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className='flex flex-col gap-2'
                            >
                                <h3 className='text-[#e8e8e8] text-sm'>{el.course}</h3>
                                <p className='text-xs text-[#a0a0a0]'>{el.loc}</p>
                                <p className='text-xs text-[#a0a0a0]'>{el.date}</p>
                            </motion.div>
                        ))}
                    </div>


        

            </div>

        </div>
    )
}

export default Education
