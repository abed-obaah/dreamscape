import React from "react";
import VideoThumbnail from 'react-video-thumbnail';
import img1 from "../assets/model-in-gold-fashion.jpg"
import { Player, BigPlayButton } from 'video-react';



export default function HeroSection () {
    return(
        <>
            <div className="bg-[#02081F] h-screen">

                <div className=" text-center text-[#ffffff] ">
                    <div className="mb-10">
                            <h1 className="text-2xl pt-28">
                                    Curious About My Work?
                            </h1>
                            <p>Dive into My Showreel and Motion Graphics Projects.</p>

                    </div>
                        <div className="flex justify-center items-center">
                            <Player  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                <BigPlayButton position="center" />
                            </Player>
                            
                        </div>
                    
                </div>
            </div>
        </>
    )
}