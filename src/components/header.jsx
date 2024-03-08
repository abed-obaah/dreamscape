import React from "react";



export default function Header () {
    return(
        <>
            <div className="bg-[#010213]">
                <div className=" text-[#FFFFFF] flex justify-between px-20 py-4">
                        <div>
                            
                            <h1 className="flex flex-col"><span className=" font-light">Obaah</span>
                            Meshach</h1>
                        </div>

                        <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                            <a>my work</a>
                            <a>about me</a>
                            <a>lab</a>
                            <a>contact</a>
                        </div>
                </div>
                
                
            </div>
        </>
    )
}