import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/Layout';

import './index.scss';

const Gallery = () => {
	const data = useStaticQuery(graphql`
		query Images {
			# image: file(relativePath: {eq: "gatsby-astronaut.jpg"}) {
			#   id
			#   childImageSharp {
			#     fluid {
			#       ...GatsbyImageSharpFluid
			#     }
			#     fixed(width: 400) {
			#       ...GatsbyImageSharpFixed
			#     }
			#   }
			# }
			# unsplash1: file(relativePath: {eq: "gatsby-astronaut.jpg"}) {
			#   childImageSharp {
			#     fluid(quality: 100) {
			#       ...GatsbyImageSharpFluid_withWebp
			#     }
			#   }
			# }
			# gallery: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
			#	nodes {
			#		id
			#			childImageSharp {
			#			fluid {
			#				...GatsbyImageSharpFluid
			#			}
			#			fixed(width: 200, height: 200) {
			#				...GatsbyImageSharpFixed
			#			}
			#		}
			#	}
			# }
			gallery: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
				nodes {
					id
					childImageSharp {
						fluid(maxWidth: 1000, maxHeight: 500) {
							...GatsbyImageSharpFluid_withWebp
						}
						fixed(width: 200, height: 200) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<h2> Awesome gallery produced by gatsby-image</h2>
			<div className='gallery'>
				{data.gallery.nodes.map((image, index) => (
					<div className='gallery__item' key={index}>
						<Image fixed={image.childImageSharp.fixed} />
					</div>
				))}
			</div>
		</Layout>
	);
};

export default Gallery;