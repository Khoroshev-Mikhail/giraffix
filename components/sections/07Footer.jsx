import { DRUK_WIDE } from "@/pages/_app";
import Image from 'next/image'
import giraffix from '../../public/img/components/07Footer/giraffix.png'
import Social from "../elements/Social";

export default function Footer(){
    return (
        <section className="_section">
            <div className="_wrapper">
                <div className="flex flex-row justify-between bg-_orange rounded-[35px]">
                    <div className="w-1/2 basis-1/2 flex flex-col px-[70px] py-[80px] justify-between">
                        <div className={`${DRUK_WIDE} text-black font-medium text-[60px] uppercase text-center tracking-tight leading-tight`}>
                            Join our <br/> 
                            Giraffix <br/>
                            <span className="bg-[#FFCC53]">fan club</span>
                        </div>
                        <div>
                            <Social black />
                        </div>
                    </div>
                    <div className=" w-1/2 basis-1/2 flex flex-col p-3">
                        <Image className=" mx-auto justify-center" src={giraffix}/>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}