import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

/*

Blog template notes:

- useStaticQuery but it's not needed for template files, useStaticQuery can't access the context

- So to build the page we export the query, then at runtime gatsby reads the query and generates the blog post automatically

*/
export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date
			}
			html
		}
	}
`;

const Blog = ({ data }) => (
	<Layout>
		{/* Gets the title from the graphql query */}
		<h1>{data.markdownRemark.frontmatter.title}</h1>

		{/* Gets the date from the graphql query */}
		<p>{data.markdownRemark.frontmatter.date}</p>

		{/* Auto injects the raw HTML from the gatsby-transformer-remark */}
		<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
	</Layout>
);

Blog.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.shape({
				title: PropTypes.string.isRequired,
				date: PropTypes.string.isRequired
			}).isRequired,
			html: PropTypes.string.isRequired
		}).isRequired
	}).isRequired
};

export default Blog;
