/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: '/launch',
    toPath:
      'https://www.indiegogo.com/projects/these-home-goods-defeat-right-wing-politicians/',
  });
  createRedirect({
    fromPath: '/fundraiser-preview',
    toPath:
      'https://www.indiegogo.com/project/preview/407c08d9?utm_source=website&utm_medium=email&utm_campaign=fundraiser_preview',
    isPermanent: true,
  });
};
