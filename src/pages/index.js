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
import aijen from '../images/aijen-headshot.jpg';
import QuotePromo from '../elements/QuotePromo';
import Press from '../components/Press';
import Monthly from '../components/Monthly';

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
        <SEO title="We Voted to Unseat Terrible Right Wing Politicians" />
        <Menu/>
        <Intro withProductImage={true} />
        <Press />
        <QuotePromo
          quote="“For too long corporations have been pouring vast sums of money into extreme right-wing politics. I’m proud to support We Voted® and its goal of leveling the playing field on behalf of our shared progressive ideals.”"
          author="Ai-Jen Poo"
          authorImage={aijen}
          authorTitle="Longtime activist & advocate for social justice"
        />
        <Problem />
        <div style={{ margin: '0 auto', paddingTop: '23px', maxWidth: '1222px', position: 'relative' }}>
          <BigSmallImage alt="Disappointed woman thinking 'Seriously Mrs. Meyer? WTF?'" bigImageUrl={thumbsDownLarge} smallImageUrl={thumbsDown} />
        </div>
        <Solution />
        <Monthly />
        <Subscription />
        <Products />
        <div style={{ margin: '0 auto', maxWidth: '1440px', position: 'relative' }}>
          <BigSmallImage alt="Woman typing on a cell phone thinking 'Sign me up!'" bigImageUrl={textingLarge} smallImageUrl={texting} />
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
