import React, { useEffect, useState } from "react";
import Delivery from "../img/delivery.png"
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion"
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";

function MainContainer() {
    const [{ foodItems, cartShow }, dispatch] = useStateValue()
    const [scrollValue, setScrollValue] = useState(0);
    useEffect(() => {

    }, [scrollValue, cartShow])


    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <HomeContainer />
            <section className="w-full my-6">
                <div className="w-full flex items-center justify-between ">
                    <p className="text-2xl font-semibold capitalize relative text-headingColor
                    before:absolute before:rounded-lg before:content before:w-80 before:h-1
                    before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-200 to-orange-600 transition-all ease-in-out
                    duration-100">Our Fresh & Healthy fruits</p>
                    <div className="hidden md:flex items-center gap-3">
                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500
                         flex items-center justify-center cursor-pointer transition-all duration-100 ease-in-out"
                            onClick={() => setScrollValue(scrollValue - 200)}
                        >
                            <MdChevronLeft className="text-base text-white" />
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500
                         flex items-center justify-center cursor-pointer transition-all duration-100 ease-in-out"
                            onClick={() => setScrollValue(scrollValue + 200)}
                        >
                            <MdChevronRight className="text-base text-white" />
                        </motion.div>

                    </div>
                </div>
                <RowContainer
                    scrollValue={scrollValue}
                    flag={true}
                    data={foodItems?.filter((item) => item.category === "fruits")} />
            </section>

            <MenuContainer />
            {
                cartShow && (
                    <CartContainer />
                )
            }
        </div>
    );
}

export default MainContainer;