import React from 'react';

import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../../components/Layout';
import './index.scss';

const Blog = () => {
	// This query requires gatsby-source-filesystem and gatsby-transformer-remark
	const blogPostQuery = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							date
						}
						html
						excerpt
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<h1>Blog page</h1>
			<ol className='posts'>
				{blogPostQuery.allMarkdownRemark.edges.map((data, index) => (
					<li key={index} className='post'>
						<Link to={`/blog/${data.node.fields.slug}`}>
							<h2>{data.node.frontmatter.title}</h2>
							<p>{data.node.frontmatter.date}</p>
						</Link>
					</li>
				))}
			</ol>
		</Layout>
	);
};

export default Blog;
