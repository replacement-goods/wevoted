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
import tovah from '../images/tovah-headshot.jpg';
import MarleyBio from '../elements/TeamBios/Marley';
import marley from '../images/marley-headshot.jpg';
import AshantiBio from '../elements/TeamBios/Ashanti';
import ashanti from '../images/ashanti-headshot.jpg';
import AdamBio from '../elements/TeamBios/Adam';
import adam from '../images/adam-headshot.jpg';
import SamBio from '../elements/TeamBios/Sam';
import sam from '../images/sam-headshot.jpg';
import AiJenBio from '../elements/TeamBios/AiJen';
import aijen from '../images/aijen-headshot.jpg';

const TeamPage = () => {
  return (
    <Layout>
      <SEO title="We Voted | Meet The Team" />
      <Menu />
      <Intro />
      <BasicPage>
        <h3>The We Voted Team</h3>
        <TeamMember name="Marley D. Clements" title="Advisory Board Chair & Political Director">
          {{
            headshot: <img src={marley} alt="Marley D. Clements, Advisory Board Chair & Political Director" />,
            bio: <MarleyBio />
          }}
        </TeamMember>
        <TeamMember name="A’shanti F. Gholar" title="Advisory Board">
          {{
            headshot: <img src={ashanti} alt="A'shanti F. Gholar, Advisory Board" />,
            bio: <AshantiBio />
          }}
        </TeamMember>
        <TeamMember name="Adam Parkhomenko" title="Advisory Board">
          {{
            headshot: <img src={adam} alt="Adam Parkhomenko, FAdvisory Board" />,
            bio: <AdamBio />
          }}
        </TeamMember>
        <TeamMember name="Sam Youngman" title="Advisory Board">
          {{
            headshot: <img src={sam} alt="Sam Youngman, Advisory Board" />,
            bio: <SamBio />
          }}
        </TeamMember>
        <TeamMember name="Ai-Jen Poo" title="Advisory Board">
          {{
            headshot: <img src={aijen} alt="Ai-Jen Poo, Advisory Board" />,
            bio: <AiJenBio />
          }}
        </TeamMember>
        <TeamMember name="Eli Kagan" title="Founder and CEO">
          {{
            headshot: <img src={eli} alt="Eli Kagan, Founder and CEO" />,
            bio: <EliBio />
          }}
        </TeamMember>
        <TeamMember name="Tovah Simon" title="COO">
          {{
            headshot: <img src={tovah} alt="Tovah Simon, COO" />,
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
