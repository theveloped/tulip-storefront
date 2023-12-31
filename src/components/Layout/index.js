import PropTypes from 'prop-types';

function Layout({ children }) {
    return <main>{children}</main>;
}

Layout.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
};

export default Layout;
