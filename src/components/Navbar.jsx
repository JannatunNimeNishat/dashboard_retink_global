
import search_icon from '../assets/navbar/Search.jpg'
import filters_icon from '../assets/navbar/filters.png'
import cancel_icon from '../assets/navbar/cancle.png'
import coin_icon from '../assets/navbar/coin.png'
import calendar_icon from '../assets/navbar/Calendar.png'
import alert_icon from '../assets/navbar/Alert.png'
import avatar_icon from '../assets/navbar/avatar.png'
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Link } from 'react-router-dom'




const Navbar = () => {
    const { user } = useContext(AuthContext);
   
    return (
        <>
            {/* navbar lg  */}
            <div className="max-h-[82px] bg-[#FFF] border-[1px] border-[#EBEAEF] shadow-[0_7px_20px_0_rgba(0,0,0,0.07)]  hidden lg:flex justify-between ">

                <div className="bg-[#FFF] w-[1000px] flex items-center justify-between  px-4 py-3">
                    {/* search */}
                    <div className="w-[555px] h-[48px] rounded-[6px] border-[1px] border-[#EBEAEF] shadow-[0_7px_64px_0_rgba(0,0,0,0.07)] flex items-center justify-between px-4">
                        <div className='flex items-center gap-3'>
                            <img src={search_icon} alt="" />
                            <input className='w-[380px]' type="text" name="" placeholder='Search for templates, projects, etc' id="" />
                        </div>
                        <div className='flex items-center gap-3'>
                            <img className='cursor-pointer' src={filters_icon} alt="" />
                            <img className='cursor-pointer' src={cancel_icon} alt="" />
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        {/* button */}
                        <button className='w-[189px] h-[40px] rounded-[18px] text-white text-[13px] font-medium bg-[#754DE8]
         transition ease-in-out delay-75   hover:scale-105  duration-200
        '>Create Content</button>
                        {/*  */}
                        <div className='bg-[#F1EDFD] rounded-[15px] w-[78px] h-[39px] shadow-[0_7px_20px_0_rgba(0,0,0,0.07)]   flex items-center justify-center gap-1'>
                            <img src={coin_icon} alt="" />
                            <p className='text-[18px] text-[#463D61] font-semibold'>20</p>
                        </div>
                    </div>


                </div>
                <div className="bg-[#F1EDFD] w-[250px] flex items-center justify-between px-3 py-1 ">
                    <img className='cursor-pointer' src={calendar_icon} alt="" />
                    <img className='cursor-pointer' src={alert_icon} alt="" />

                    {
                        user ?
                              <img className='cursor-pointer w-[42px] h-[42px]' src={user?.photoURL||  avatar_icon} alt="" />
                                
                            :
                            <Link to='/login' className='rounded-[18px] px-5 py-2 text-white text-[13px] font-medium bg-[#754DE8]
                            transition ease-in-out delay-75   hover:scale-105  duration-200'>Login</Link>
                    }

                </div>
            </div>

            
        </>
    );
};

export default Navbar;