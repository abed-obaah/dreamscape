import React from "react";
import { useParams } from 'react-router-dom';


export default function DetailsPage () {
    let { personName } = useParams();
    personName = personName.replace('-', ' ');
    return(
        <>
            <div className=" text-center text-[#ffffff] ">
                    <div className="mb-10">
                            <h1 className="text-4xl pt-12">
                                Dreamscape Animation
                            </h1>
                            <p className="text-2xl pb-5">A Journey Through Imagination"</p>
                            {/* <p>{personName}</p> */}
                            <div className="pointer-events-none  inset-x-0 top-30 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
                                    <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-[#E27841] px-16 py-2.5 sm:rounded-xl sm:py-10 sm:pl-[75rem] sm:pr-3.5 min-w-[300px] max-w-[640px] mx-auto">
                                        <p className="text-sm leading-6 text-white">
                                            <a href="#">
                                            </a>
                                        </p>
                                    </div>
                            </div>

                                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                    <img src={img14} className="w-[100%]"/>
                                </div>

                                
                            
                    </div>
                </div>
        </>
    )
}