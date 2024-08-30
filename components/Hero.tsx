import Button from '@/components/Button';

const Hero = () => {
  return (
    <div className='flex justify-center h-[90vh]'>
        <div className='mt-[10rem]'>
            <div className='font-heebo text-center w-[45rem]'>
                <h2 className='text-[50px] leading-[60px] font-bold'>Boost Resume Performance with the Power of <span className='text-purple'>AI</span>.</h2>
                <p className='mt-4'>Employers are using AI tools in their hiring process, why aren't you? Resum<span className='text-purple'>AI</span> is a tool designed to help you beat the employer's AI systems using your real job qualificiations.</p>
                <div className='mt-8 flex gap-4 justify-center'>
                  <Button label="Get started" href='/signup'/>
                  <Button label="Learn more" href='/signup' />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero