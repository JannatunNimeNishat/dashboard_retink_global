
import sidebar_img_1 from './assets/side_bar/btn-1.png'
import home from './assets/side_bar/Home.png'
import content from './assets/side_bar/ContentViewGallery.png'
import setting from './assets/side_bar/Settings.png';
import logout from './assets/side_bar/logout.png';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SocialMedia from './components/SocialMedia';
import { useContext } from 'react';
import { AuthContext } from './provider/AuthProvider';

import sm_menu_icon from './assets/navbar/sm/ep_menu.png'
import avatar_icon from './assets/navbar/avatar.png'

import { Container, Button, purple, lightColors, darkColors } from 'react-floating-action-button'

function App() {
  const { sidebar } = useContext(AuthContext);
  console.log('sidebar', sidebar);
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content   min-h-full min-w-full">
          {/* Page content here */}
          {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}


          {/* navbar sm */}
          {<div className='flex justify-between items-center lg:hidden px-8 py-10 z-10 bg-transparent gap-10 fixed h-[40px]'>
            <label htmlFor="my-drawer-2" className="lg:hidden w-[40px] h-[40px] flex items-center justify-center bg-[rgba(255,255,255,0.58)] rounded-[12px] ">
              <img className="lg:hidden w-[25px] h-[25px]" src={sm_menu_icon} alt="" />
            </label>
            <select name="" id="" className="w-[140px] h-[38px] px-2 py-1 bg-white rounded-[10px] z-10">
              <option className="text-[14px] font-normal" value="Zara ventures">Zara ventures</option>
            </select>
            <img className='cursor-pointer' src={avatar_icon} alt="" />
          </div>}

          {/* navbar lag */}
          <Navbar />

          <Banner />
          <div className='pt-[37px] pb-[10px] lg:pt-[17px] lg:pb-[17px] px-5  text-[#4D4959]'>
            <h3 className='text-18px] lg:text-[27px] font-semibold'>Most Popular Tools</h3>
            <p className='text-[14px] lg:text-[18px]'>Explore the trending tools to create your copies fast</p>
          </div>
          <SocialMedia />

          {/* floating btn */}
    
          <Container className=" lg:hidden ">
           
            <Button
                icon="fas fa-plus"
                className="rounded-2xl text-2xl "
                styles={{backgroundColor: darkColors.purple, color: lightColors.white}}
                >+</Button>
        </Container>



        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[110px] min-h-full bg-base-200 text-base-content 
          flex flex-col items-start gap-[150px]
          ">
            {/* Sidebar content here */}
            <div className='pt-14 lg:pt-0'>
              <li className=''><img className='object-contain p-[10px]' src={sidebar_img_1} alt="" /></li>
              <li className=' mt-[45px] bg-[#EAE4FC]  rounded-[10px] '><img className='object-contain p-[15px]' src={home} alt="" /></li>
              <li className='mt-[45px]'><img className='object-contain p-[15px] ' src={content} alt="" /></li>
            </div>
            <div className=''>
              <li className=''><img className='object-contain p-[10px]' src={setting} alt="" /></li>
              <li className=' mt-[45px]   rounded-[15px] '><img className='object-contain p-[24px]' src={logout} alt="" /></li>
            </div>
          </ul>

        </div>
      </div>

    </>
  )
}

export default App
