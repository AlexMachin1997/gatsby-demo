import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import '../../styles/index.scss';
import './index.scss';

const Layout = ({ children }) => (
	<div className='layout'>
		<div className='layout__content'>
			<Header />
			{children}
		</div>
		<Footer />
	</div>
);

Layout.propTypes = {
	children: PropTypes.array.isRequired
};

export default Layout;
