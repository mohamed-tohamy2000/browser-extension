import logo from '../assets/images/logo.svg'
import { IoSunnyOutline } from "react-icons/io5";

export default function () {
  return (
    <header className=' flex w-full h-[74px] bg-[#202535] justify-between items-center px-3 py-4 rounded-3xl' >
        <div className='flex w-[179px] h-[41] justify-center items-center gap-3  '>
            <img className='w-[40px] h-[41px]' src={logo} alt="Logo" />
        <h1 className='text-2xl font-semibold  w-[127px] h-[31px]'>Extensions</h1>
        </div>
        <button className='flex justify-center items-center bg-[#2F364B] rounded-2xl w-[50px] h-[50px]'>
            <IoSunnyOutline className='w-[22px] h-[22px]' />
        </button>
    </header>
  )
}
