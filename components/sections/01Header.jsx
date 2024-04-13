import {  DRUK_WIDE } from "@/pages/_app";
import Image from "next/image";
import { useState } from "react";
import Social from "../elements/Social";

import burger from '../../public/img/components/01Header/burger.svg'
import giraffix from '../../public/img/components/01Header/giraffix.png'

export default function Header(){
    const [ isHidden, setIsHidden ] = useState(true)
    return (
        <section className="_section bg-[url('/img/components/01Header/bg.png')] bg-contain bg-top bg-no-repeat">
            <div className="_wrapper flex flex-col">
                {/* Меню */}
                <div className="flex justify-between my-4 md:my-8 xl:my-10">
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
                    <h1>GIRAFFIX</h1>
                    <div className="flex justify-center">
                        <a href>PRESALE</a>
                        <a href>WHITEPAPPER</a>
                    </div>
                    <div className="flex">
                        <p>The world of cryptocurrencies and decentralized finance unites an exciting <span className="text-_orange">world of possibilities</span></p>
                        <p> Just as Grafix pleases millions of people, our token will <span className="text-_orange">make the world a better place.</span></p>
                    </div>
                    <Image src={giraffix} className="w-full"/>
                </div>
            </div>
        </section>
    )
}