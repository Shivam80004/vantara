import React from 'react'
import Elephant from '../../assets/Elephant.png'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function TextAnimation() {

  useGSAP(() => {
    gsap.fromTo('.sec-text',
      {
        width: "0%"
      },
      {
        width: "50%",
        duration: 1,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: ".main-area",
          start: "top 60%",
          end: "+=90%",
          scrub: 1,
          //markers: true,
        },
      });
  });

  return (
    <>
      <div className='main-area h-[80vh] sm:h-[100vh] w-full bg-[#05251a] relative font-medium text-[8px] sm:text-3xl font-poppins'>
       
        <div className="text-[#474747] absolute top-[28vh] font-poppinss left-[29%]">Vantara&nbsp;has&nbsp;shouldered&nbsp;the&nbsp;task&nbsp;of&nbsp;not&nbsp;just</div>
        <div className="sec-text w-[0] overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[#CCC692] to-[#c39226] absolute top-[28vh] font-poppinss left-[29%]">Vantara&nbsp;has&nbsp;shouldered&nbsp;the&nbsp;task&nbsp;of&nbsp;not&nbsp;just</div>
  
        <div className="text-[#474747] absolute top-[35vh] font-poppinss left-[29%]">bringing&nbsp;over&nbsp;2000&nbsp;animals&nbsp;home&nbsp;but&nbsp;also</div>
        <div className="sec-text w-[0] overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[#CCC692] to-[#c39226] absolute top-[35vh] font-poppinss left-[29%]">bringing&nbsp;over&nbsp;2000&nbsp;animals&nbsp;home&nbsp;but&nbsp;also</div>
  
        <div className="text-[#474747] absolute top-[42vh] font-poppinss left-[29%]">making&nbsp;them&nbsp;feel&nbsp;at&nbsp;home&nbsp;while&nbsp;enjoying&nbsp;a</div>
        <div className="sec-text w-[0] overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[#CCC692] to-[#c39226] absolute top-[42vh] font-poppinss left-[29%]">making&nbsp;them&nbsp;feel&nbsp;at&nbsp;home&nbsp;while&nbsp;enjoying&nbsp;a</div>
  
        <div className="text-[#474747] absolute top-[49vh] font-poppinss left-[40%]">high&nbsp;quality&nbsp;of&nbsp;life.</div>
        <div className="sec-text w-[0] overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[#CCC692] to-[#c39226] absolute top-[49vh] font-poppinss left-[40%]">high&nbsp;quality&nbsp;of&nbsp;life.</div>
  
        
        {/* <div className='main_text font-normal text-3xl text-[#ffd781] font-poppins absolute top-[48vh] right-[25vw]'>bringing&nbsp;over&nbsp;2000&nbsp;animals&nbsp;home&nbsp;but&nbsp;also</div>
        <div className='sec_text w-[0] overflow-hidden text-3xl text-[#775916] font-poppins absolute top-[48vh] right-[25vw]'>bringing&nbsp;over&nbsp;2000&nbsp;animals&nbsp;home&nbsp;but&nbsp;also</div>
        <div className='main_text font-normal text-3xl text-[#ffd781] font-poppins absolute top-[55vh] right-[25vw]'>making&nbsp;them&nbsp;feel&nbsp;at&nbsp;home&nbsp;while&nbsp;enjoying&nbsp;a</div>
        <div className='sec_text font-normal w-[0] overflow-hidden text-3xl text-[#775916] font-poppins absolute top-[55vh] right-[25vw]'>making&nbsp;them&nbsp;feel&nbsp;at&nbsp;home&nbsp;while&nbsp;enjoying&nbsp;a</div>
        <div className='main_text font-normal text-3xl text-[#ffd781] font-poppins absolute top-[63vh] right-[38vw]'>high&nbsp;quality&nbsp;of&nbsp;life.</div>
        <div className='sec_text font-normal w-[0] overflow-hidden text-3xl text-[#775916] font-poppins absolute top-[63vh] right-[38vw]'>high&nbsp;quality&nbsp;of&nbsp;life.</div> */}

        <img src={Elephant} className="h-full w-full" alt="" />
      </div>
      {/* <div className="main_area h-screen w-full bg-blue-700">
        <div className="text-area relative font-poppins font-bold text-7xl uppercase">
          <div className="grey-text text-blue-500 absolute text-3xl top-[40vh] right-[25vw]">
            Vantara&nbsp;has&nbsp;shouldered&nbsp;the&nbsp;task&nbsp;of&nbsp;not&nbsp;just
          </div>
          <div className="white-text w-[0] overflow-hidden text-white absolute text-3xl top-[40vh] right-[25vw]">
            Vantara&nbsp;has&nbsp;shouldered&nbsp;the&nbsp;task&nbsp;of&nbsp;not&nbsp;just
          </div>

          <div className="grey-text text-blue-500 absolute text-3xl top-[48vh] right-[25vw]">
            bringing&nbsp;over&nbsp;2000&nbsp;animals&nbsp;home&nbsp;but&nbsp;also
          </div>
          <div className="white-text w-[0] overflow-hidden text-white absolute text-3xl top-[48vh] right-[25vw]">
            bringing&nbsp;over&nbsp;2000&nbsp;animals&nbsp;home&nbsp;but&nbsp;also
          </div>

          <div className="grey-text text-blue-500 absolute text-3xl top-[55vh] right-[25vw]">
            making&nbsp;them&nbsp;feel&nbsp;at&nbsp;home&nbsp;while&nbsp;enjoying&nbsp;a
          </div>
          <div className="white-text w-[0] overflow-hidden text-white absolute text-3xl top-[55vh] right-[25vw]">
            making&nbsp;them&nbsp;feel&nbsp;at&nbsp;home&nbsp;while&nbsp;enjoying&nbsp;a
          </div>

          <div className="grey-text text-blue-500 absolute text-3xl top-[63vh] right-[38vw]">
            high&nbsp;quality&nbsp;of&nbsp;life.
          </div>
          <div className="white-text w-[0] overflow-hidden text-white absolute text-3xl top-[63vh] right-[38vw]">
            high&nbsp;quality&nbsp;of&nbsp;life.
          </div>
        </div>
      </div> */}

    </>
  )
}

export default TextAnimation;