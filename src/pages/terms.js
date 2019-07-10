import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/Menu';
import Intro from '../components/Intro';

const TermsPage = () => {
  return (
    <Layout>
      <SEO title="We Voted | Terms and Conditions" />
      <Menu />
      <Intro />
    </Layout>
  );
};

export default TermsPage;
