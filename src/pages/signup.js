import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/Menu';
import Intro from '../components/Intro';
import BasicPage from '../elements/BasicPage';
import button from '../images/button.png';

const signup = () => {
  return (
    <Layout>
      <SEO title="We Voted | Sign up for updates" />
      <Menu />
      <Intro />
      <BasicPage>
        <h3>Sign Up For Updates</h3>
        <p>
          Did you know that the household products that you have in your home right now
          are owned by companies that give big money to terrible politicians who support
          the right-wing politics you hate?
        </p>
        <p>
          We're flipping the script. We sell great household products (soaps, cleaners
          etc) and we use half of the profits to unseat terrible right-wing politicians.
        </p>
        <p>Sign up for early access to our first subscription in August 2019</p>
        <form
          action="https://wevoted.us20.list-manage.com/subscribe/post?u=6a6cf2da5da0bba15800e56c4&amp;id=567078c5cf"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
        >
          <input type="email" name="EMAIL" placeholder="Enter your email address" />
          <button type="submit">
            <img src={button} />
          </button>
          <div id="mce-responses" class="clear">
            <div
              class="response"
              id="mce-error-response"
              style={{ display: 'none' }}
            ></div>
            <div
              class="response"
              id="mce-success-response"
              style={{ display: 'none' }}
            ></div>
          </div>
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input
              type="text"
              name="b_6a6cf2da5da0bba15800e56c4_567078c5cf"
              tabindex="-1"
              value=""
            />
          </div>
        </form>
      </BasicPage>
    </Layout>
  );
};

export default signup;
