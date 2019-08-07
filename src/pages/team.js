import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Menu from '../components/Menu';
import Intro from '../components/Intro';
import BasicPage from '../elements/BasicPage';
import Footer from '../components/Footer';
import TeamMember from '../elements/TeamMember';
import EliBio from '../elements/TeamBios/Eli';
import TovahBio from '../elements/TeamBios/Tovah';
import AndyBio from '../elements/TeamBios/Andy';
import eli from '../images/eli-headshot.jpg';
import andy from '../images/andy-headshot.jpg';

const TeamPage = () => {
  return (
    <Layout>
      <SEO title="We Voted | Meet The Team" />
      <Menu />
      <Intro />
      <BasicPage>
        <h3>The We Voted Team</h3>
        <TeamMember name="Eli Kagan" title="Founder and CEO">
          {{
            headshot: <img src={eli} alt="Eli Kagan, Founder and CEO" />,
            bio: <EliBio />
          }}
        </TeamMember>
        <TeamMember name="Tovah Simon" title="COO">
          {{
            headshot: null,
            bio: <TovahBio />
          }}
        </TeamMember>
        <TeamMember name="Andy Gillette" title="CTO">
          {{
            headshot: <img src={andy} alt="Andy Gillette, CTO" />,
            bio: <AndyBio />
          }}
        </TeamMember>
      </BasicPage>
      <Footer />
    </Layout>
  );
};

export default TeamPage;
