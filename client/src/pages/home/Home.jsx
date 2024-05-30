import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider";
import HomeStats from "../../components/HomeStats";
import HomeDisplay from "../../components/HomeDisplay";

const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Home | JeepHaven</title>
            </Helmet>
            <Slider></Slider>

            <div className="container mx-auto ">
                <HomeStats></HomeStats>

                <HomeDisplay></HomeDisplay>

            </div>

        </div>
    );
};

export default Home;