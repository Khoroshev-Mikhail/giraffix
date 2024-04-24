import {  DRUK_WIDE } from "@/pages/_app";
import Image from "next/image";
import { useState } from "react";
import Social from "../elements/Social";

import burger from '../../public/img/components/01Header/burger.svg'
import giraffix from '../../public/img/components/01Header/giraffix.webp'
import lines_left from '../../public/img/components/01Header/lines_left.webp'
import lines_right from '../../public/img/components/01Header/lines_right.webp'
import giraffix_menu from '../../public/img/components/01Header/giraffix_menu.webp'
import eclipse from '../../public/img/components/01Header/eclipse.webp'
import cross from '../../public/img/components/01Header/cross.svg'

export default function Header(){
    const [ isHidden, setIsHidden ] = useState(true)
    return (
        <section id="01Header" className="_section relative pb-[8%] ">

            <div className="absolute top-0 w-full h-full bg-[url('/img/components/01Header/bg.webp')] bg-no-repeat bg-cover -z-50"></div>

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
                <div className={`${isHidden ? 'hidden' : 'block'} absolute z-50 top-0 left-0 w-full  bg-gradient-to-br to-[#FF5924] from-[#FF932F] rounded-b-2xl `}>

                    <div className="relative py-10 sm:py-10 md:py-12 xl:py-20 flex flex-col md:flex-row _wrapper">
                        <Image className="absolute top-5 md:top-10 right-5 cursor-pointer w-[30px] h-[30px] sm:w-[49px] sm:h-[49px]" src={ cross } alt="menu-toggle" onClick={()=> setIsHidden(true) }/>
                        
                        <menu className={`${DRUK_WIDE} block md:w-1/2 w-full relative z-50 text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mt-10 text-black`}>
                            <li className="flex justify-center md:justify-start w-full" onClick={()=> setIsHidden(true) }><a href="#01Header">HOME</a></li>
                            <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#03Tokenomics">TOKENOMICS</a></li>
                            <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#04Partners">PARTNERS</a></li>
                            <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#05Roadmap">ROADMAP</a></li>
                            <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5"><a href="#06Footer">CONTACTS</a></li>
                            <li className="flex justify-center md:justify-start w-full mt-3 md:mt-5 py-[60px] xl:py-[100px] ">
                                <Social black/>
                            </li>
                        </menu>
                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                            <Image src={giraffix_menu} alt="" className="block  bottom-0 right-0 w-full" />
                        </div>
                        
                    </div>
                </div>   



                {/* Основа */}
                <div className="flex flex-col overflow-hidden">
                    
                    <h1 className={`${DRUK_WIDE} _text-shadow text-center py-5 text-[40px] xs:text-[44px] sm:text-[56px] md:text-[84px] lg:text-[112px] xl:text-[128px] leading-none bg-gradient-to-r from-_orange to-[#FF9330] inline-block text-transparent bg-clip-text drop-shadow-lg uppercase`}>GIRAFFIX</h1>
                    
                    <div className="flex w-full justify-center order-last md:order-none gap-x-2 md:gap-x-2.5 mt-[2%]">
                        <a className="px-[25px] md:px-[50px] _20px-extrabold py-[17px] md:py-[27px] rounded-2xl bg-gradient-to-r from-_orange to-[#FF7606] " href="">PRESALE</a>
                        <a className="px-[25px] md:px-[50px] _20px-extrabold py-[17px] md:py-[27px] rounded-2xl bg-gradient-to-r  to-_gray from-[#3D3D3D]" href="https://app.analytixaudit.com/giraffix">AUDIT</a>
                    </div>
                      
                    <div className="relative">
                        <div className="relative w-full mx-auto">
                            <Image className="relative z-40 w-1/2 md:w-auto mx-auto pt-[30%] xs:pt-[15%] sm:pt-[10%] md:pt-[3%]" src={giraffix} />
                            <Image className="_animate-lines-left absolute top-[60%] md:top-[48%] -left-[25%] md:left-[20%] w-1/2 md:w-1/3" src={lines_left} />
                            <Image className="_animate-lines-right absolute top-[42%] md:top-[42%] right-[100%] md:right-[20%] w-1/2 md:w-1/3" src={lines_right} />
                        </div>

                        <div className="absolute top-0  w-full flex justify-between gap-x-2">
                            <div className="md:mt-[16%] leading-none tracking-tight  md:w-1/3 bg-_gray bg-opacity-65 border-[1px] border-_gray p-2.5 md:px-[27px] py-2.5 md:py-[17px] rounded-xl md:rounded-3xl _20px-extrabold">The world of cryptocurrencies and decentralized finance unites an exciting <span className="text-_orange">world of possibilities</span></div>
                            <div className="md:mt-[10%] leading-none md:mb-[6%] tracking-tight  md:w-1/3 bg-_gray bg-opacity-65 border-[1px] border-_gray p-2.5 md:px-[27px] py-2.5 md:py-[17px] rounded-xl md:rounded-3xl _20px-extrabold"> Just as Graffix pleases millions of people, our token will <span className="text-_orange">make the world a better place.</span></div>
                        </div>
                        <Image className="_animate-main absolute left-0 w-full mx-auto -bottom-[10%] -z-10" src={eclipse} />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}