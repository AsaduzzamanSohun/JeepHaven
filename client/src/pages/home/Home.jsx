import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider";
import HomeStats from "../../components/HomeStats";

const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Home | JeepHaven</title>
            </Helmet>
            <div className="container mx-auto ">
                <Slider></Slider>

                <HomeStats></HomeStats>
            </div>

        </div>
    );
};

export default Home;