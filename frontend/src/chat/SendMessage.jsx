import React from "react";
import anonymous from "../image/profilepic.png";
import tate from "../image/atate.jpg";
import { Link } from "react-router-dom";

const SendMessage = () => {
    return (
        <div className="flex flex-col">
            <div className="overflow-y-scroll  w-[300px] md:w-full">

                <Link to="/Profile">
                    <div className="grid text-center justify-center h-[150px] mb-[60px] mt-[20px]">
                        <img className="rounded-full w-[110px] h-[110px]" src={tate} alt="" />
                        <p className="text-[22px] font-semibold">hassan</p>
                    </div>
                </Link>
                <div className="flex-1 px-4">
                    <div className="grid gap-y-3">
                     
                        <Link to="/Profile">
                            <div className="flex items-center gap-2 ml-4">
                                <div className="w-8 h-8">
                                    <img className="rounded-full" src={anonymous} alt="" />
                                </div>
                                <p className="bg-gray-200 w-[200px] md:w-[300px] h-auto pt-[10px] pb-[10px] pl-[20px] pr-[10px] rounded-none md:rounded-[100px]">
                                salam necesen qardasim ne var ne yox neyneyirsen heyat nece gedir brat
                            </p>
                            </div>
                        </Link>
                        <div className="flex justify-end items-center">
                        <div className=" flex items-center">
                            <p className="bg-blue-500 text-white w-[200px] md:w-[300px] h-auto pt-[10px] pb-[10px] pl-[20px] pr-[10px] rounded-none md:rounded-[100px]">
                                salam necesen qardasim ne var ne yox neyneyirsen heyat nece gedir brat
                            </p>
                        </div>
                        </div>
             

                    </div>
                </div>
                <div className="flex justify-center p-4">
                    <label className=" rounded-[30px] w-[80%] flex bg-zinc-50 border focus-within:border-gray-400">
                        <input
                            placeholder="Message"
                            type="text"
                            className="bg-transparent px-2 outline-none w-full h-[38px] text-xs"
                        />
                        <button className="flex items-center justify-center cursor-pointer text-blue-500 text-s font-semibold pr-2">
                            send
                        </button>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SendMessage;
