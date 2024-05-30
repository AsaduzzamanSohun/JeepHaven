import PropTypes from 'prop-types'


const Header = ({ headings, subHeading }) => {
    return (
        <div className='text-center text-[#130F40] space-y-3 mb-10'>

            <h1 className="text-2xl md:text-4xl font-semibold text-center">{headings}</h1>
            <p className="text-sm font-semibold ">{subHeading}</p>

        </div>
    );
};

export default Header;

Header.propTypes = {
    headings: PropTypes.string,
    subHeading: PropTypes.string
}