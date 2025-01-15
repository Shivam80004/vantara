import React from 'react'
import img1 from '../../assets/image 149.png'
import img2 from '../../assets/image 150.png'
import img3 from '../../assets/image 151.png'
import vector from '../../assets/Vector 3.png'

/**
 * The Achivement component displays achievements of the Vantara Trust.
 */
function Achivement() {
    return (
        <>
            {/* The main container for the achievements section. */}
            <div className='h-[100vh] w-full bg-[#05251a] relative'>
                {/* The first achievement container. */}
                <div className='h-[10vh] sm:h-[24vh] w-[20vw] bg-[#133928] rounded-lg absolute top-[20vh] right-[10vw] text-white p-2 sm:p-5'>

                    <h1 className='font-poppins font-semibold text-[5px] sm:text-sm'>Elephant Hydrotherapy <br />and Jacuzzi</h1>
                
                    <h1 className='sm:text-sm font-poppins text-[#a2a2a2] text-[4px] sm:font-[90px] mt-1'>
                        A custom hydrotherapy ponds Jacuzzi offers gentle joint relief for elephants
                    </h1>
                </div>

                {/* The first achievement image. */}
                <div className='h-[8vh] sm:h-[25vh] w-[20vw] bg-[#133928] rounded-lg absolute top-[10vh] right-[40vw] '>
                    <img src={img1} alt="" className='object-cover' />
                </div>

                {/* The second achievement container. */}
                <div className='h-[10vh] sm:h-[22vh] w-[19vw] bg-[#133928] rounded-lg absolute top-[69vh] right-[48vw] z-10 text-white p-2 sm:p-3'>
    
                    <h1 className='font-poppins font-semibold text-[5px] sm:text-sm'>Elephant Hydrotherapy <br />and Jacuzzi</h1>
                    
                    <h1 className='sm:text-sm font-poppins text-[#a2a2a2] text-[4px] sm:font-[90px] mt-1'>
                        A custom hydrotherapy ponds Jacuzzi offers gentle joint relief for elephants
                    </h1>
                </div>

                {/* The second achievement image. */}
                <div className='h-[8vh] sm:h-[25vh] w-[20vw] bg-[#133928] rounded-lg absolute top-[55vh] right-[18vw] z-10'>
                    <img src={img2} alt="" className='object-cover' />
                </div>

                {/* The third achievement container. */}
                <div className='h-[10vh] sm:h-[22vh] w-[18vw] bg-[#133928] rounded-lg absolute top-[20vh] left-[10vw] p-2 sm:p-5 text-[#e3e2e2]'>

                    <h1 className='font-poppins font-semibold text-[5px] sm:text-sm'>Elephant Hydrotherapy <br />and Jacuzzi</h1>
                
                    <h1 className='sm:text-sm font-poppins text-[#a2a2a2] text-[4px] sm:font-[90px] mt-1'>
                        A custom hydrotherapy ponds Jacuzzi offers gentle joint relief for elephants
                    </h1>
                </div>

                {/* The third achievement image. */}
                <div className='h-[8vh] sm:h-[32vh] w-[20vw] bg-[#133928] rounded-lg absolute top-[50vh] left-[5vw] z-10'>
                    <img src={img3} alt="" className='object-cover' />
                </div>

                {/* The vector image for the background. */}
                <img src={vector} className='opacity-20 z-0 absolute bottom-0' alt="" />
            </div>
        </>
    )
}

export default Achivement;