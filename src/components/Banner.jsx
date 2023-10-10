/* 
import glob_img from '../assets/banner/glob.png'*/
import glob_img from '../assets/banner/shape1.png'
import blend_img from '../assets/banner/blend.png'
import shape2_img from '../assets/banner/shape2.png'

const Banner = () => {
    return (
        <div className=" h-[290px] banner-gradient mt-[32px] my-[17px] mx-4 rounded-[20px]  relative"

        >
            <div className="flex justify-between items-center px-5">
                <h3 className="text-[48px] font-medium text-[#4D4959] ">Hey James! </h3>
                <select name="" id="" className="w-[140px] h-[38px] px-2 py-1 bg-white rounded-[10px] z-10">
                    <option className="text-[14px] font-normal" value="Zara ventures">Zara ventures</option>
                </select>
            </div>
            <div className="mt-[20px] flex justify-between px-5">
                <p className="text-[20px] font-medium text-[#4D4959] ">Lets create something awesome today ✨💫</p>

                <div className="text-[#4D4959] text-[16px] z-10 font-medium glass px-3 py-3 mb-16">
                    <p className=''>You should have more engagement by 6pm today, try posting then.  📆 </p>
                    <p className="">Try our SEO optimization tool to increase engagement by 40% 🔥</p>
                </div>
            </div>
            <button className="absolute bottom-11 left-5 w-[201px] h-[48px] flex items-center py-[13px] px-[48px] rounded-[20px] border-[2px] border-[#754DE8] text-[16px] text-[#754DE8] font-semibold hover:bg-[#754DE8] hover:text-white delay-75 duration-75 ">Start Crating</button>

            <img className='absolute top-0 right-0 bottom-0 z-auto ' src={blend_img} alt="" />
            <img className='absolute  right-[56px] bottom-0 z-10 ' src={glob_img} alt="" />
            <img className='absolute  left-96 top-0 z-10 ' src={shape2_img} alt="" />

        </div>
    );
};

export default Banner;