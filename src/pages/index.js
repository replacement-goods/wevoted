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
import Press from '../components/Press';
import SuperPAC from '../components/SuperPAC';
import BigSmallImage from '../elements/BigSmallImage';
import thumbsDown from '../images/thumbs-down.png';
import thumbsDownLarge from '../images/thumbs-down-large.png';
import happyFace from '../images/happy-face.png';
import happyFaceLarge from '../images/happy-face-large.png';
import texting from '../images/texting.png';

const IndexPage = () => (
  <Layout>
    <SEO title="We Voted to Unseat Terrible Right Wind Politicians" />
    <Menu />
    <Intro withProductImage={true} />
    <Press />
    <Problem />
    <BigSmallImage bigImageUrl={thumbsDownLarge} smallImageUrl={thumbsDown} />
    <Solution />
    <div style={{ margin: '0 auto', maxWidth: '440px' }}>
      <BigSmallImage bigImageUrl={happyFaceLarge} smallImageUrl={happyFace} />
    </div>
    <Subscription />
    <Products />
    <div style={{ margin: '50px auto 0 auto', maxWidth: '440px' }}>
      <img src={texting} />
    </div>
    <About />
    <CallToAction />
  </Layout>
);

export default IndexPage;
