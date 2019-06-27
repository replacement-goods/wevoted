import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/Intro';
import Press from '../components/Press';
import Problem from '../components/Problem';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Press />
    <Problem />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
