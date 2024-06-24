import React from 'react'
import site1 from "../../public/site1.png"
export default function GridProject() {
    return (
        <>
            <div className='w-[1200px] mx-auto'>
                <div className="max-w-min mx-auto grid grid-cols-fixed-3 grid-rows-fixed-3 gap-3 text-white">
                    <div className="bg-[url('../../public/site1.png')]  bg-no-repeat bg-center bg-cover col-span-2">
                       
                    </div>
                    <div className="bg-[url('../../public/site1.png')]  bg-no-repeat bg-center bg-cover row-span-2">
                        <img src={site1} />
                    </div>
                    <div className="bg-[url('../../public/site1.png')]  bg-no-repeat bg-center bg-cover row-span-2">
                        <img src={site1} />
                    </div>
                    <div className="bg-[url('../../public/site1.png')]  bg-no-repeat bg-center bg-cover row-span-2">
                        <img src={site1} />
                    </div>
                    <div className="bg-[url('../../public/site1.png')]  bg-no-repeat bg-center bg-cover row-span-2">
                        <img src={site1} />
                    </div>
                    <div className="bg-[url('../../public/site1.png')]  bg-no-repeat bg-center bg-cover col-span-2">
                        <img src={site1} />
                    </div>
                </div>
            </div>

        </>
    )
}
