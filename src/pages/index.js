import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/Intro';

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
        <Intro withProductImage={true} />
      </Layout>
    );
  }
}

export default IndexPage;
