import React from "react";
import { heroData } from "utils/data";
import Delivery from "../img/delivery.png"
import HeroBg from "../img/heroBg.png"



function HomeContainer() {
    return (
        <section className=" grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
                <div className=" flex items-center justify-center gap-2 bg-orange-100 px-2 py-2 rounded-full">
                    <p className=" text-base text-orange-500 font-semibold">Bike Delivery</p>
                    <div className=" w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-2xl">
                        <img src={Delivery} alt="delivery" className=" w-full h-full object-contain" />
                    </div>
                </div>
                <p className=" text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
                    The Fastest Delivery in {" "}
                    <span className=" text-orange-600 text-[3rem] lg:text-[5rem]">Your City</span>
                </p>
                <p className=" text-base text-textColor md:w-[80%] ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi itaque adipisci deleniti rerum delectus. Odit sunt quo harum sapiente, dolores a maiores, officiis consectetur hic optio molestias, alias et eum!
                </p>
                <button type="button"
                    className=" outline-none bg-gradient-to-br from-orange-200 to-orange-500 font-semibold w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
                >Order Now</button>
            </div>
            <div className="py-2 flex-1 flex items-center relative">
                <img src={HeroBg} alt="hero-bg" className=" ml-auto  h-420 lg:h-650 w-full lg:w-auto " />
                <div className=" w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
                    {heroData && heroData.map(item => (
                        <div key={item.id} className=" flex flex-col items-center justify-center
                         bg-cardOverlay lg:w-190 p-4 backdrop-blur-md rounded-3xl drop-shadow-xl ">
                            <img src={item.imgSrc} className="w-20 -mt-10 lg:w-40 lg:-mt-20" alt="" />
                            <p className=" text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">{item.name}</p>
                            <p className="text-[12px] lg:text-sm font-semibold text-lighttextGray my-1 lg:my-2">{item.desc}</p>
                            <p className=" text-sm font-semibold text-headingColor">
                                <span className=" text-sm text-red-600">$</span> {item.price}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomeContainer;