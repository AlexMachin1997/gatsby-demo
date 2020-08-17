// import React from 'react';

// import { useStaticQuery, graphql, Link } from 'gatsby';

// import Layout from '../../components/Layout';
// import './index.scss';

// const Blog = () => {
// 	/*

// 	Markdown file query description:

// 	Queries the local files located in the post directory

// 	To read the markdown file gatsby-transformer-remark is used, this provides a unumber of propertie such as title, date, raw html etc

// 	NOTE:

// 	The below code sample is generated in gatsby-node via the onCreateNode api

// 	field {
// 		slug
// 	}

// 	*/
// 	const blogPostQuery = useStaticQuery(graphql`
// 		query {
// 			allMarkdownRemark {
// 				edges {
// 					node {
// 						frontmatter {
// 							title
// 							date
// 						}
// 						html
// 						excerpt
// 						fields {
// 							slug
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`);

// 	return (
// 		<Layout>
// 			<h1>Blog page</h1>
// 			<ol className='posts'>
// 				{blogPostQuery.allMarkdownRemark.edges.map((data, index) => (
// 					<li key={index} className='post'>
// 						<Link to={`/blog/${data.node.fields.slug}`}>
// 							<h2>{data.node.frontmatter.title}</h2>
// 							<p>{data.node.frontmatter.date}</p>
// 						</Link>
// 					</li>
// 				))}
// 			</ol>
// 		</Layout>
// 	);
// };

// export default Blog;

import React from 'react';

import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../../components/Layout';
import './index.scss';

const Blog = () => {
	const blogPostQuery = useStaticQuery(graphql`
		{
			allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
				edges {
					node {
						title
						slug
						publishedDate(formatString: "MMMM Do YYYY")
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<h1>Blog page</h1>
			<ol className='posts'>
				{blogPostQuery.allContentfulBlogPost.edges.map((data, index) => (
					<li key={index} className='post'>
						<Link to={`/blog/${data.node.slug}`}>
							<h2>{data.node.title}</h2>
							<p>{data.node.publishedDate}</p>
						</Link>
					</li>
				))}
			</ol>
		</Layout>
	);
};

export default Blog;
