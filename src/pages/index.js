import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/Layout';

const Home = () => {
	const data = useStaticQuery(graphql`
		query {
			unsplash1: file(relativePath: { eq: "gatsby-astronaut.jpg" }) {
				childImageSharp {
					fluid(maxHeight: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<div>
				<Image fluid={data.unsplash1.childImageSharp.fluid} />
			</div>
			<h1>Hello</h1>
			<h2>I'm Alex Machin, a Software Engineer living In Rotherham</h2>
			<p>
				Need a developer? <Link to='/contact'>Contact Me.</Link>
			</p>
		</Layout>
	);
};

export default Home;
