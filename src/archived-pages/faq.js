import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/Menu';
import Intro from '../components/Intro';
import BasicPage from '../elements/BasicPage';

const FaqPage = () => {
  return (
    <Layout>
      <SEO title="We Voted | Frequently Asked Questions" />
      <Menu />
      <Intro />
      <BasicPage>
        <h2>Frequently Asked Questions</h2>
        <h3>How do we know where the money is going?</h3>
        <p>
          We're committed to 100% transparency and we'll post everything on our website.
          But basically your money will be going to run ads targeting right-wing
          politicians running for office.
        </p>
        <h3>Which candidates will you target?</h3>
        <p>
          We'll make decisions opportunistically with an eye towards maximizing the impact
          at both the national and state levels.
        </p>
        <h3>Why did you choose to sell these kinds of products?</h3>
        <p>
          The truth is that we chose these kinds of products because they're fairly easy
          to manufacture. Down the road we hope to expand this business into many other
          product categories.
        </p>
        <h3>You're selling products in plastic bottles, wtf?</h3>
        <p>
          It's true. But hear us out. It's pretty hard to start a project like this AND be
          low impact. To be honest the supply chains aren't really there yet to provide
          eco-friendly packaging for these kinds of products at a cost that would make
          this project viable. We're working on better solutions. First of all
          eco-plastics are super promising but many of the supposedly recyclable plastics
          aren't as they seem. We're exploring lot's of alternatives and all we can say is
          that we'll get better.
        </p>
        <h3>
          Aren't you hypocrites? Isn't putting more money into politics just going to make
          things worse?
        </h3>
        <p>
          First of all, it's hard to imagine things getting much worse. Second of all, all
          we're doing is fighting fire with fire. Corporate America already bankrolls the
          Right. All we're doing is trying to help fight back. And further, if the courts
          overturned Citizens United and made what we're doing illegal we would shut We
          Voted down and dance in the streets.
        </p>
        <h3>Who are you? How can we trust you?</h3>
        <p>
          Fair questions. We are just ordinary pissed off progressives who decided to do
          something. You can follow everything we're doing on our social media pages.
          We'll try to keep everything posted. If you have more questions, ask us in the
          comments and we'll answer.
        </p>
        <h3>
          Are all household products really engaged in the kind of right wing politics
          that you claim?
        </h3>
        <p>
          Yes and no. We did a lot of research. First of Dr. Bronner's (as best we can
          tell) walks on water. But generally all the bigger ones all dirty. Even if they
          claim they're not if you dig into their lobbying efforts and their trade
          organizations they're filthy. But it's not just the companies themselves. Their
          supply chains are dirty. The shipping companies give HUGE money to right wing
          causes. And don't get us started on the packaging companies. They might be the
          worst of all.
        </p>
        <h3>Isn't this just a drop in the bucket?</h3>
        <p>
          First of all, it doesn't have to be. If we can convince a million people to join
          in on this it will create an earthquake in American politics. And that's
          obviously our goal. But it sure would be nice if the corporations that are
          underwriting all of these terrible politicians got shamed into turning off the
          faucet. We have no illusions about the scale of this problem. But it's too
          important not to try.
        </p>
      </BasicPage>
    </Layout>
  );
};

export default FaqPage;
