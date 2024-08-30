import { IoIosCheckmarkCircleOutline } from "react-icons/io";


const PlanCard = () => {
    return (
        <div className='flex basis-1/4 border border-1 border-[#e3e3e3] rounded-lg flex-col mb-10'>
            <div className='mx-3 my-3 bg-purple px-3 py-1 rounded-lg text-white w-[3rem] flex justify-center'>
                Pro
            </div>
            <div className='mx-3'>
                <p className='text-gray'>This plan is perfect for the active job hunter who is looking to get placed in a job in 3-6 weeks.</p>
                <div className='flex items-center py-10'>
                    <h3 className='text-[30px] font-semibold'>$299</h3>
                    <span className='text-gray'>/month</span>
                </div>
                <div className="border-y-[1px] border-[#dedede]">
                    <ul className="py-5">
                        <li className="flex gap-2 items-center text-gray px-2 py-1"><IoIosCheckmarkCircleOutline /> Feature 1</li>
                        <li className="flex gap-2 items-center text-gray px-2 py-1"><IoIosCheckmarkCircleOutline /> Feature 2</li>
                        <li className="flex gap-2 items-center text-gray px-2 py-1"><IoIosCheckmarkCircleOutline /> Feature 3</li>
                        <li className="flex gap-2 items-center text-gray px-2 py-1"><IoIosCheckmarkCircleOutline /> Feature 4</li>
                        <li className="flex gap-2 items-center text-gray px-2 py-1"><IoIosCheckmarkCircleOutline /> Feature 5</li>
                        <li className="flex gap-2 items-center text-gray px-2 py-1"><IoIosCheckmarkCircleOutline /> Feature 6</li>
                        <li className="flex gap-2 items-center text-gray px-2 py-1"><IoIosCheckmarkCircleOutline /> Feature 7</li>
                    </ul>
                </div>
                <div>
                    <button className="border border-[#dedede] w-full my-5 py-2 rounded-lg">
                        Get Started
                    </button>
                </div>
            </div>
            
        </div>
    )
}
 
const Plans = () => {
  return (
    <div className='md:mt-[100px] sm:mt-[300px] mt-[400px]'> 
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-[40px] font-semibold'>Choose your right plan!</h2>
            <p>Select from the best plans, ensuring your perfect needs.</p>
        </div>
        <div className='flex flex-wrap max-md:flex-col max-md:mx-[100px] flex-row justify-center gap-5 mt-10'>
            <PlanCard />
            <PlanCard />
            <PlanCard />
        </div>
    </div>
  )
}

export default Plans