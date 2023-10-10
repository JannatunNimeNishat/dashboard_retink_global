import edit_yellow_icon from '../assets/socail_media/Edit_yellow.png'
import edit_green_icon from '../assets/socail_media/edit_green.png'
import edit_pruple_icon from '../assets/socail_media/edit_purple.png'
import trending_img from '../assets/socail_media/ArrowTrending.png';


const data = [
    {
        id: 0,
        title: "Blog writing",
        desc: "Generate the best blog post to fit your audience with just few clicks of a button ",
        edit_img: edit_yellow_icon,
        trending: trending_img
    },
    {
        id: 1,
        title: "Product description",
        desc: "Instantly generate engaging product descriptions that sell ",
        edit_img: edit_green_icon,
        trending: trending_img
    },
    {
        id: 2,
        title: "Article writer",
        desc: "Automatically create unique factual articles at the touch of a button ",
        edit_img: edit_pruple_icon,
        trending: trending_img
    },
    {
        id: 3,
        title: "Blog writng",
        desc: "Generate the best blog post to fit your audience with just few clicks of a button  ",
        edit_img: edit_yellow_icon,
        trending: trending_img
    },
]

const SocialMedia = () => {
    return (
        <div className=" bg-[#F4F3F6] shadow-[0_7px_20px_0_rgba(53,35,104,0.10)] rounded-[20px] mx-4 my-5 w-full">
            {/* 1st */}
            <p className="hidden lg:block text-[#4D4959] text-[20px] py-2">Social media</p>
            <p className="lg:hidden block text-[#4D4959] font-semibold text-[14px] py-2">Blog Writing</p>
            <div className=' w-full overflow-x-auto  lg:overflow-x-hidden'>
                <div className="grid grid-cols-4 lg:gap-4 w-[650px] lg:w-full">
                    {
                        data.map(item =>
                            <div
                                key={item.id}
                                className="bg-white pt-[8px] lg:pt-[14px] pr-[10px] lg:pr-[20px] pb-[8px] lg:pb-[30px] ps-[10px] lg:ps-[22px] rounded-[10px]
                        transition ease-in-out delay-75   hover:scale-95  duration-200 cursor-pointer mx-3
                        h-[136px] w-[142px] lg:h-full lg:w-full 
                        "
                            >
                                <div className="flex justify-between items-center">
                                    <img className=' h-[16px] w-[16px] lg:h-[24px] lg:w-[24px]  cursor-pointer transition ease-in-out delay-75   hover:scale-150  duration-200' src={item.edit_img} alt="" />
                                    <img className=' h-[16px] w-[16px] lg:h-[24px] lg:w-[24px]  cursor-pointer transition ease-in-out delay-75   hover:scale-150  duration-200' src={item.trending} alt="" />
                                </div>
                                <div className="lg:mt-3 lg:mb-2">
                                    <h3 className="text-[14px] lg:text-[20px] font-semibold py-2">{item.title}</h3>
                                    <p className="text-[11px] lg:text-[16px] font-semibold">{item.desc}</p>
                                </div>
                            </div>)
                    }
                </div>
            </div>


            {/* 2nd */}
            <p className=" text-[#4D4959] text-[20px] py-2">Social media</p>
            <div className=' w-full overflow-x-auto  lg:overflow-x-hidden'>
                <div className="grid grid-cols-4 lg:gap-4 w-[650px] lg:w-full">
                    {
                        data.map(item =>
                            <div
                                key={item.id}
                                className="bg-white pt-[8px] lg:pt-[14px] pr-[10px] lg:pr-[20px] pb-[8px] lg:pb-[30px] ps-[10px] lg:ps-[22px] rounded-[10px]
                        transition ease-in-out delay-75   hover:scale-95  duration-200 cursor-pointer mx-3
                        h-[136px] w-[142px] lg:h-full lg:w-full 
                        "
                            >
                                <div className="flex justify-between items-center">
                                    <img className=' h-[16px] w-[16px] lg:h-[24px] lg:w-[24px]  cursor-pointer transition ease-in-out delay-75   hover:scale-150  duration-200' src={item.edit_img} alt="" />
                                    <img className=' h-[16px] w-[16px] lg:h-[24px] lg:w-[24px]  cursor-pointer transition ease-in-out delay-75   hover:scale-150  duration-200' src={item.trending} alt="" />
                                </div>
                                <div className="lg:mt-3 lg:mb-2">
                                    <h3 className="text-[14px] lg:text-[20px] font-semibold py-2">{item.title}</h3>
                                    <p className="text-[11px] lg:text-[16px] font-semibold">{item.desc}</p>
                                </div>
                            </div>)
                    }
                </div>
            </div>

            {/* 3rd */}
            <p className=" block lg:hidden text-[#4D4959] text-[20px] py-2">Article Writing</p>
            <div className='block lg:hidden w-full overflow-x-auto  lg:overflow-x-hidden'>
                <div className="grid grid-cols-4 lg:gap-4 w-[650px] lg:w-full">
                    {
                        data.map(item =>
                            <div
                                key={item.id}
                                className="bg-white pt-[8px] lg:pt-[14px] pr-[10px] lg:pr-[20px] pb-[8px] lg:pb-[30px] ps-[10px] lg:ps-[22px] rounded-[10px]
                        transition ease-in-out delay-75   hover:scale-95  duration-200 cursor-pointer mx-3
                        h-[136px] w-[142px] lg:h-full lg:w-full 
                        "
                            >
                                <div className="flex justify-between items-center">
                                    <img className=' h-[16px] w-[16px] lg:h-[24px] lg:w-[24px]  cursor-pointer transition ease-in-out delay-75   hover:scale-150  duration-200' src={item.edit_img} alt="" />
                                    <img className=' h-[16px] w-[16px] lg:h-[24px] lg:w-[24px]  cursor-pointer transition ease-in-out delay-75   hover:scale-150  duration-200' src={item.trending} alt="" />
                                </div>
                                <div className="lg:mt-3 lg:mb-2">
                                    <h3 className="text-[14px] lg:text-[20px] font-semibold py-2">{item.title}</h3>
                                    <p className="text-[11px] lg:text-[16px] font-semibold">{item.desc}</p>
                                </div>
                            </div>)
                    }
                </div>
            </div>



            {/*  <p className="text-[#4D4959] text-[20px] py-2">Social media</p>
            <div className="grid grid-cols-4 gap-2  ">
                {
                    data.map(item =>
                        <div
                            key={item.id}
                            className="bg-white pt-[14px] pr-[20px] pb-[30px] ps-[22px] rounded-[10px]
                        transition ease-in-out delay-75   hover:scale-105  duration-200 cursor-pointer mx-3
                        "
                        >
                            <div className="flex justify-between items-center">
                                <img className='cursor-pointer transition ease-in-out delay-75   hover:scale-150  duration-200' src={item.edit_img} alt="" />
                                <img className='cursor-pointer transition ease-in-out delay-75   hover:scale-150  duration-200' src={item.trending} alt="" />
                            </div>
                            <div className="mt-3 mb-2">
                                <h3 className="text-[20px] font-semibold py-2">{item.title}</h3>
                                <p className="text-[16px] font-semibold">{item.desc}</p>
                            </div>
                        </div>)
                }
            </div> */}



        </div>
    );
};

export default SocialMedia;