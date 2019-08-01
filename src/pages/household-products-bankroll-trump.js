import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/Menu';
import Intro from '../components/Intro';
import BasicPage from '../elements/BasicPage';

const headlines = [
  "Here's a look at your home products that fund toxic politicians",
  "This is how you're unknowingly funding right wing politicians",
  "The brands you're buying are funding politics you hate",
  "10 things you can do right now to change our corrupt political system",
  "How to stop funding the politics you hate",
  "Don't buy another cleaning product until you've read this",
];

let title = headlines[0];

const funnel = window && window.location && window.location.search.substring(10);

if (funnel && funnel <= headlines.length) {
  title = headlines[funnel - 1];
}

const FunnelPage = () => {
  return (
    <Layout>
      <SEO title="We Voted | Press" />
      <Menu />
      <Intro />
      <BasicPage>
        <h3>{title}</h3>
      </BasicPage>
    </Layout>
  );
};

export default FunnelPage;
