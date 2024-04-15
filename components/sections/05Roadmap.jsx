import { DRUK_WIDE } from "@/pages/_app";

export default function Roadmap(){
    return (
        <section className="_section relative mt-28 overflow-visible">

            <div className="hidden md:block w-full scale-x-[-1] h-[180%] absolute -bottom-[100%] -z-40 bg-contain bg-no-repeat bg-[url('/img/components/eclipse.png')]"></div>

            <div className="_wrapper">
                <h2 className={`${DRUK_WIDE} _h2 `}>ROADMAP</h2>

                <div className="grid grid-rows-4 md:grid-rows-12 grid-cols-2 ">
                    <div className="relative z-20 col-span-2 md:col-span-1 row-span-1 md:row-span-5 pl-2 ml-6 md:ml-4 md:pl-4 xl:pl-10 pr-10 pt-10 pb-6 md:mb-4 rounded-lb-3xl rounded-r-3xl md:rounded-r-none border-b-2 md:border-b-0 border-t-2 md:rounded-tr-3xl border-r-2 flex flex-col md:flex-row border-_orange">
                        <div className={`${DRUK_WIDE} w-1/3 _24px text-_orange `}>
                            PHASE 1
                        </div>
                        <div className="w-2/3 md:pl-5 pt-1">
                            <ul className="list-disc marker:text-_orange _20px-extrabold">
                                <li>Create website</li>
                                <li>Presale and Launch</li>
                                <li>Marketing</li>
                                <li>Crypto influencers AMA</li>
                                <li>Community 5000 holder</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative z-30 col-span-2 md:col-span-1 row-span-1 md:row-span-5 pl-2 md:pl-4 xl:pl-10 pr-0 mr-9 pt-6 pb-10 mt-[-2px] mb-[-2px] md:mb-0 md:-ml-0.5 md:mt-4 rounded-l-3xl md:rounded-l-none border-t-2 md:border-t-0 md:rounded-bl-3xl border-b-2 border-l-2 flex border-_orange">
                        <div className={`${DRUK_WIDE} w-1/3 _24px text-_orange`}>
                            PHASE 2
                        </div>
                        <div className="w-2/3 pl-5 pt-1">
                            <ul className="list-disc marker:text-_orange _20px-extrabold">
                                <li>Listed on Coinmarketcap </li>
                                <li>Listed on Coingecko </li>
                                <li>Partnership with Marketing Agencies</li>
                                <li>Community 10000 holders </li>
                            </ul>
                        </div>
                    </div>

                    <div className="hidden md:block col-span-2 row-span-1 border-r-2 border-t-2 -mt-0.5 pl-10 -mb-5 pr-5 mr-5 ml-[55%] rounded-tr-3xl border-_orange">

                    </div>

                    <div className="relative z-50 md:z-40 order-last md:order-none col-span-2 md:col-span-1 row-span-1 md:row-span-5 pl-2 md:pl-4 xl:pl-10 pt-10 pb-7 mb-4 mr-10 md:mr-0 pr-10 border-l-2 md:border-l-0 border-b-2 md:border-b-0 rounded-l-3xl md:rounded-l-none md:rounded-tr-3xl border-t-2 md:border-r-2 flex border-_orange">
                        <div className={`${DRUK_WIDE} w-1/3 _24px text-_orange`}>
                            PHASE 4
                        </div>
                        <div className="w-2/3 pl-5 pt-1">
                            <ul className="list-disc marker:text-_orange _20px-extrabold !sm:text-[14px]">
                                <li>Community 100000 holders </li>
                                <li>New Exchange Listing CEX </li>
                                <li>Focus on global development </li>
                                <li>CHARITY</li>
                            </ul>
                        </div> 
                    </div>
                    <div className="relative z-40 md:z-50 col-span-2 md:col-span-1 row-span-1 md:row-span-5 pl-2 ml-6 mb-[-2px] md:mb-0 md:pl-4 xl:pl-10 pr-5 mr-5 pt-5 md:mt-5 pb-10 rounded-r-3xl md:rounded-r-none md:rounded-bl-3xl md:rounded-br-3xl border-t-2 md:border-t-0 md:border-l-2 md:-ml-0.5 border-b-2 border-r-2 flex border-_orange">
                        <div className={`${DRUK_WIDE} w-1/3 _24px text-_orange -ml-6 md:-ml-0`}>
                            PHASE 3
                        </div>
                        <div className="w-2/3 pl-5 pt-1">
                            <ul className="list-disc marker:text-_orange _20px-extrabold">
                                <li>Global marketing </li>
                                <li>Community 15000 holders </li>
                                <li>New Partnerships</li>
                                <li>Exchange Listing CEX</li>
                            </ul>
                        </div> 
                    </div>
                </div>

            </div>
        </section>
    )
}