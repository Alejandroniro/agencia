import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import logo_trabook from '../../assets/img/trabook-logo.png';

function Navbar() {
  return (
    <nav className='w-full py-6 top-0 fixed z-50 bg-white shadow-navbar px-4 sm:px-6'>
      <div className='flex items-center justify-between sm:flex-nowrap md:px-12 px-2'>
        <Link to='/' className='flex-shrink-0'>
          <img
            src={logo_trabook}
            alt='logo trakbook'
            width={100}
            height={90}
            className='text-lg font-medium leading-6 text-gray-900'
          />
        </Link>
        <div className='flex-grow flex items-center justify-center'>
          <NavLink
            to='/'
            className='text-lg inline-flex font-medium leading-6 text-gray-900 mx-5 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4'
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            className='text-lg inline-flex font-medium leading-6 text-gray-900 mx-5 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4'
          >
            About
          </NavLink>
          <NavLink
            to='/destination'
            className='text-lg inline-flex font-medium leading-6 text-gray-900 mx-5 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4'
          >
            Destination
          </NavLink>
          <NavLink
            to='/tour'
            className='text-lg inline-flex font-medium leading-6 text-gray-900 mx-5 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4'
          >
            Tour
          </NavLink>
          <NavLink
            to='/blog'
            className='text-lg inline-flex font-medium leading-6 text-gray-900 mx-5 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4'
          >
            Blog
          </NavLink>
        </div>
        <div className='flex-shrink-0 flex items-center space-x-2'>
          <button
            type='button'
            className='relative inline-flex items-center rounded-md border border-transparent bg-white text-orange-button px-8 py-2 text-base font-medium hover:bg-orange-button hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-button'
          >
            Login
          </button>
          <button
            type='button'
            className='relative inline-flex items-center rounded-md border border-transparent bg-orange-button text-white px-10 py-2 text-base font-medium hover:bg-orange-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-button'
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
