import React from 'react';
import './DctGuild.css'; // Custom styles for this component
import member1 from '../assets/member1.jpg';
import member2 from '../assets/member2.jpg';
import member3 from '../assets/member3.jpg';
import member4 from '../assets/member4.png';
import member5 from '../assets/member5.jpg';
import member6 from '../assets/member6.jpg';
import member7 from '../assets/member7.png';

const DctGuild = () => {
  const members = [
    { id: 1, name: 'Hakim Belabbes', role: 'Hakim is an internationally renowned and award winning Moroccan American filmmaker, an auteur of visual, aural and cinematic narrative who taught film at Columbia College and The School of the Art Institute in Chicago. Hakim visual imagery captures the richness of Arabic oral storytelling as the traditional intersection for creating space for observation, contemplation and reflection. Hakim currently also runs The Sahara Lab Initiative with partners Don Smith and Hammadi Gueroum in the southern Moroccan city of Laayoune', image: member1 },
    { id: 2, name: 'Tony Moeini', role: 'Tony is an American serial entrepreneur and arch-angel investor who discovers and mentors high-potential start-ups and change-agents across the South East Asia, the Middle East and Central Asia in diverse fields such as real estate development and investment. fintech, proptech, pharmaceuticals, wireless communications, consumer electronics, crowdsourcing. social networking, user-generated content online video, mobile network security, electronic music, fiber- optic networking, online marketing, and many others.', image: member2 },
    { id: 3, name: 'Amir Aussia', role: 'Amir is a technology and management executive with over 25 years of experience and understanding of financial markets, models and management with tremendous passion for emerging Frontier Technology. He is often sought by venture capital and private equity firms for investment strategies across a diverse portfolio of start-ups, entrepreneurial and incubator programs in Europe, the Americas and the Middle East. He is active in developing and innovating in convergence methodologies for technology-based business transformation via multi-digital channels built on decentralized autonomous organisations, digital asset management and blockchain production labs.', image: member3 },
    { id: 4, name: 'Lim Teck Kheng', role: 'Kheng, COO of KAMI is seasoned industry veteran with over 30 years extensive experience in Music, A&R. Artist Development, Creative/Aesthetic Direction and Management with leading global music heavyweights. BMG. David Geffen, Polygram, Sony and Universal Music. He works alongside regional and international artists, songwriters, producers, directors and creators in the lifestyle, entertainment and media industries. He spearheads digital marketing, content distribution. engagement and consumer outreach across technology channels.', image: member4 },
    { id: 5, name: 'Rodney Holden', role: 'A seasoned international procurement subject matter expert with over 30 years extensive experience in both the public and private sectors of Canada, Europe and the Middle East across a diverse range of industries involving complex and strategic procurement including critical outsourcing resources, raw materials. construction, professional services. IT, retail goods. printing, utilities, capital equipment, facilities management and 3rd party logistics.', image: member5 },
    { id: 6, name: 'Jason Chong', role: 'Jason is a charismatic and imaginative business leader who has wide knowledge of upscaling and diversifying commercial prospects in North and South East Asia over the past 20 years. He has an Asia wide logistics and supply chain network active in China, Japan, South Korea and Taiwan that support a diverse array of Industrial, retail and e-commerce ventures in Indonesia. Malaysia and Singapore.', image: member6 },
    { id: 7, name: 'Alex Openhiem', role: 'Alex is a talented multidisciplinary industry creative and strategist who drives conceptual design across a range of print and digital mediums. He has worked directly with a range of global A-brands from start-ups through to national governing bodies, international creative agencies, renewable energy companies and within the FMCG sector.', image: member7 },
  ];

  return (
    <section className="section dct-guild" data-bgcolor="#F5F5F5">
      <h1 className="guild-title">DCT Guild</h1>
      <p className="guild-description">DCT deeply values the counsel, and perspective of experienced regional and international industry entrepreneurs and market innovation for insights, exchange of ideas-and shared knowledge on a variety of strategies in order to fulfil our promise av DCT in plaving nor art.</p>
      <p className="guild-description">As a team, we are stronger with our diverse skills and competencies, and a deep sense of purpose</p>
      <div className="guild-members">
        {members.map((member) => (
          <div key={member.id} className="member-card">
            <img src={member.image} alt={member.name} className="member-image" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DctGuild;
