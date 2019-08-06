import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/Menu';
import Intro from '../components/Intro';
import BasicPage from '../elements/BasicPage';

const PressPage = () => {
  return (
    <Layout>
      <SEO title="We Voted | Press" />
      <Menu />
      <Intro />
      <BasicPage>
        <h3>These products defeat terrible right-wing politicians.</h3>
        <p>
          LOS ANGELES, California — We are proud to introduce We Voted®. A line of
          direct-to-consumer high-quality household cleaning products that donate 50% of
          its profits to defeat irresponsible right-wing politicians at the state and
          federal level.
        </p>
        <p>
          We Voted® is committed to donating half of the profits from all of its sales to
          the independent We Voted® SuperPAC which will handle all political action to
          comply with the Federal election law. The SuperPAC’s stated goal is to: “Target
          and defeat terrible right-wing leaders who are failing to act on the most vital
          issues facing our nation including: climate change, humane treatment of
          migrants, universal healthcare, women’s reproductive rights.”
        </p>
        <p>
          We Voted®’s initial product offering will be available through{' '}
          <a
            href="https://www.indiegogo.com/projects/these-home-goods-defeat-right-wing-politicians/"
            target="_blank"
          >
            We Voted’s IndieGogo campaign
          </a>{' '}
          and will include hand soap, dish soap, garbage bags and laundry detergent
          tablets.
        </p>
        <p>The products are all-natural and made in America.</p>
        <p>
          After the IndieGogo campaigns ends the products will be available as part of a
          monthly subscription package on the WeVoted.com website for $24/month.
        </p>
        <p>
          For press inquiries, <a href="mailto:contact@wevoted.com">contact us here.</a>
        </p>
      </BasicPage>
    </Layout>
  );
};

export default PressPage;
