import Image from 'next/image'
import partner_1 from '../../public/img/components/04Partners/1.png'
import partner_2 from '../../public/img/components/04Partners/2.png'
import partner_3 from '../../public/img/components/04Partners/3.png'
import partner_4 from '../../public/img/components/04Partners/4.png'
import partner_5 from '../../public/img/components/04Partners/5.png'
import partner_6 from '../../public/img/components/04Partners/6.png'
import partner_7 from '../../public/img/components/04Partners/7.png'
import { DRUK_WIDE } from "@/pages/_app";

export default function Partners(){
    return (
        <section className="_section relative overflow-visible mt-28">

            <div className="hidden md:block w-full h-[250%] absolute -bottom-[100%] -z-40 bg-contain bg-no-repeat bg-[url('/img/components/eclipse.png')]"></div>

            <div className="_wrapper">
                <h2 className={`${DRUK_WIDE} _h2 text-center w-full`}>PARTNERS</h2>
                
                <div className='flex flex-col w-full bg-_gray rounded-3xl p-14'>

                    <div className='flex justify-between gap-x-10'>
                        <div className='basis-1/4'>
                            <div className='flex flex-col w-full h-full justify-center'>
                                <Image className="block w-full" src={partner_1} />
                            </div>
                        </div>
                        <div className='basis-1/4'>
                            <div className='flex flex-col w-full h-full justify-center'>
                                <Image className="block w-full" src={partner_2} />
                            </div>
                        </div>
                        <div className='basis-1/4'>
                            <div className='flex flex-col w-full h-full justify-center'>
                                <Image className="block w-full" src={partner_3} />
                            </div>
                        </div>
                        <div className='basis-1/4'>
                            <div className='flex flex-col w-full h-full justify-center'>
                                <Image className="block w-full" src={partner_4} />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-around mt-[3%]'>
                        <div className='basis-1/4'>
                            <div className='flex flex-col w-full h-full justify-center'>
                                <Image className="block w-full" src={partner_5} />
                            </div>
                        </div>
                        <div className='basis-1/4'>
                            <div className='flex flex-col w-full h-full justify-center'>
                                <Image className="block w-full" src={partner_6} />
                            </div>
                        </div>
                        <div className='basis-1/4'>
                            <div className='flex flex-col w-full h-full justify-center'>
                                <Image className="block w-full" src={partner_7} />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
         </section>
    )
}