import { Outlet } from 'react-router-dom';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';

const Root = () => {
    return (
        <div className='font-inter'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-84px-529px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;