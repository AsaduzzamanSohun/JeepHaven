import PropTypes from 'prop-types'


const Header = ({ headings, subHeading }) => {
    return (
        <div className='text-center text-[#04052e] space-y-3 mb-10'>

            <h1 className="text-2xl md:text-5xl font-extrabold">{headings}</h1>
            <p className="text-lg font-bold ">{subHeading}</p>

        </div>
    );
};

export default Header;

Header.propTypes = {
    headings: PropTypes.string,
    subHeading: PropTypes.string
}