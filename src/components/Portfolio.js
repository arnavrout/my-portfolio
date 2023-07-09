import React from 'react';
import styled from 'styled-components';
import image from '../images/portfolioPic.png'


const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(#2b6777, #52ab98);
  text-align: center;
`;

const Navbar = styled.nav`
 display: flex;
 flex-wrap: wrap;
 justify-content: flex-end;
 background-color: #f1f1f1;
 padding: 15px;

  @media (max-width: 620px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Logo = styled.a`
  font-size: 24px;
  color: #2b6777;
  text-decoration: none;
  margin-right: auto;
  margin-left: auto;
  transition: font-size 0.2s;
  font-weight: bold;


  &:hover {
    font-size: 26px;
    font-weight: bold;
  }

  @media ( max-width: 620px) {
    margin-bottom: 0;
    margin-right: auto;
    margin-top: 30px;
    display: contents;
  }
`;

const ProfileSection = styled.section`
 display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileName = styled.h1`
  font-size: 28px;
  margin: 0;
  color: #fff;
`;

const ProfileDescription = styled.p`
  font-size: 16px;
  color: #f2f2f2;
  margin: 10px 0;
`;

const SectionHeading = styled.h2`
  font-size: 24px;
  margin-top: 40px;
  color: #f2f2f2;
`;

const SectionContent = styled.div`
  margin-top: 20px;
`;

const Experience = styled.div`
  margin-bottom: 20px;

  p {
    font-size: 16px;
    color: #52ab98;
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 20px;
  margin: 0;
  color: #2d6777;
`;

const ExperienceDate = styled.p`
  font-size: 16px;
  color: #52ab98;
  margin: 5px 0;
`;

const ExperienceWrapper = styled.div`
  border: 1px solid #333;
  background-color: #f1f1f1;
  width: 100%;

  
  &:hover {
    background-color: #264143;
    > ${ExperienceTitle}, ${ExperienceDate},
  {
      color: #f2f2f2;
  }
`;

const ContactWrapper = styled.div`
border: 1px solid #333;
background-color: #f1f1f1;
width: 100%;
color: #52ab98;
&:hover {
    background-color: #264143;
  }
`;


const ExperienceDescription = styled.p`
  font-size: 16px;
  color: #52ab98;
  max-width: 500px;
  text-align: justify;
  margin: 15px auto;

  @media (max-width: 620px) {
   padding: 10px;
  }
`;


const Skill = styled.div`
  margin-bottom: 10px;
  
`;

const SkillName = styled.span`
  font-size: 16px;
  padding: 10px;
  color: #52ab98;
  

  @media (max-width: 620px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const SkillWrapper = styled.div`
  border: 1px solid #333;
  background-color: #f1f1f1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  &:hover {
    background-color: #264143;
  }


  @media (max-width: 620px) {
    flex-direction: column;
    align-items: center;
    ${SkillName} {
      flex-basis: calc(100% - 50px);
    }
  }
`;



const ContactSection = styled.section`
  margin-top: 40px;
`;

const LinkedInLink = styled.a`
  text-decoration: none;
  color: #52ab98;

  &:hover {
    color: #f2f2f2;
  }
`;


const Footer = styled.footer`
  padding-top: 40px;
  text-align: center;
  color: #fff
`;

const Portfolio = () => {
  return (
    <Container>
       <Navbar>
        <Logo href="/">My Portfolio</Logo>
        {/* <NavList>
          <NavItem><NavLink href="#experience">Experience</NavLink></NavItem>
          <NavItem><NavLink href="#education">Education</NavLink></NavItem>
          <NavItem><NavLink href="#skills">Skills</NavLink></NavItem>
          <NavItem><NavLink href="#contact">Contact</NavLink></NavItem>
        </NavList> */}
       </Navbar>

      <ProfileSection>
        <ProfileImage src={image} alt="Profile" />
        <ProfileInfo>
          <ProfileName>Arnav Rout</ProfileName>
          <ProfileDescription>Software Developer</ProfileDescription>
        </ProfileInfo>
      </ProfileSection>

      <SectionHeading id="experience">Experience</SectionHeading>
      <SectionContent>
        <Experience>
        <ExperienceWrapper>
          <ExperienceTitle>Software Engineer L1</ExperienceTitle>
          <ExperienceDate>Think Future Technologies : Feb 2022 - Present</ExperienceDate>
          <ExperienceDescription>I am a skilled frontend developer. With expertise in building interactive and responsive user interfaces, I
            strive to create engaging web experiences. I am proficient in HTML, CSS, and JavaScript, and have a strong
            understanding of modern frontend frameworks and libraries.
            </ExperienceDescription>
            </ExperienceWrapper>
        </Experience>
         <Experience>
         <ExperienceWrapper>
          <ExperienceTitle> Entry Level Android Developer (Internship)</ExperienceTitle>
          <ExperienceDate>Kohli Media LLP : Aug 2021 - Nov 2021</ExperienceDate>
          <ExperienceDescription>Built beautiful and user-friendly Android apps for our customers. Identified and resoled bottlenecks, rectified 
            bugs and enhanced application performance.</ExperienceDescription>
            </ExperienceWrapper>
        </Experience>
        {/* Add more experiences here */}
      </SectionContent>

      <SectionHeading id="education">Education</SectionHeading>
      <SectionContent>
        <Experience>
        <ExperienceWrapper>
          <ExperienceTitle>B.Tech in Computer Science</ExperienceTitle>
          <p>2018 - 2022</p>
          <p>CGPA: 7.8</p>
          <p>Jamia Hamdard</p>
          </ExperienceWrapper>
        </Experience>
        <Experience>
        <ExperienceWrapper>
          <ExperienceTitle>Senior Secondary (XII)</ExperienceTitle>
          <p>Year of completion: 2018</p>
          <p>Science (Physics, Chemistry, Mathematics)</p>
          <p>DAV Public School, sector 37 Faridabad</p>
          </ExperienceWrapper>
        </Experience>
        {/* Add more education here */}
      </SectionContent>

      <SectionHeading id="skills">Skills</SectionHeading>
      <SectionContent>
        <Skill>
        <SkillWrapper>
          <SkillName>HTML</SkillName>
          <SkillName>CSS</SkillName>
          <SkillName>JavaScript</SkillName>
          <SkillName>React</SkillName> 
          <SkillName>Typescript</SkillName>
          <SkillName>Angular</SkillName>
          <SkillName>SASS</SkillName>
          <SkillName>Bootstrap</SkillName>
          <SkillName>Git</SkillName>
          </SkillWrapper>
        </Skill>
        {/* Add more skills here */}
      </SectionContent>

      <ContactSection id="contact">
        <SectionHeading>Contact</SectionHeading>
        <ContactWrapper>
        <p>Contact no. 8368398111</p>
        <p>Email Id: arnav10rout@gmail.com</p>
        <p> 
            <LinkedInLink href="https://www.linkedin.com/in/arnavrout/" target="_blank">LinkedIn Profile</LinkedInLink>
          </p>
        </ContactWrapper>
      </ContactSection>

      <Footer>
        &copy; 2023 Arnav Rout
      </Footer>
    </Container>
  );
};

export default Portfolio;
