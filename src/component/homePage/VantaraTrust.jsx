import React from 'react'
import logo from '../../assets/Logo.png'
import sun from '../../assets/sun.png'
import grass1 from '../../assets/grass 1.png'
import grass2 from '../../assets/grass 2.png'
import left from '../../assets/left.png'
import right from '../../assets/right.png'
import middle from '../../assets/middle.png'
import lower_grass1 from '../../assets/lower_grass1.png'
import lower_grass2 from '../../assets/lower_grass2.png'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function VantaraTrust() {

    useGSAP(() => {


        gsap.from(".content",
            {
                opacity: 0,
                y: 50,
                duration: 0.1,
                stagger: {
                    amount: 0.5,
                },
                ease: "power5.out",
                scrollTrigger: {
                    trigger: ".main",
                    start: "top 65%",
                    end: "top 0%",
                    scrub: 1,
                }
            }
        )
        

    })

    return (
        <>
            <div className='main h-[80vh] sm:h-[160vh] w-full bg-[#05251a] relative overflow-hidden'>

                <div className='content h-[70vh] w-[70vh] absolute z-0 top-16 left-0 sm:left-64'>
                    <img src={sun} alt="" />
                </div>

                <div className='flex flex-col items-center justify-center absolute top-40 left-0 sm:left-64 z-10'>
                    <img src={logo} alt="logo" className='content h-[4vh] sm:h-[8vh]' />
                    <h1 className="content sm:text-4xl font-poppins text-center font-semibold m-7 text-transparent bg-clip-text bg-gradient-to-r from-[#CCC692] to-[#c09230]">
                        A second chance for wildlife in need
                    </h1>
                    <h1 className='content font-poppins font-extralight pl-10 pr-10 text-[8px] sm:text-base text-center text-white'>An animal welfare initiative, Vantara is driven by two trusts: the Radhe Krishna Temple Elephant Welfare Trust<br /> (RKTEWT) and the Greens Zoological Rescue and Rehabilitation Centre (GZRRC).</h1>
                </div>

                <div className='h-[90vh] w-[100vw] absolute z-0 top-[40vh]'>
                    <img src={grass1} alt="" />
                </div>


                <div className='h-[90vh] w-[100vw] absolute z-0 top-[50vh]'>
                    <img src={grass2} alt="" />
                </div>


                <div className='content1 h-[25vh] w-[25vw] pointer-events-none absolute z-0 top-[60vh] sm:top-[80vh] left-7 sm:left-16'>
                    <img src={left} alt="" />
                </div>


                <div className='content2 h-[25vh] w-[25vw] pointer-events-none absolute z-0 top-[60vh] sm:top-[80vh] right-7 sm:right-16'>
                    <img src={right} alt="" />
                </div>


                <div className='content h-[30vh] w-[30vw] absolute z-0 top-[57vh] sm:top-[70vh] left-[35vw]'>
                    <img src={middle} alt="" />
                </div>

                <div className='absolute bottom-[-7vh] h-[0vh] w-[100vw]'>
                    <img src={lower_grass1} className="object-cover" alt="" />
                </div>

                <div className='absolute bottom-[-7vh] h-[0vh] w-[100vw]'>
                    <img src={lower_grass2} alt="" />
                </div>


            </div>
        </>
    )
}

export default VantaraTrust