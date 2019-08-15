import React, { Component } from 'react';
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
import BigSmallImage from '../elements/BigSmallImage';
import thumbsDown from '../images/thumbs-down.png';
import thumbsDownLarge from '../images/thumbs-down-large.jpg';
import happyFace from '../images/happy-face.png';
import happyFaceLarge from '../images/happy-face-large.jpg';
import texting from '../images/texting.png';
import textingLarge from '../images/texting-large.jpg';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Plastics from '../components/Plastics';
import MobileCountdown from '../components/MobileCountdown';

class IndexPage extends Component {
  state = {
    scrolledOver: false,
  };

  handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      this.setState({ scrolledOver: true });
    } else {
      this.setState({ scrolledOver: false });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <Layout>
        <SEO title="We Voted to Unseat Terrible Right Wind Politicians" />
        <MobileCountdown />
        <Menu mobileCdVisible={true} />
        <Intro withProductImage={true} />
        <Problem />
        <div style={{ margin: '0 auto', maxWidth: '1222px', position: 'relative' }}>
          <BigSmallImage bigImageUrl={thumbsDownLarge} smallImageUrl={thumbsDown} />
        </div>
        <Solution />
        <div style={{ margin: '0 auto', maxWidth: '440px', position: 'relative' }}>
          <BigSmallImage bigImageUrl={happyFaceLarge} smallImageUrl={happyFace} />
        </div>
        <Subscription />
        <Products />
        <div style={{ margin: '0 auto', maxWidth: '1440px', position: 'relative' }}>
          <BigSmallImage bigImageUrl={textingLarge} smallImageUrl={texting} />
        </div>
        <About />
        <Plastics />
        <FAQ />
        <Footer />
        {this.state.scrolledOver && <CallToAction />}
      </Layout>
    );
  }
}

export default IndexPage;
