import { plans } from "@/data";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

interface Props {
    id: number;
    label: string;
    description: string,
    features: [];
}

const PlanCard = ({id, label, features, description}: Props) => {
    return (
        <div key={id} className='flex basis-1/4 border border-1 border-[#e3e3e3] rounded-lg flex-col mb-10 h-[600px] justify-between'>
            <div>
                <div className='mx-3 my-3 bg-purple px-3 py-1 rounded-lg text-white w-[4.5rem] flex justify-center'>
                    {label}
                </div>
            <div className='mx-3'>
                <p className='text-gray h-[100px]'>{description}</p>
                <div className='flex items-center py-10'>
                    <h3 className='text-[30px] font-semibold'>$299</h3>
                    <span className='text-gray'>/month</span>
                </div>
                <div className="border-y-[1px] border-[#dedede]">
                    <ul className="py-5">
                        {features.map((feature) => (
                            <li className="flex gap-2 items-center text-gray px-2 py-1"><IoIosCheckmarkCircleOutline /> {feature}</li>
                        ))} 
                    </ul>
                </div>
                
            </div>
            </div>
            
            <div className="mx-3">
                <button className="border border-[#dedede] w-full my-5 py-2 rounded-lg">
                    Get Started
                </button>
            </div>
            
        </div>
    )
}
 
const Plans = () => {
  return (
    <div id="pricing" className='md:mt-[100px] mt-[50px]'> 
        <div className='flex flex-col justify-center items-center md:px-0 px-5 text-center '>
            <h2 className='md:text-[40px] text-[30px] font-semibold text-center'>Choose your right plan!</h2>
            <p className="">Select from the best plans, ensuring your perfect needs.</p>
        </div>
        <div className='flex flex-wrap max-md:flex-col mx-5 flex-row justify-center gap-5 mt-10'>
            {plans.map(({id, label, features, description}) => (
                <PlanCard id={id} label={label} features={features} description={description}/>
            ))}
            
        </div>
    </div>
  )
}

export default Plans