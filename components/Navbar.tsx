import Button from '@/components/Button';
import { navLinks } from '@/data';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <div className='px-[100px] py-5 flex justify-between items-center' >
            <h1 className='text-3xl font-bold font-heebo'>RESUM<span className='text-purple'>AI</span></h1>
            <div>
                <ul className='flex gap-8'>
                  {navLinks.map(({href, label, id}) => (
                    <Link href={href} key={id} className='hover:text-purple font-semibold font-heebo'>{label}</Link>
                  ))}
                </ul>
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