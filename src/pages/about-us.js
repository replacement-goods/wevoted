import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/Menu';
import Intro from '../components/Intro';
import BasicPage from '../elements/BasicPage';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="We Voted | About Us" />
      <Menu />
      <Intro />
      <BasicPage>
        <h3>Why we're doing this.</h3>
        <p>
          How is it that huge majorities of Americans favor action on massively important
          issues ranging from gun violence to climate change and yet nothing is done?
        </p>
        <p>
          We can point to gerrymandering, Mitch McConnell, Donald Trump et al, but aren’t
          these just symptoms of a much larger problem?
        </p>
        <p>
          The real issue is that big business has taken over the Republican Party and is
          using it to irresponsibly lower corporate taxes, attack the social safety net,
          gut regulations and generally subvert our nation’s democratic institutions.
        </p>
        <p>
          Corporations are using their puppet lawmakers to block and roll back badly
          needed action on the most important issues facing our nation: climate change,
          the epidemic of gun violence, spiraling healthcare costs, massive income
          inequality and on and on.
        </p>
        <p>
          If you look at basically any corporate website, their PR department is telling
          the story about how green they are, about their recycled packaging, about all
          their social initiatives — but it’s complete bullshit. That same company is also
          investing huge sums of money into subverting our democracy.
        </p>
        <p>
          We had always assumed that it was just the “evil companies” like Exxon and Koch
          Industries, but we were so very wrong. The largest enablers of the
          arch-conservative Federalist Society (the spawning ground for the Brett
          Kavanuagh’s of the world) are Microsoft and Google. The Heritage Society, the
          Club for Growth, fucking ALEC are all being quietly underwritten by big
          corporations and the powerful trade organizations that they launder their money
          and influence through. This is how Republicans are making huge gains. Corporate
          money is the driving force behind all of it.
        </p>
        <p>
          So, in a sense, every time we (consumers) spend money in this country, we are
          complicit in funding the exact kind of politics that we so vehemently despise.
          The truly tragic part is there’s no way to avoid it. You might think that you’re
          buying shampoo from a virtuous green company, but who makes their bottles? Who
          makes the cardboard boxes they ship their products in? It’s unavoidable.
        </p>
        <p>
          Instead of trying to boycott every one of these companies to punish them for
          their bullshit, what if we created our own companies that funded the politics we
          actually do like?
        </p>
        <p>
          That’s our plan here at WE VOTED. The idea is simple. When you buy our products
          we take 50% of the profits and use them to fund direct political action against
          these corrupt right-wing assholes.
        </p>
        <p>
          We know that it will be an uphill fight. We know that one little startup can’t
          take on the unlimited resources of corporate America. But what if this catches
          on? What if we could get a million people to subscribe to our cleaning products
          every month and we put those profits into the politics we support? That could be
          as much as $100 million dollars per year for the good guys.
        </p>
        <p>That could be a big fucking deal.</p>
      </BasicPage>
      <Footer />
    </Layout>
  );
};

export default AboutPage;
