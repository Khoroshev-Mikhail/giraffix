import Image from 'next/image'
import { DRUK_WIDE } from "@/pages/_app";
import presale from '../../public/img/components/03Tokenomics/presale.svg'
import liquidity from '../../public/img/components/03Tokenomics/liquidity.svg'

export default function Tokenomics(){
    return (
        <section className="_section">
            <div className="_wrapper flex flex-col">
                <h2 className={`${DRUK_WIDE} _h2 `}>OUR TOKENOMICS</h2>
                <div className="grid grid-cols-12 grid-rows-2 gap-5 [&>div]:bg-_gray [&>div]:p-8">
                    <div className="col-span-6 border-2 border-_orange rounded-2xl">
                        <p className={`${DRUK_WIDE} text-_orange text-[24px] font-medium uppercase`}>Total Supply</p>
                        <p className="text-white text-[30px] font-extrabold">1 000 000 000 GIRAFFIX</p>
                    </div>

                    <div className="col-span-3 border-2 border-_orange rounded-2xl">
                        <div className="flex justify-start">
                            <Image className="inline pr-2" src={presale}/>
                            <div className={`${DRUK_WIDE} text-_orange text-[24px] font-medium uppercase`}>PRESALE</div>
                        </div>
                        <p className="text-white text-[30px] font-extrabold">40%</p>
                    </div>

                    <div className="col-span-3 border-2 border-_orange rounded-2xl">
                        <div className="flex justify-start">
                            <Image className="inline pr-2" src={liquidity}/>
                            <div className={`${DRUK_WIDE} text-_orange text-[24px] font-medium uppercase`}>Liquidity</div>
                        </div>
                        <p className="text-white text-[30px] font-extrabold">20%</p>
                    </div>

                    <div className="col-span-2 border-2 border-_orange rounded-2xl">
                        <div className="flex justify-start">
                            <Image className="inline pr-2" src={liquidity}/>
                            <div className={`${DRUK_WIDE} text-_orange text-[24px] font-medium uppercase`}>Team</div>
                        </div>
                        <p className="text-white text-[30px] font-extrabold">10%</p>
                    </div>

                    <div className="col-span-4 border-2 border-_orange rounded-2xl">
                        <div className="flex justify-start">
                            <Image className="inline pr-2" src={liquidity}/>
                            <div className={`${DRUK_WIDE} text-_orange text-[24px] font-medium uppercase`}>Marketing</div>
                        </div>
                        <p className="text-white text-[30px] font-extrabold">10%</p>
                    </div>

                    <div className="col-span-2 border-2 border-_orange rounded-2xl">
                        <div className="flex justify-start">
                            <Image className="inline pr-2" src={liquidity}/>
                            <div className={`${DRUK_WIDE} text-_orange text-[24px] font-medium uppercase`}>Cex</div>
                        </div>
                        <p className="text-white text-[30px] font-extrabold">20%</p>
                    </div>

                    <div className="col-span-4 border-2 border-_orange rounded-2xl">
                        <p className={`${DRUK_WIDE} text-_orange text-[24px] font-medium uppercase`}>GIRAFFIX Token</p>
                        <p className="text-white text-[30px] font-extrabold">xxxxxx</p>
                    </div>
                </div>
            </div>
        </section>
    )
}