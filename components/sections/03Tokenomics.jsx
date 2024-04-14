import Image from 'next/image'
import { DRUK_WIDE } from "@/pages/_app";
import presale from '../../public/img/components/03Tokenomics/presale.svg'
import liquidity from '../../public/img/components/03Tokenomics/liquidity.svg'

export default function Tokenomics(){
    return (
        <section className="_section mt-28">
            <div className="_wrapper flex flex-col">
                <h2 className={`${DRUK_WIDE} _h2 `}>OUR TOKENOMICS</h2>
                <div className="grid grid-cols-12 grid-rows-2 gap-5 ">
                    <div className="col-span-6 shadow-inner shadow-_orange rounded-3xl p-8 bg-_gray bg-[url('/img/components/03Tokenomics/eclipse.png')] bg-no-repeat bg-right">
                        <p className={`${DRUK_WIDE} text-_orange text-[24px] font-medium uppercase`}>Total Supply</p>
                        <p className="text-white text-[30px] font-extrabold">1 000 000 000 GIRAFFIX</p>
                    </div>

                    <div className="col-span-3 shadow-inner shadow-_orange rounded-3xl p-8 bg-_gray">
                        <div className="flex justify-start">
                            <Image className="inline pr-2" src={presale}/>
                            <div className={`${DRUK_WIDE} text-_orange text-[24px] font-medium uppercase`}>PRESALE</div>
                        </div>
                        <p className="text-white text-[30px] font-extrabold">40%</p>
                    </div>

                    <div className="col-span-3 shadow-inner shadow-_orange rounded-3xl p-8 bg-_gray">
                        <div className="flex justify-start">
                            <Image className="inline pr-2" src={liquidity}/>
                            <div className={`${DRUK_WIDE} text-_orange text-[24px] font-medium uppercase`}>Liquidity</div>
                        </div>
                        <p className="text-white text-[30px] font-extrabold">20%</p>
                    </div>

                    <div className='col-span-6 grid grid-cols-12 gap-5'>

                        <div className="col-span-5 shadow-inner shadow-_orange rounded-3xl p-8 bg-_gray">
                            <div className="flex justify-start">
                                <Image className="inline pr-2" src={liquidity}/>
                                <div className={`${DRUK_WIDE} text-_orange text-[24px] font-medium uppercase`}>Team</div>
                            </div>
                            <p className="text-white text-[30px] font-extrabold">10%</p>
                        </div>

                        <div className="col-span-7 shadow-inner shadow-_orange rounded-3xl p-8 bg-_gray">
                            <div className="flex justify-start">
                                <Image className="inline pr-2" src={liquidity}/>
                                <div className={`${DRUK_WIDE} text-_orange text-[24px] font-medium uppercase`}>Marketing</div>
                            </div>
                            <p className="text-white text-[30px] font-extrabold">10%</p>
                        </div>

                    </div>

                    <div className="col-span-2 shadow-inner shadow-_orange rounded-3xl p-8 bg-_gray">
                        <div className="flex justify-start">
                            <Image className="inline pr-2" src={liquidity}/>
                            <div className={`${DRUK_WIDE} text-_orange text-[24px] font-medium uppercase`}>Cex</div>
                        </div>
                        <p className="text-white text-[30px] font-extrabold">20%</p>
                    </div>

                    <div className="col-span-4 shadow-inner shadow-_orange rounded-3xl p-8 bg-_gray bg-[url('/img/components/03Tokenomics/eclipse.png')] bg-no-repeat bg-right">
                        <p className={`${DRUK_WIDE} text-_orange text-[24px] font-medium uppercase`}>GIRAFFIX Token</p>
                        <p className="text-white text-[30px] font-extrabold">xxxxxx</p>
                    </div>
                </div>
            </div>
        </section>
    )
}