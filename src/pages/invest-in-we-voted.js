import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/Menu';
import Intro from '../components/Intro';
import BasicPage from '../elements/BasicPage';
import Footer from '../components/Footer';

const InvestPage = () => {
  return (
    <Layout>
      <SEO title="We Voted | Invest In Us" />
      <Menu />
      <Intro />
      <BasicPage>
        <h3>
          In the coming months we will invite our customers to become owners of this
          business.
        </h3>
        <p>
          We Voted® is a new kind of business. We started it for the explicit purpose of
          helping to balance out the Right’s absurd resource advantage. Obviously to make
          any sort of impact on that we’ll have to grow this into a big successful company
          with hundreds of millions of dollars in sales, which is exactly what we aim to
          do. We know this won’t be an easy task, but we’re doing it.
        </p>
        <p>
          But this isn’t a non-profit. We believe in the philosophy that it’s possible to
          DO WELL by DOING GOOD. We believe that it’s ok to earn a living selling a
          product that is righteous and we believe that investors should be able to put
          their money into an enterprise that seeks to both DO GOOD and DO WELL. And we
          believe that opportunity must not be limited to rich people.
        </p>
        <p>
          In the coming months we will invite our customers to become owners of this
          business. Our dream is to have an army of small investors who believe in our
          cause and help us build this business into a force for political change in this
          country. Investors will have voting rights in the direction of the business and
          will help elect board members who will participate in guiding this enterprise.
        </p>
        <p>
          If this is something you might be interested in, fill out the form below and
          we’ll contact you pertinent updates.
        </p>
      </BasicPage>
      <Footer />
    </Layout>
  );
};

export default InvestPage;
