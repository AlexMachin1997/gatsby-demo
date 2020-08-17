const path = require('path');

/*

onCreateNode description:

Called when a new node is created. Plugins wishing to extend or transform nodes created by other plugins should implement this API.

ONLY NEEDED FOR MARKDOWN. CONTENTFUL ALREADY HAS SLUGS

*/
// exports.onCreateNode = ({ node, actions }) => {
// 	const { createNodeField } = actions;

// 	// Blog post slug generator
// 	if (node.internal.type === 'MarkdownRemark') {
// 		// Gets the base file name e.g. Gatsby.md and removed the file extension associated to the file
// 		const slug = path.basename(node.fileAbsolutePath, '.md');

// 		createNodeField({
// 			node, // Node to target (Probably the current markdown file)
// 			name: 'slug', // Used to reference the slug in the GraphQL query (See createPages() api for query)
// 			value: slug // The value of the slug e.g. gatsby
// 		});
// 	}
// };

/*

createPages description:

Tell plugins to add pages. This extension point is called only after the initial sourcing and transformation of nodes plus creation of the GraphQL
schema are complete so you can query your data in order to create pages.

createPage() api description:

Tell plugins to add pages. This extension point is called only after the
initial sourcing and transformation of nodes plus creation of the GraphQL schema
are complete so you can query your data in order to create pages.


createPage() api usage:

1) Loop through the edges (Markdown posts)

2) For each page create a dynamic page via the createPage api
	- Pass the component url ( Absolute URL via the path.resolve() )
	- Pass a path property, this is how the page will be accessed e.g. blog/gatsby
	- Pass props to the template url e.g. slug to get the resource

*/

exports.createPages = async ({ graphql, actions }) => {
	// Extract the createPage api from the actions argument
	const { createPage } = actions;

	// Get the slog for each markdown file
	try {
		// Markdown approach
		// const response = await graphql(`
		// 	query {
		// 		allMarkdownRemark {
		// 			edges {
		// 				node {
		// 					fields {
		// 						slug
		// 					}
		// 				}
		// 			}
		// 		}
		// 	}
		// `);
		const response = await graphql(`
			{
				allContentfulBlogPost {
					edges {
						node {
							slug
						}
					}
				}
			}
		`);

		/* Markdown approach: */
		// response.data.allMarkdownRemark.edges.forEach((edge) => {
		// 	createPage({
		// 		component: path.resolve('./src/templates/blog.js'),
		// 		path: `/blog/${edge.node.fields.slug}`,
		// 		context: {
		// 			slug: edge.node.fields.slug,
		// 		}
		// 	});
		// });

		/* Headless CMS Approach (Wordpress, Contentful, Drupal etc) */
		response.data.allContentfulBlogPost.edges.forEach((edge) => {
			createPage({
				component: path.resolve('./src/templates/blog.js'),
				path: `/blog/${edge.node.slug}`,
				context: {
					slug: edge.node.slug
				}
			});
		});
	} catch (err) {
		console.log(err);
		return false;
	}
};
