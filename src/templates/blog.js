// import React from 'react';
// import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';

// import Layout from '../components/Layout';

/*

Blog template notes:

- useStaticQuery is not needed for template files, useStaticQuery can't access the context

- So to build the page we export the query, then at runtime gatsby reads the query and generates the blog post automatically

*/

// Markdown Query
// export const query = graphql`
// 	query($slug: String!) {
// 		markdownRemark(fields: { slug: { eq: $slug } }) {
// 			frontmatter {
// 				title
// 				date
// 			}
// 			html
// 		}
// 	}
// `;

// const Blog = ({ data }) => (
// 	<Layout>
// 		{/* Gets the title from the graphql query */}
// 		<h1>{data.markdownRemark.frontmatter.title}</h1>

// 		{/* Gets the date from the graphql query */}
// 		<p>{data.markdownRemark.frontmatter.date}</p>

// 		{/* Auto injects the raw HTML from the gatsby-transformer-remark */}
// 		<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
// 	</Layout>
// );

// Blog.propTypes = {
// 	data: PropTypes.shape({
// 		markdownRemark: PropTypes.shape({
// 			frontmatter: PropTypes.shape({
// 				title: PropTypes.string.isRequired,
// 				date: PropTypes.string.isRequired
// 			}).isRequired,
// 			html: PropTypes.string.isRequired
// 		}).isRequired
// 	}).isRequired
// };

// export default Blog;

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/Layout';

/*

Blog template notes:

- useStaticQuery is not needed for template files, useStaticQuery can't access the context

- So to build the page we export the query, then at runtime gatsby reads the query and generates the blog post automatically

*/

export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			publishedDate(formatString: "MMMM Do YYYY")
			postBody {
				json
			}
		}
	}
`;

const Blog = ({ data }) => {
	/*

	documentToReactComponents options
		- Argument 1: The raw JSON body (Without the image)
		- Argument 2: Allows blocks such as elements to be renders
			- Requires you to provide a function which allows you to get the images from contentful and display them

	*/
	const options = {
		renderNode: {
			// nodeType which accepts a function to get the object properties to construct the image/s
			'embedded-asset-block': (node) => {
				const alt = node.data.target.fields.title['en-US'];
				const { url } = node.data.target.fields.file['en-US'];

				return <img alt={alt} src={url} />;
			}
		}
	};

	return (
		<Layout>
			{/* Gets the title from the graphql query */}
			<h1>{data.contentfulBlogPost.title}</h1>

			{/* Gets the date from the graphql query */}
			<p>{data.contentfulBlogPost.publishedDate}</p>

			{/* Auto injects the raw HTML from the gatsby-transformer-remark */}
			{/* <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} /> */}
			{documentToReactComponents(data.contentfulBlogPost.postBody.json, options)}
		</Layout>
	);
};

Blog.propTypes = {
	data: PropTypes.shape({
		contentfulBlogPost: PropTypes.shape({
			title: PropTypes.string.isRequired,
			publishedDate: PropTypes.string.isRequired,
			postBody: PropTypes.shape({
				json: PropTypes.isRequired
			})
		}).isRequired
	}).isRequired
};

export default Blog;
