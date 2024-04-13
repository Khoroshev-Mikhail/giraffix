import Image from 'next/image'
import icon_1 from '../../public/img/components/02About/icon_1.svg'
import icon_2 from '../../public/img/components/02About/icon_2.svg'
import giraffix from '../../public/img/components/02About/giraffix.png'
import giraffix_desktop from '../../public/img/components/02About/giraffix_desktop.png'
import lines from '../../public/img/components/02About/lines.png'
import { DRUK_WIDE } from '@/pages/_app'

export default function About(){
    return (
        <section className="_section">
            <div className="_wrapper flex flex-col justify-between overflow-hidden font-extrabold text-black">
                <h2 className={`${DRUK_WIDE} _h2 `}></h2>

                <div className="grid grid-rows-1 grid-cols-2 w-full gap-x-5 text-white">
                    <div className="flex flex-col col-span-1 row-span-1 p-[40px] bg-_gray rounded-[45px] relative bg-[url('/img/components/02about/eclipse.png')] bg-no-repeat bg-right-top bg-contain">
                        <Image src={icon_1}/>
                        <p className='lg:text-[20px] font-extrabold mt-5'>In 2024, a funny meme called <span className='text-_orange'>GiraffX</span> emerged due to an error in an artificial intelligence program, which mistakenly classified giraffes as "giraffes", evoking images of giraffes in urban settings ("giraffe" + "traffic").</p>
                    </div>
                    <div className="flex flex-col col-span-1 row-span-1 p-[40px] bg-_gray rounded-[45px] relative">
                        <Image src={icon_2}/>
                        <p className='lg:text-[20px] font-extrabold mt-5'>Photos of giraffes in comical urban situations quickly spread across social media, becoming a source of joy for millions of people. This incident showed how even technical errors <span className='text-_orange'>can generate unexpected and entertaining content that has become a meme classic.</span></p>
                    </div>
                </div>

                <div className="relative flex flex-col mt-10 px-10 pt-10 bg-_orange rounded-[45px] bg-[url('/img/components/02about/bg_main.png')] bg-cover bg-no-repeat">
                    <h3 className='mx-auto text-center text-[#FFEB74] bg-black px-[27px] py-[13px] rounded-2xl'>MISSION</h3>
                    <p className='block w-1/2 mx-auto text-center pt-4 text-[20px]'>The Giraffix Meme Token is a modern meme and cryptocurrency project that merges fun and finance in the world of decentralized finance (DeFi). </p>
                    <p className={`${DRUK_WIDE} block w-2/3 mx-auto text-center pt-10 text-[24px] uppercase leading-none`}>The mission of Giraffix Meme Token is to <span className='bg-[#FFB04A]'>create a unique and engaging experience for its holders, rooted in internet meme culture.</span></p>
                    <Image className='block mx-auto w-1/6 pt-10' src={giraffix_desktop}/>
                    <Image className='absolute left-0 bottom-[2%]' src={lines}/>
                    <Image className='absolute right-0 top-[2%] scale-x-[-1] scale-y-[-1]' src={lines}/>
                </div>
            </div>
        </section>
    )
}