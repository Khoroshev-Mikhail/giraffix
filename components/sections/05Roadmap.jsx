import { DRUK_WIDE } from "@/pages/_app";

export default function Roadmap(){
    return (
        <section className="_section">
            <div className="_wrapper pb-60">
                <h2 className={`${DRUK_WIDE} _h2 `}>ROADMAP</h2>

                {/* <div className="flex w-full">
                    <div className="basis-1/2 w-1/2 p-10 bg-[url('/img/components/05Roadmap/bg-1.png')] bg-top bg-cover bg-no-repeat">1</div>
                    <div className="basis-1/2 w-1/2 p-10 bg-[url('/img/components/05Roadmap/bg-2.png')] bg-bottom bg-contain bg-no-repeat">2</div>
                </div>
                <div className="flex w-full">
                    <div className="basis-1/2 w-1/2 p-10">3</div>
                    <div className="basis-1/2 w-1/2 p-10">4</div>
                </div> */}
                <div className="grid grid-rows-12 grid-cols-2 ">
                    <div className="col-span-1 row-span-5 pl-10 pr-10 pt-10 pb-6 mb-4 rounded-tr-2xl border-t-2 border-r-2 flex border-_orange">
                        <div className={`${DRUK_WIDE} w-1/3 _24px text-_orange`}>
                            PHASE 1
                        </div>
                        <div className="w-2/3 pl-5 pt-1">
                            <ul className="list-disc marker:text-_orange _20px-extrabold">
                                <li>Create website</li>
                                <li>Presale and Launch</li>
                                <li>Marketing</li>
                                <li>Crypto influencers AMA</li>
                                <li>Community 5000 holder</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-1 row-span-5 pl-10 pr-0 mr-9 pt-6 pb-10 -ml-0.5 mt-4 rounded-bl-2xl border-b-2 border-l-2 flex border-_orange">
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

                    <div className="col-span-2 row-span-1 border-r-2 border-t-2 -mt-0.5 pl-10 -mb-5 pr-5 mr-5 ml-[55%] rounded-tr-2xl border-_orange">

                    </div>

                    <div className="col-span-1 row-span-5 pl-10 pt-10 pb-7 mb-4 pr-10 rounded-tr-2xl border-t-2 border-r-2 flex border-_orange">
                        <div className={`${DRUK_WIDE} w-1/3 _24px text-_orange`}>
                            PHASE 4
                        </div>
                        <div className="w-2/3 pl-5 pt-1">
                            <ul className="list-disc marker:text-_orange _20px-extrabold">
                                <li>Community 100000 holders </li>
                                <li>New Exchange Listing CEX </li>
                                <li>Focus on global development </li>
                                <li>CHARITY</li>
                            </ul>
                        </div> 
                    </div>
                    <div className="col-span-1 row-span-5 pl-10 pr-5 mr-5 pt-5 mt-5 pb-10 rounded-bl-2xl rounded-br-2xl border-l-2 -ml-0.5 border-b-2 border-r-2 flex border-_orange">
                        <div className={`${DRUK_WIDE} w-1/3 _24px text-_orange`}>
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