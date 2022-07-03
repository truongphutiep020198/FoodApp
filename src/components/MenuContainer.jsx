import { useStateValue } from "context/StateProvider";
import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "utils/data";
import RowContainer from "./RowContainer";


function MenuContainer() {
    const [filter, setFilter] = useState("chicken");
    const [{ foodItems }, dispatch] = useStateValue()


    useEffect(() => {

    }, [filter])
    return (
        <section className="w-full my-6" id="menu">
            <div className=" w-full flex flex-col items-center justify-center">
                <p className="text-2xl font-semibold capitalize relative text-headingColor
                    before:absolute before:rounded-lg before:content before:w-44 before:h-1
                    before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-200 to-orange-600 transition-all ease-in-out
                    duration-100 mr-auto">Our Hot Dishes</p>
                <div className=" w-full flex items-center justify-start lg:justify-center gap-8 mt-6 py-6
                overflow-x-scroll scrollbar-none">
                    {
                        categories && categories.map(category => (
                            <div key={category.id}
                                className={`group ${filter === category.urlParamName ? "bg-red-400" : "bg-card"}
                              hover:bg-red-400 w-24 min-w-[94px] h-28 cursor-pointer rounded-lg shadow-lg drop-shadow-xls 
                              flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out`}
                                onClick={() => setFilter(category.urlParamName)}
                            >
                                <div className={` w-10 h-10 rounded-full group ${filter === category.urlParamName ? "bg-card" : "bg-red-400"} bg-red-400 group-hover:bg-card flex items-center justify-center`}>
                                    <IoFastFood
                                        className={`${filter === category.urlParamName ? "text-textColor" : "text-white"}
                                 group-hover:text-textColor text-lg`} />
                                </div>
                                <p
                                    className={`text-sm ${filter === category.urlParamName ? "text-white" : "text-textColor"} 
                             group-hover:text-white`}>{category.name}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className=" w-full">
                    <RowContainer flag={false} data={foodItems?.filter((item) => item.category === filter)} scrollValue />
                </div>
            </div>

        </section>
    );
}

export default MenuContainer;