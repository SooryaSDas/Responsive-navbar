import React,{useState} from 'react'
import {Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const Header = () => {
    let [isOpen,setisopen] = useState(false);
  return (
    <div>
       <div className='bg-slate-50 w-full fixed top-0 left-0  z-[1]'>
            <div className='md:flex items-center justify-between py-4 md:pl-40 md:pr-40'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <Link className="w-[63.9px]" to="/"> <img src="../img/dv-homes.png" alt="logo" /> </Link>
                </div>
                {/* Menu icon */}
                <div onClick={()=>setisopen(!isOpen)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        isOpen ? <XMarkIcon/> : <Bars3BottomRightIcon />
                    }
                </div>
                {/* link items */}
                <ul className={`bg-slate-50 md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
                    <li className='md:ml-8 md:my-0 my-7 '>
                        <Link to="/" className='[font-family:"Dessau-Medium",Helvetica] w-fit tracking-[0] text-[18px] font-medium leading-[22px] whitespace-nowrap relative text-black'>Home</Link>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to="/buy" className='[font-family:"Dessau-Medium",Helvetica] w-fit tracking-[0] text-[18px] font-medium leading-[22px] whitespace-nowrap relative text-black'>Buy</Link>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to="/sell" className='[font-family:"Dessau-Medium",Helvetica] w-fit tracking-[0] text-[18px] font-medium leading-[22px] whitespace-nowrap relative text-black'>Sell</Link>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to="/" className='[font-family:"Dessau-Medium",Helvetica] w-fit tracking-[0] text-[18px] font-medium leading-[22px] whitespace-nowrap relative text-black'>Home Valuation</Link>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to="/" className='[font-family:"Dessau-Medium",Helvetica] w-fit tracking-[0] text-[18px] font-medium leading-[22px] whitespace-nowrap relative text-black'>Market Report</Link>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to="/about" className='[font-family:"Dessau-Medium",Helvetica] w-fit tracking-[0] text-[18px] font-medium leading-[22px] whitespace-nowrap relative text-black'> About Us</Link>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to="/login" className='[font-family:"Dessau-Medium",Helvetica] w-fit tracking-[0] text-[18px] font-medium leading-[22px] whitespace-nowrap relative text-black'> Login</Link>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to="/contact" className='[font-family:"Dessau-Medium",Helvetica] w-fit tracking-[0] text-[18px] font-medium leading-[22px] whitespace-nowrap relative text-black'>
                            <div className="inline-flex items-start gap-[10px] flex-[0_0_auto] px-[16px] py-[10px] rounded-[22px] bg-primary1 hover:bg-tertiary1 relative">
                                <div className="inline-flex items-start gap-[10px] flex-[0_0_auto] pt-0 pb-[2px] px-0 relative">
                                    <div className="[font-family:'Dessau-Medium',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[18px] font-medium leading-[22px] whitespace-nowrap relative text-slate-50">
                                        Get in touch
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}


  
export default Header


