import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';
import Hero from '../components/Hero';

const Home = () => {
	const data = useStaticQuery(graphql`
		query {
			hero: file(relativePath: { eq: "header-bg.jpg" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<Head />
			<Hero
				title='Awesome Hero Header Title'
				fluid={data.hero.childImageSharp.fluid}
				height='500px'
				mobileHeight='300px'
			>
				<h2>Alex Machin </h2>
				<p>Awesome Web Developer Based in South Yorkshire</p>
				<Link to='/gallery'>Go to Gallery</Link>
			</Hero>

			<h1>Hello</h1>
			<h2>I'm Alex Machin, a Software Engineer living In Rotherham</h2>
			<p>
				Need a developer? <Link to='/contact'>Contact Me.</Link>
			</p>
		</Layout>
	);
};

export default Home;
