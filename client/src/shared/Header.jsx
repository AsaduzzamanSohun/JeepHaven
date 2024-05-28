import PropTypes from 'prop-types'


const Header = ({ headings, subHeading }) => {
    return (
        <div className='text-center space-y-3 mb-10'>

            <h1 className="text-2xl md:text-5xl font-extrabold">{headings}</h1>
            <p className="text-lg md:text-xl">{subHeading}</p>

        </div>
    );
};

export default Header;

Header.propTypes = {
    headings: PropTypes.string,
    subHeading: PropTypes.string
}