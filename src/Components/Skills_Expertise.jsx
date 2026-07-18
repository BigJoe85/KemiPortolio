import React from 'react'

const Skills_Expertise = () => {
    const row1 = ["Flutter", "Dart", "Responsive UI/UX", "Andriod", "iOs", "RESTful APIs", "Cross-Platform Development", "Supabase", "Firebase"]
    const row2 = ["CI/CD Pipelines", "Figma", "Git & GitHub", "SQLite", "Agile/Scrum", "BLoC / Cubit", "Riverpod (incl. 3.x Notifier)", "3rd-Party SDK Integration"]
    return (

        <div>
            <div className='shadow-[inset_0px_8px_6px_-7px_rgba(44,43,43,0.9)] hover:bg-[#0a0a0c] transition-all duration-300 w-full h-[195px] bg-[#0c0c0e] rounded-[20px] p-8 border border-gray-800/[0.17]'>
                <h1 className='text-[#e8e8e8] font-medium text-[1.1rem] pb-4'>Skills & Expertise</h1>

                {/* Row 1 - scrolls left */}
                <div className="w-full overflow-hidden mb-3">
                    <div className="flex gap-1 w-max animate-marquee-left">
                        {[...row1, ...row1].map((item, i) => (
                            <span key={i} className=" bg-[#1a1a1c] text-[#c9c9c9] text-[11.5px] px-3 py-2 rounded-full whitespace-nowrap">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Row 2 - scrolls right */}
                <div className="w-full overflow-hidden mb-2">
                    <div className="flex gap-1 w-max animate-marquee-right">
                        {[...row2, ...row2].map((item, i) => (
                            <span key={i} className=" bg-[#1a1a1c] text-[#c9c9c9] text-[11.5px] px-3 py-2 rounded-full whitespace-nowrap">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Skills_Expertise


