import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './index.scss';

const Footer = () => {
	// Queries the sites author which is defined in the gatsby-config.js siteMetadata object
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
				}
			}
		}
	`);

	return (
		<footer>
			<p>
				Created by {data.site.siteMetadata.author} &#169; {new Date().getFullYear()}
			</p>
		</footer>
	);
};

export default Footer;
