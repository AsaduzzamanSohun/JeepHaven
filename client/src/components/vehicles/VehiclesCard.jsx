
const VehiclesCard = ({jeep}) => {

    const {category, model_name, image, year, mileage, engine_type, performance, transmission, drivetrain, exterior_dimensions, interior_space, towing_capacity, price} = jeep


    return (
        <div>
            <img src={image} alt="" />
            <h1>{model_name}</h1>
            <p>{engine_type}</p>
        </div>
    );
};

export default VehiclesCard;