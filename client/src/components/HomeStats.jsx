import stat1 from '../assets/logo/jeep-7.png';
import stat2 from '../assets/logo/jeep-3.png';
import stat3 from '../assets/logo/jeep-4.png';
import CountUp from 'react-countup';
import Header from '../shared/Header';

const HomeStats = () => {
    return (
        <div className='my-20 md:my-32'>

            <div >
                <Header
                    headings='Our Achievements'
                    subHeading='Top-rated performance, rugged design, award-winning reliability.'>
                </Header>
            </div>

            <div className='bg-[#f8f8f8] text-gray-600 md:shadow-2xl rounded-md'>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='text-center md:border-r-2 border-b-2 border-gray-300 py-12'>
                        <div className=''>
                            <img className='w-36 mx-auto' src={stat1} alt="" />
                        </div>
                        <h1 className='text-4xl font-extrabold text-black mb-2'><CountUp end={13} duration={5} />+</h1>
                        <p className='text-lg'>Models in collection</p>
                    </div>
                    <div className='text-center md:border-r-2 border-b-2 border-gray-300 py-12'>
                        <div>
                            <img className='w-36 mx-auto' src={stat2} alt="" />
                        </div>
                        <h1 className='text-4xl font-extrabold text-black mb-2'><CountUp end={14000} duration={5} />+</h1>
                        <p>Jeeps sold globally</p>
                    </div>
                    <div className='text-center py-12'>
                        <div>
                            <img className='w-36 mx-auto' src={stat3} alt="" />
                        </div>
                        <h1 className='text-4xl font-extrabold text-black mb-2'><CountUp end={86000} duration={5} />+</h1>
                        <p>Tools shipped globally</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeStats;