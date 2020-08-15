import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import '../styles/index.scss';

const Layout = ({ children }) => (
	<div>
		<Header />
		{children}
		<Footer />
	</div>
);

Layout.propTypes = {
	children: PropTypes.array.isRequired
};

export default Layout;
