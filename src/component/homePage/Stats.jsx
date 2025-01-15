import React from 'react'
import leaf from '../../assets/Leaf.png'
import grass1 from '../../assets/section2.1.png'
import grass2 from '../../assets/section2.2.png'
import founder1 from '../../assets/founder1.png'
import founder2 from '../../assets/founder2.png'
import founder3 from '../../assets/founder3.png'
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Stats component for displaying various statistics and a message from the founders.
 * GSAP for animations with scroll-triggered effects.
 */
function Stats() {

    // GSAP animation setup
    useGSAP(() => {

        // Animation for first content section
        gsap.from(".content1", {
            opacity: 0,
            y: 100,
            duration: 0.1,
            stagger: {
                amount: 0.1,
            },
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".main1",
                start: "top 75%",
                end: "top 35%",
                scrub: 1
            }
        });

        // Animation for second content section
        gsap.from(".content2", {
            opacity: 0,
            y: 100,
            duration: 0.1,
            stagger: {
                amount: 0.1,
            },
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".main2",
                start: "top 55%",
                end: "top 15%",
                scrub: 1
            }
        });

    });

    return (
        <>
            <div className='h-[350vh] sm:h-[200vh] w-full relative bg-gradient-to-b to-[#05251a] from-[#0a3025]'>

                {/* Main statistics section */}
                <div className='main1 h-[60vh] w-full flex justify-between p-4 sm:p-32 pt-32 sticky top-[25vh] z-0'>
                    <div className='content1 sm:h-[40%] sm:w-[20%] text-white relative'>
                        <h1 className='font-poppins text-xs sm:text-base font-light'>Spread over</h1>
                        <h1 className='font-bold text-2xl sm:text-7xl text-[#CCAD5C] font-poppins'>3500</h1>
                        <h1 className='text-[#CCAD5C] sm:text-base text-xs font-poppins'>acres</h1>
                        {/* <img src={leaf} className='absolute right-[500%] sm:top-[70%] sm:right-[30%] motion-preset-seesaw ' alt="" /> */}
                    </div>
                    <div className='content1 ch-[40%] w-[20%] text-white relative'>
                        <h1 className='font-poppins text-xs sm:text-base'>Saved and sheltered</h1>
                        <h1 className='font-bold text-2xl sm:text-7xl text-[#CCAD5C] font-poppins'>2000</h1>
                        <h1 className='text-[#CCAD5C] sm:text-base text-xs font-poppins'>species</h1>
                        {/* <img src={leaf} className='absolute left-[500%] sm:top-[70%] sm:right-[30%] motion-preset-seesaw' alt="" /> */}
                    </div>
                    <div className='content1 h-[40%] w-[20%] text-white relative'>
                        <h1 className='font-poppins text-xs sm:text-base'>dedicated staff of</h1>
                        <h1 className='font-bold text-2xl sm:text-7xl text-[#CCAD5C] font-poppins'>3000</h1>
                        <h1 className='text-[#CCAD5C] sm:text-base text-xs font-poppins'>employees</h1>
                        {/* <img src={leaf} className='absolute left-[500%] sm:top-[70%] sm:right-[30%] motion-preset-seesaw' alt="" /> */}
                    </div>
                </div>

                {/* Background section with images */}
                <div className='h-[290vh] sm:h-[140vh] w-full absolute z-40'>
                    <div className='h-[30vh] w-full '>
                        <div className='h-full w-full absolute top-6'>
                            <img src={grass1} className='h-[30vh] w-[100vw] object-cover' alt="" />
                        </div>

                        <div className='h-full w-full absolute top-20'>
                            <img src={grass2} className='h-[30vh] w-full object-cover' alt="" />
                        </div>
                    </div>

                    {/* Section with founders' message */}
                    <div className='main2 h-[260vh] sm:h-[100vh] w-full bg-[#05251a] absolute bottom-0'>
                        <h1 className="content2 text-4xl font-poppins text-center font-semibold m-20 text-transparent bg-clip-text bg-gradient-to-r from-[#CCC692] to-[#6c4c06]">
                            Message From Founders
                        </h1>

                        {/* Founders' cards with flip animation */}
                        <div className='flex items-center justify-between flex-col sm:flex-row gap-10 sm:gap-0 m-20'>
                            <div className="content2 flex items-center justify-center">
                                <div className="group perspective">
                                    <div className="relative h-[50vh] w-[70vw] sm:w-[25vw] sm:h-[50vh] transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                                        {/* Front Side */}
                                        <div className="absolute inset-0 text-white rounded-lg shadow-lg backface-hidden">
                                            <div className='m-4 ml-8'>
                                                <h2 className="text-2xl font-bold absolute bottom-8 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#CCC692] to-[#A1813E]">Anant Ambani</h2>
                                                <h2 className="text-base font-normal absolute bottom-4 text-transparent bg-clip-text bg-gradient-to-r from-[#CCC692] to-[#A1813E]">Founder and Chairperson</h2>
                                            </div>
                                            <img src={founder1} className='h-full w-full object-cover rounded-xl' alt="" />
                                        </div>
                                        {/* Back Side */}
                                        <div className="absolute inset-0 text-[#e0e0e0] bg-[#133a29] rounded-lg shadow-lg transform rotate-y-180 backface-hidden">
                                            <h2 className="text-base font-normal absolute top-3 m-7 sm:m-12">Only a few people are working for animal welfare. I think I was the chosen one. And I was fortunate enough, that with God’s blessings, I could do seva of animals. Only a few people are working for animal welfare. I think I was the chosen one.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content2 flex items-center justify-center">
                                <div className="group perspective">
                                    <div className="relative h-[50vh] w-[70vw] sm:w-[25vw] sm:h-[50vh] transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                                        {/* Front Side */}
                                        <div className="absolute inset-0 text-[#e0e0e0] rounded-lg shadow-lg backface-hidden">
                                            <div className='m-4 ml-8'>
                                                <h2 className="text-2xl font-bold absolute bottom-8 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#CCC692] to-[#A1813E]">Nita M. Ambani</h2>
                                                <h2 className="text-base font-normal absolute bottom-4 text-transparent bg-clip-text bg-gradient-to-r from-[#CCC692] to-[#A1813E]">Founder and Chairperson</h2>
                                            </div>
                                            <img src={founder2} className='h-full w-full object-cover rounded-xl' alt="" />
                                        </div>
                                        {/* Back Side */}
                                        <div className="absolute inset-0 text-[#e0e0e0] bg-[#133a29] rounded-lg shadow-lg transform rotate-y-180 backface-hidden">
                                            <h2 className="text-base font-normal absolute top-3 m-7 sm:m-12">Only a few people are working for animal welfare. I think I was the chosen one. And I was fortunate enough, that with God’s blessings, I could do seva of animals. Only a few people are working for animal welfare. I think I was the chosen one.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content2 flex items-center justify-center">
                                <div className="group perspective">
                                    <div className="relative h-[50vh] w-[70vw] sm:w-[25vw] sm:h-[50vh] transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                                        {/* Front Side */}
                                        <div className="absolute inset-0 text-white rounded-lg shadow-lg backface-hidden">
                                            <div className='m-4 ml-8'>
                                                <h2 className="text-2xl font-bold absolute bottom-8 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#CCC692] to-[#A1813E]">Radhika Merchant</h2>
                                                <h2 className="text-base font-normal absolute bottom-4 text-transparent bg-clip-text bg-gradient-to-r from-[#CCC692] to-[#A1813E]">Founder and Chairperson</h2>
                                            </div>
                                            <img src={founder3} className='h-full w-full object-cover rounded-xl' alt="" />
                                        </div>
                                        {/* Back Side */}
                                        <div className="absolute inset-0 text-[#e0e0e0] bg-[#133a29] rounded-lg shadow-lg transform rotate-y-180 backface-hidden">
                                            <h2 className="text-base font-normal absolute top-3 m-7 sm:m-12">Only a few people are working for animal welfare. I think I was the chosen one. And I was fortunate enough, that with God’s blessings, I could do seva of animals. Only a few people are working for animal welfare. I think I was the chosen one.</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Stats;