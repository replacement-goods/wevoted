import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Logo from '../components/logo';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `250px`, marginBottom: `1.45rem` }}>
      <Logo />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
