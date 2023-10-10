
import sidebar_img_1 from './assets/side_bar/btn-1.png'
import home from './assets/side_bar/Home.png'
import content from './assets/side_bar/ContentViewGallery.png'
import setting from './assets/side_bar/Settings.png';
import logout from './assets/side_bar/logout.png';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        {/* <div className="drawer-content flex flex-col items-center justify-center"> */}
        <div className="drawer-content  min-h-full">
          {/* Page content here */}
          <label htmlFor=" my-drawer-2" className=" btn btn-primary drawer-button lg:hidden">Open drawer</label>
          <Navbar />
          <Banner/>

        </div>
        <div className="drawer-side border">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          {/* <ul className="menu py-6 px-4 w-[120px] min-h-full bg-[#F1EDFD] text-base-content flex flex-col items-start gap-[434px] border"> */}
          <ul className="menu py-6 px-4 w-[110px] min-h-full bg-[#F1EDFD] text-base-content flex flex-col items-start gap-[150px] ">
            {/* Sidebar content here */}
            {/* <div className='flex flex-col  w-full h-full border'> */}
            <div className=''>
              <li className=''><img className='object-contain p-[10px]' src={sidebar_img_1} alt="" /></li>
              <li className=' mt-[45px] bg-[#EAE4FC]  rounded-[10px] '><img className='object-contain p-[15px]' src={home} alt="" /></li>
              <li className='mt-[45px]'><img className='object-contain p-[15px] ' src={content} alt="" /></li>
            </div>
            <div className=''>
              <li className=''><img className='object-contain p-[10px]' src={setting} alt="" /></li>
              <li className=' mt-[45px]   rounded-[15px] '><img className='object-contain p-[24px]' src={logout} alt="" /></li>
            </div>
            {/* </div> */}

          </ul>

        </div>
      </div>

    </>
  )
}

export default App
