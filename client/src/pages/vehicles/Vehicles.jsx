import { useLoaderData } from "react-router-dom";
import VehiclesCard from "../../components/vehicles/VehiclesCard";

const Vehicles = () => {

    const jeeps = useLoaderData();
    console.log(jeeps);



    return (
        <div>
            <h1>Here Got all vehicles</h1>

            <div>
                {
                    jeeps.map(jeep => <VehiclesCard
                    key={jeep.i}
                    jeep={jeep}></VehiclesCard>)
                }
            </div>
        </div>
    );
};

export default Vehicles;