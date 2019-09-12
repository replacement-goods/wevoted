import React from 'react';
import styles from './faq.module.scss';
import InnerContainer from '../../elements/InnerContainer';

const FAQ = () => {
  return (
    <div className={styles.faqContainer}>
      <InnerContainer>
        <h2>FAQs</h2>
        <article className={styles.faqContent}>
          <div className={styles.question}>
            <h3>How do we know where the money is going?</h3>
            <p>
              We’re committed to 100% transparency and we’ll post everything on our
              website. But basically your money will be going to run ads targeting
              right-wing politicians running for office.
            </p>
            <p>
              In the long run we have a bigger dream for We Voted®. Running attack ads
              against Republicans can only do so much. The hard truth is that for the last
              30 years the Right has taken huge amounts of money from big corporations and
              built an elaborate network of organizations like the Federalist Society, the
              Club for Growth and the American Legal Exchange Council (ALEC) which are a
              big part of where its power comes from. Eventually we hope We Voted® can
              help raise money to fund these kinds of organizations on the Left.
            </p>
          </div>
          <div className={styles.question}>
            <h3>Which candidates will you target?</h3>
            <p>
              We’ll make decisions opportunistically while maximizing the impact at both
              the national and state levels. Right now we believe investing in purple
              state Senate elections is the smartest move. But that may change in the
              coming months and certainly in the coming years.
            </p>
          </div>
          <div className={styles.question}>
            <h3>What do you guys know about making high quality products?</h3>
            <p>
              This is going to really shock you, but most of the companies making soaps
              are using formulations that have been around for a hundred years. The
              innovative stuff happening in the world of soaps and cleaners has to do with
              using plant extracts like thymol which is an extract from the herb thyme.
              Anyway, we’re synthesizing all-natural old-school formulations with some of
              these newer plant-based additives to make some great products. They are
              simple, high quality and all-natural.
            </p>
          </div>
          <div className={styles.question}>
            <h3>How is this legal?</h3>
            <p>
              Great question. First of all, it shouldn’t be. But it is. We are a
              for-profit California C-Corporation. Totally legal. As a company we are
              committed to pouring half of our profits into our super PAC. Totally legal.
              And that super PAC will run targeted political ads aimed at throwing corrupt
              right-wing monsters out of office. Totally legal.
            </p>
            <p>
              The funny part is that we’re doing exactly what pretty much every other
              corporation in America is doing… We’re just being transparent about it.
            </p>
          </div>
          <div className={styles.question}>
            <h3>Why did you choose to sell these kinds of products?</h3>
            <p>
              The truth is that we chose these kinds of products because they’re fairly
              easy to manufacture at a high quality. Down the road we hope to expand this
              business into many other product categories. Right now you are more than
              likely subscribed to a mobile phone carrier that gives HUGE money to
              Republicans. We believe progressives should have an alternative.
            </p>
          </div>
          <div className={styles.question}>
            <h3>You're selling products in plastic bottles, wtf?</h3>
            <p>
              It’s true. Sadly the supply chains aren’t really there yet to provide
              eco-friendly packaging for these kinds of products at a cost that would make
              this project viable.
            </p>
            <p>
              We’re working on better solutions. First of all eco-plastics are promising
              but many of the supposedly recyclable plastics aren’t as they seem. We’re
              exploring lots of alternatives and all we can say is that we’ll get better.
            </p>
            <p>
              More than likely we will get to a place where we are providing our customers
              with refillable bottles and sending out our liquid products in milk cartons
              made of paper. But that’ll happen next year.
            </p>
          </div>
          <div className={styles.question}>
            <h3>
              Aren't you hypocrites? Isn't putting more money into politics just going to
              make things worse?
            </h3>
            <p>
              First of all, it’s hard to imagine things getting much worse. Second of all,
              all we’re doing is fighting fire with fire. Corporate America already
              bankrolls the Right. All we’re doing is trying to help fight back. And
              further, if the courts overturned Citizens United and made what we’re doing
              illegal, we would shut We Voted® down and dance in the streets.
            </p>
          </div>
          <div className={styles.question}>
            <h3>Who are you? How can we trust you?</h3>
            <p>
              Fair questions. We are just ordinary pissed off progressives who decided to
              do something. You can follow everything we’re doing on our social media
              pages. If you have more questions, ask us in the comments and we’ll answer.
            </p>
          </div>
          <div className={styles.question}>
            <h3>
              Are all household products really engaged in the kind of right wing politics
              that you claim?
            </h3>
            <p>
              Yes and no. We did a lot of research. First off, Dr. Bronner’s (as best we
              can tell) walks on water. But generally all the bigger ones are dirty. Even
              if they claim they’re not they are laundering the money through lobbying
              firms and trade organizations that do the dirty work.
            </p>
            <p>
              Their PR firms will say things like: We give money to leaders from both
              parties to make sure that the interests of our shareholders blah blah blah.
              It’s bullshit. The only correct amount of money to give to politicians in
              bed with the gun lobby is ZERO. The only correct amount of money to give to
              politicians who are ok with separating migrant kids from their mothers is
              ZERO. I’m getting pissed off just writing this.
            </p>
          </div>
          <div className={styles.question}>
            <h3>Isn't this just a drop in the bucket?</h3>
            <p>
              First of all, it doesn’t have to be. If we can convince a million people to
              join in on this it will create an earthquake in American politics. And
              that’s obviously our goal. But it sure would be nice if the corporations
              that are underwriting all of these terrible politicians got shamed into
              turning off the faucet. We have no illusions about the scale of this
              problem. But it’s too important not to try.
            </p>
          </div>
          <div className={styles.question}>
            <h3>What's the deal with these products?</h3>
            <p>
              We are committed to manufacturing and selling safe all-natural products.
              Currently we are making our products in Illinois at a small family run
              facility. As we expand our product line we are committed to making goods our
              customers will love. We will always work our hardest to exceed your
              expectations.
            </p>
          </div>
        </article>
      </InnerContainer>
    </div>
  );
};

export default FAQ;
