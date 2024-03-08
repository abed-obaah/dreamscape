import React from "react";
import Cards from '../components/constants/cards';
import Footer from '../components/footer'

export default function HeroSection () {
    return(
        <>
            <div className="bg-[#02081F] h-screen">

                <div className=" text-center text-[#ffffff] ">
                    <div className="mb-10 divide-y divide-gray-700 ">
                            <h1 className="text-2xl pt-28 mb-10">
                                    Projects
                            </h1>
                            <Cards/>
                    </div>
                    
                </div>
                <hr className="w-4/5 mx-auto border-1 h-px" />

                <Footer/>
            </div>
        </>
    )
}