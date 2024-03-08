import React from "react";
import { useParams,useLocation } from 'react-router-dom';
import img14 from '../assets/Group 14.png'
import img15 from '../assets/Rectangle 15.png'
import img16 from '../assets/Rectangle 16.png'
import img17 from '../assets/Rectangle 17.png'
import img18 from '../assets/Rectangle 18.png'
import img19 from '../assets/Rectangle 19.png'
import img20 from '../assets/Rectangle 20.png'
import { ArrowLeft } from 'iconsax-react';
import { Link } from 'react-router-dom';

const people = [
    {
      imageUrl:
      img15,
    },
    {
      imageUrl:
      img16,
    },
    
]

const peoples = [
    {
      imageUrl:
      img17,
    },
    
  ]
const peoplesCard = [
    {
      imageUrl:
      img18,
    },
    {
      imageUrl:
      img19,
    },
    {
      imageUrl:
      img20,
    },
    
  ]




export default function DetailsPage () {
    let { personName } = useParams();
    personName = personName.replace('-', ' ');

    const location = useLocation();
  const { color } = location.state || {};
  const backgroundColorClass = `bg-[${color}]`;
    return(
        <>
            <div className=" text-center text-[#ffffff] ">
                    <div className="mb-10">
                                                <div className="flex items-center w-full">
                                                <Link to="/">
                                                        <ArrowLeft className="ml-10" size="32" color="#FFff"/>
                                                </Link> 
                                                
                                                <h1 className="text-4xl mx-auto">
                                                    Dreamscape Animation
                                                </h1>
                                            </div>


                            
                            <p className="text-2xl pb-5">A Journey Through Imagination"</p>
                            <div className="pointer-events-none  inset-x-0 top-30 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
                                    <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-[#E27841] px-16 py-2.5 sm:rounded-xl sm:py-10 sm:pl-[75rem] sm:pr-3.5 min-w-[300px] max-w-[640px] mx-auto"
                                    >
                                        <p className="text-sm leading-6 text-white">
                                            <a href="#">
                                            </a>
                                        </p>
                                    </div>
                            </div>

                                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                    <img src={img14} className="w-[100%]"/>
                                </div>

                                <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8 text-black">
                                    <div className="mx-auto bg-white text-center p-10">
                                        <h3 className=" font-semibold text-lg">Objective:</h3>
                                        <p className="px-10 mx-auto">
                                            Dreamscape Studios approached us with a visionary project aimed at creating an immersive motion graphics experience titled "A Journey Through Imagination." The objective was to craft a visually stunning animation that would transport viewers into a surreal dreamscape, evoking feelings of wonder, curiosity, and inspiration.
                                        </p>
                                    </div>
                             </div>
                             {/* card1 */}
                             <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
                                    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                                        {people.map((person) => (
                                            <li key={person.email} className="col-span-1 divide-y divide-gray-200 rounded-lg shadow">
                                                <div className="flex w-full items-center justify-between space-x-6">
                                                    <img className="h-full w-full flex-shrink-0 bg-gray-300" src={person.imageUrl} alt="" />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                             {/* card2 */}
                             <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
                                    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1">
                                        {peoples.map((person) => (
                                            <li key={person.email} className="col-span-1 divide-y divide-gray-200 rounded-lg shadow">
                                                <div className="flex w-full items-center justify-between space-x-6">
                                                    <img className="h-full w-full flex-shrink-0 bg-gray-300" src={person.imageUrl} alt="" />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                             {/* card3 */}
                             <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
                                    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
                                        {peoplesCard.map((person) => (
                                            <li key={person.email} className="col-span-1 divide-y divide-gray-200 rounded-lg shadow">
                                                <div className="flex w-full items-center justify-between space-x-6">
                                                    <img className="h-full w-full flex-shrink-0 bg-gray-300" src={person.imageUrl} alt="" />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                            
                    </div>
                </div>
        </>
    )
}