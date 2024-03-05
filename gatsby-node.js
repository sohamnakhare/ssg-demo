const path = require('path');

async function getDogs() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)

    if (!res.ok) {
      throw new Error(`Response failed`)
    }

    const result = await res.json()

    return  result;
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {}
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query Contentful data
  const result = await graphql(`
    query {
      allContentfulExampleBlog {
        nodes {
          author
          description
        }
      }
    }
  `);

  // Create pages for each blog post
  result.data.allContentfulExampleBlog.nodes.forEach(blog => {
    createPage({
      path: `/blogs/${blog.author}`,
      component: path.resolve('./src/pages/blog.tsx'),
      context: blog,
    });
  });

  const dog = await getDogs()
  createPage({
    path: `/blogs/dog`,
    component: path.resolve('./src/pages/dsg.tsx'),
    context: dog,
    defer: true,
  });

};