import React from 'react'
import vid from '../../assets/homeVideo.webm'
import greenOverlay from '../../assets/2 - BG - Green Colour Overlay.png'
import text from '../../assets/Experience Wildlife.png'
import logo from '../../assets/Logo.png'
import c2 from '../../assets/C2.png'
import c3 from '../../assets/C3.png'
import circle from '../../assets/Rectangle.png'
import { gsap } from 'gsap';
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);
function Hero() {

  useGSAP(()=>{

    const lenis = new Lenis();
    
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 600));
    gsap.ticker.lagSmoothing(0);

    const tl = gsap.timeline();

    tl.to(".cd1", { x: 1200, duration: 10, opacity:0, ease: "power0.5.out"})
    gsap.to(".cd2", { x: -1200, duration: 10, opacity:0, ease: "power0.5.out"})
    gsap.from(".logo",{ opacity:0 , duration: 7, ease: "power0.5.out"})
    tl.to(".circle", { scale:function() {
      return window.innerWidth > 768 ? 2.5 : 5.8;}, y:function() {
      return window.innerWidth > 768 ? -920 : -400;} , duration:5 }, "-=3.6" )
    tl.to(".logo",{ scale:1, height:function() {
      return window.innerWidth > 768 ? 36 : 15;},
       duration:2, y:-290, ease: "power0.5.out"})
    tl.to(".rect", {opacity:0, ease: "power0.5.out"} ,)
    tl.to(".wrapper", {opacity:0, x:1200, ease: "power0.5.out"}, "-=1.2")
    tl.to(".circle", {opacity:0, ease: "power2.5.out"}, "-=0.2")
    tl.to(".circle", {x:-500, ease: "power2.5.out"}, "-=0.2")

  });

  return (
    <>
        <div className='h-screen sm:h-[350vh] w-full font-extrabold relative bg-white overflow-hidden'>

              <div className='h-[20vh] sm:h-[30vh] w-full bg-[#fcfcfc] absolute top-0 z-10'></div>


              <div className='h-[160%] sm:h-full sm:w-full absolute top-[-30vh] sm:top-[-22vh]'>
                  <video className='h-full w-full object-scale-down sm:object-cover' src={vid} autoPlay muted loop />
              </div>

              <div className='logo h-[4vh] sm:h-[15vh] w-full absolute sm:top-[50vh] top-[45vh] z-40 flex justify-center pointer-events-none'>
                 <img src={logo} alt="" />
              </div>

              <div className='h-[25vh] w-full absolute top-[7vh] sm:top-[22vh] flex flex-col justify-center items-center z-20'>
                  <img src={text} className='h-[3.5vh] sm:h-[10vh] pointer-events-none' alt="" />
                  <h1 className='font-normal text-xs p-5 pl-12 pr-12 sm:text-lg sm:pl-72 sm:pr-72 text-center'>Lorem ipsum dolor sit amet consectetur. Integer pulvinar molestie sit morbi dictum mauris feugiat in pharetra. Morbi nibh curabitur lectus.</h1>
              </div>

              <div className='h-[40vh] sm:h-[55vh] w-[100vw] absolute bottom-[-15vh]'>
                  <img className='h-full w-full object-fit' src={greenOverlay} alt="" />
              </div>

              <div className='rect h-[120vh] w-full bg-[#0A3224] absolute top-0 z-20'></div>
             
              <div className='cd1 absolute top-[30vh] sm:top-[-17vh] right-0 mix-blend-screen z-40'>
                    <img src={c2} alt="" />
              </div>

              <div className='cd2 absolute top-[30vh] sm:top-[-17vh] left-0 mix-blend-screen z-40'>
                    <img src={c3} alt="" />
              </div>

              <div className='circle absolute top-[90vh] z-30'>
                  <img src={circle} className='scale-50' alt="" />
              </div>

              <div className='wrapper h-[900vh] w-full bg-[#0A3224] absolute top-[110vh] overflow-visible z-50'></div>
        </div>
    </>
  )
}

export default Hero