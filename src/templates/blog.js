import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

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
		<h1>{data.markdownRemark.frontmatter.title}</h1>
		<p>{data.markdownRemark.frontmatter.date}</p>
		<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
	</Layout>
);

export default Blog;
