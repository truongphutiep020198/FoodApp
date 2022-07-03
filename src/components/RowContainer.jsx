import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { actionType } from "context/reducer";
import { useStateValue } from "context/StateProvider";



function RowContainer({ flag, data, scrollValue }) {
    const rowContainerRef = useRef()
    const [{ cartItems }, dispatch] = useStateValue();
    const [items, setItems] = useState([]);


    useEffect(() => {
        rowContainerRef.current.scrollLeft += scrollValue;
    }, [scrollValue])

    const addToCart = () => {
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items,
        });
        localStorage.setItem("cartItems", JSON.stringify(items));
    };
    useEffect(() => {
        addToCart();
    }, [items])

    return (
        <div
            ref={rowContainerRef}
            className={`w-full my-10 py-2 flex items-center  gap-4 scroll-smooth
            ${flag
                    ? "overflow-x-scroll scrollbar-none"
                    : "overflow-x-hidden flex-wrap justify-center"}`
            }>
            {data && data.map(item => (
                <div key={item?.id} className=" w-275 min-w-[275px] md:w-300 md:min-w-[300px] h-[260px] 
                bg-orange-50 rounded-xl p-2 backdrop-blur-lg my-20 flex flex-col items-center justify-between
                hover:drop-shadow-lg transition-all duration-75 ease-in-out">
                    <div className=" w-full flex items-center justify-between flex-1 px-4">
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            className=" w-40 -mt-20 drop-shadow-2xl "
                        >
                            <img

                                src={item?.imageURL} alt=""
                                className="w-full h-full object-contain max-h-200" />
                        </motion.div>

                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            onClick={() => { setItems([...cartItems, item]) }}
                            className=" w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer shadow-md">
                            <MdShoppingBasket className=" text-white" />
                        </motion.div>
                    </div>
                    <div className=" w-full flex flex-col gap-4 items-end justify-end px-4">
                        <p className=" text-textColor font-semibold text-base md:text-lg">{item?.title}</p>
                        <p className="mt-2 text-sm text-gray-500">{item?.calories}</p>
                        <div className=" flex items-center gap-8">
                            <p className=" text-lg text-headingColor font-semibold">
                                <span className=" text-sm text-red-500">$</span>{item?.price}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RowContainer;