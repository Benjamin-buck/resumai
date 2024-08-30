import Button from '@/components/Button';

const Navbar = () => {
  return (
    <div>
        <div className='px-[100px] py-5 flex justify-between items-center' >
            <h1 className='text-3xl font-bold font-heebo'>RESUM<span className='text-purple'>AI</span></h1>
            <div>
                <h2>Navbar</h2>
            </div>
            <div className='gap-3 flex'>
                <Button label="Log in" href="/login"/>
                <Button label="Sign Up" href="/signup" />
            </div>
        </div>

    </div>
  )
}

export default Navbar