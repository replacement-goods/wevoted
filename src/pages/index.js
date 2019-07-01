import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/Intro';
import Problem from '../components/Problem';
import CallToAction from '../components/CallToAction';
import Solution from '../components/Solution';
import Products from '../components/Products';
import Subscription from '../components/Subscription';
import About from '../components/About';
import Menu from '../components/Menu';

const IndexPage = () => (
  <Layout>
    <SEO title="We Voted to Unseat Terrible Right Wind Politicians" />
    <Menu />
    <Intro />
    <Problem />
    <Solution />
    <Products />
    <Subscription />
    <About />
    <CallToAction />
  </Layout>
);

export default IndexPage;
