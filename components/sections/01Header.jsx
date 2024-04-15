import {  DRUK_WIDE } from "@/pages/_app";
import Image from "next/image";
import { useState } from "react";
import Social from "../elements/Social";

import burger from '../../public/img/components/01Header/burger.svg'
import giraffix from '../../public/img/components/01Header/giraffix.png'
import giraffix_n_lines from '../../public/img/components/01Header/giraffix_n_lines.png'
import eclipse from '../../public/img/components/01Header/eclipse.png'

export default function Header(){
    const [ isHidden, setIsHidden ] = useState(true)
    return (
        <section className="_section relative pb-[8%] min-h-screen ">

            <div className="absolute top-0 w-full h-full bg-[url('/img/components/01Header/bg.png')] bg-no-repeat bg-cover -z-50"></div>

            <div className="_wrapper flex flex-col">

                {/* Меню */}
                <div className="flex justify-between mt-4 md:mt-8 xl:mt-10">
                    <div className="">
                            <Social />
                        </div>
                        <div className="flex flex-col justify-center pb-1 relative z-40 cursor-pointer" onClick={()=> setIsHidden(false) }>
                            <Image src={burger} alt="Menu" className="w-[39px] md:w-auto"/>
                        </div>
                </div>




                {/* Выдвижное меню */}
                <div>

                </div>



                {/* Основа */}
                <div className="flex flex-col">
                    
                    <h1 className={`${DRUK_WIDE} _text-shadow text-center py-5 text-[128px] leading-none bg-gradient-to-r from-_orange to-[#FF9330] inline-block text-transparent bg-clip-text drop-shadow-lg uppercase`}>GIRAFFIX</h1>
                    
                    <div className="flex justify-center gap-x-2.5">
                        <a className="px-[50px] _20px-extrabold  py-[27px] rounded-2xl bg-gradient-to-r from-_orange to-[#FF7606] " href="">PRESALE</a>
                        <a className="px-[50px] _20px-extrabold  py-[27px] rounded-2xl bg-gradient-to-r  to-_gray from-[#3D3D3D]" href="">WHITEPAPPER</a>
                    </div>
                      
                    <div className="relative ">
                        <div className="max-w-[75%] mx-auto">
                            <Image className="w-auto mx-auto pt-[3%]" src={giraffix_n_lines} />
                        </div>
                        <div className="absolute left-[0%] top-[20%] w-1/3 bg-_gray bg-opacity-65 border-[1px] border-_gray px-[27px] py-[17px] rounded-3xl _20px-extrabold">The world of cryptocurrencies and decentralized finance unites an exciting <span className="text-_orange">world of possibilities</span></div>
                        <div className="absolute right-[0%] top-[10%] w-1/3 bg-_gray bg-opacity-65 border-[1px] border-_gray px-[27px] py-[17px] rounded-3xl _20px-extrabold"> Just as Grafix pleases millions of people, our token will <span className="text-_orange">make the world a better place.</span></div>
                        
                        <Image className="absolute left-0 w-full mx-auto -bottom-[10%] -z-10  " src={eclipse} />
                        {/* <div className="absolute w-full h-full bg-[url('/img/components/01Header/eclipse.png')] -z-50"></div> */}
                    </div>
                    
                </div>
            </div>
        </section>
    )
}