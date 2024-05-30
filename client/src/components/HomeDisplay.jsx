import { Link } from "react-router-dom";

const HomeDisplay = () => {
    return (
        <div>
            <h1 className="text-4xl font-semibold text-center">JEEP® VEHICLES</h1>

            <div className="my-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-center justify-items-center gap-8">
                    <Link to='/'>
                        <img src="https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/lineup/MY24-Wagoneer-Series-III-River-Rock-JellyBean_v2.jpg.image.300.jpg" alt="" />
                        <h4 className="font-semibold text-lg my-2">Wagoneer</h4>
                        <p className="text-[8px]">MSRP Starting At</p>
                        <h5 className="font-semibold text-lg">$62,945</h5>
                    </Link>
                    <Link to='/'>
                        <img src="https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/lineup/MY24-Grand-Wagoneer-Series-III-White-JellyBean_v2.jpg.image.300.jpg" alt="" />
                        <h4 className="font-semibold text-lg my-2">Grand Wagoneer</h4>
                        <p className="text-[8px]">MSRP Starting At</p>
                        <h5 className="font-semibold text-lg">$91,945</h5>
                    </Link>
                    <Link to='/'>
                        <img src="https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/lineup/MY24-Grand-Cherokee-Summit-Reserve-Bright-White-JellyBean.jpg.image.300.jpg" alt="" />
                        <h4 className="font-semibold text-lg my-2">Grand Cherokee</h4>
                        <p className="text-[8px]">MSRP Starting At</p>
                        <h5 className="font-semibold text-lg">$35,495</h5>
                    </Link>
                    <Link to='/'>
                        <img src="https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/lineup/MY24-Grand-Cherokee-L-Summit-Reserve-Bright-White-JellyBean.jpg.image.300.jpg" alt="" />
                        <h4 className="font-semibold text-lg my-2">Grand Cherokee (3-row)</h4>
                        <p className="text-[8px]">MSRP Starting At</p>
                        <h5 className="font-semibold text-lg">$40,035</h5>
                    </Link>
                    <Link to='/'>
                        <img src="https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/lineup/MY24-Grand-Cherokee-Trailhawk-4xe-Silver-Zynith-JellyBean.jpg.image.300.jpg" alt="" />
                        <h4 className="font-semibold text-lg my-2">Grand Cherokee 4xe</h4>
                        <p className="text-[8px]">MSRP Starting At</p>
                        <h5 className="font-semibold text-lg"></h5>
                    </Link>
                    <Link to='/'>
                        <img src="https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/lineup/MY24-Wrangler-Rubicon-4xe-Bright-White-JellyBean.jpg.image.300.jpg" alt="" />
                        <h4 className="font-semibold text-lg my-2">Wrangler 4xe</h4>
                        <p className="text-[8px]">MSRP Starting At</p>
                        <h5 className="font-semibold text-lg">$50,695</h5>
                    </Link>
                    <Link to='/'>
                        <img src="https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/lineup/MY24-Wrangler-Rubicon-Anvil-JellyBean.jpg.image.300.jpg" alt="" />
                        <h4 className="font-semibold text-lg my-2">Wrangler</h4>
                        <p className="text-[8px]">MSRP Starting At</p>
                        <h5 className="font-semibold text-lg">$31,995</h5>
                    </Link>
                    <Link to='/'>
                        <img src="https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/lineup/MY24-Gladiator-Rubicon-Hydro-Blue-JellyBean.jpg.image.300.jpg" alt="" />
                        <h4 className="font-semibold text-lg my-2">Gladiator</h4>
                        <p className="text-[8px]">MSRP Starting At</p>
                        <h5 className="font-semibold text-lg">$37,895</h5>
                    </Link>
                    <Link to='/'>
                        <img src="https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/lineup/MY23-Cherokee-Trailhawk-Black-JellyBean.jpg.image.300.jpg" alt="" />
                        <h4 className="font-semibold text-lg my-2">Cherokee</h4>
                        <p className="text-[8px]">MSRP Starting At</p>
                        <h5 className="font-semibold text-lg">$37,695</h5>
                    </Link>
                    <Link to='/'>
                        <img src="https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/lineup/MY24-Compass-Limited-Baltic-Grey-JellyBean.jpg.image.300.jpg" alt="" />
                        <h4 className="font-semibold text-lg my-2">Compass</h4>
                        <p className="text-[8px]">MSRP Starting At</p>
                        <h5 className="font-semibold text-lg">$25,900</h5>
                    </Link>
                    <div className="grid grid-cols-subgrid gap-4 col-span-2 lg:col-span-5">
                        <Link className="lg:col-start-3">
                            <img src="https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/lineup/MY23-Renegade-Trailhawk-Colorado-Red-JellyBean.jpg.image.300.jpg" alt="" />
                            <h4 className="font-semibold text-lg my-2">Renegade</h4>
                            <p className="text-[8px]">MSRP Starting At</p>
                            <h5 className="font-semibold text-lg">$28,345</h5>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeDisplay;