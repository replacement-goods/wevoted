import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/Menu';
import Intro from '../components/Intro';

const FaqPage = () => {
  return (
    <Layout>
      <SEO title="We Voted | Frequently Asked Questions" />
      <Menu />
      <Intro />
    </Layout>
  );
};

export default FaqPage;
