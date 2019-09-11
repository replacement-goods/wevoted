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
  createRedirect({
    fromPath: '/twitter',
    toPath: 'https://www.indiegogo.com/projects/we-voted-our-soaps-defeat-right-wing-politicians/?utm_source=twitter&utm_medium=referral&utm_campaign=launch_video',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/facebook',
    toPath: 'https://www.indiegogo.com/projects/we-voted-our-soaps-defeat-right-wing-politicians/?utm_source=facebook&utm_medium=referral&utm_campaign=launch_video',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/youtube',
    toPath: 'https://www.indiegogo.com/projects/we-voted-our-soaps-defeat-right-wing-politicians/?utm_source=youtube&utm_medium=referral&utm_campaign=launch_video',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/reddit',
    toPath: 'https://www.indiegogo.com/projects/we-voted-our-soaps-defeat-right-wing-politicians/?utm_source=reddit&utm_medium=referral&utm_campaign=launch_video',
    isPermanent: true,
  });
  createRedirect({
    fromPath: '/instagram',
    toPath: 'https://www.indiegogo.com/projects/we-voted-our-soaps-defeat-right-wing-politicians/?utm_source=instagram&utm_medium=referral&utm_campaign=launch_video',
    isPermanent: true,
  });
};
