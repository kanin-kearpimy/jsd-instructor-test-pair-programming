import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TitleComponent from "../TitleComponent";
import { SectionWrapper } from "../../Style/Wrapper";

const teamDetail = [
  {
    img: "https://placehold.co/302x210",
    name: "Chanawin Kamolpanus",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eveniet, voluptatibus quibusdam ducimus maiores assumenda neque officiis quo facere",
  },
  {
    img: "https://placehold.co/302x210",
    name: "Karin Sukchai",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eveniet, voluptatibus quibusdam ducimus maiores assumenda neque officiis quo facere",
  },
  {
    img: "https://placehold.co/302x210",
    name: "Supavida Itthirak",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eveniet, voluptatibus quibusdam ducimus maiores assumenda neque officiis quo facere",
  },
  {
    img: "https://placehold.co/302x210",
    name: "Sathaphon Wutthipanyasakul",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eveniet, voluptatibus quibusdam ducimus maiores assumenda neque officiis quo facere",
  },
];

const AboutUs = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <SectionWrapper>
      <TitleComponent title="About us" />
      <ContentSection>
        <img
          src="/assets/images/team-work-illustator.svg"
          alt="Team Work Illustator"
        />
        <h3 className="text-center font-bold text-3xl">
          🚀 Welcome to LunarFit! 🌙
        </h3>
        <ContentDescription>
          <p>
            Greetings from Americano Shepherd Team, Cohort 6 of the Junior
            Software Developer Bootcamps! We're thrilled to present our
            exceptional app, LunarFit. More than just an app, LunarFit is your
            adventurous partner in fitness. Designed with innovation, fun, and
            passion, it's set to transform your workout experience.
          </p>
          <p>
            We eagerly await your feedback! Share your thoughts, experiences,
            and ideas. Your insights are invaluable, steering us towards new
            frontiers and ensuring LunarFit not only meets but surpasses your
            expectations.
          </p>
          <p>
            Thank you for embarking on this journey with us. Your extraordinary
            fitness adventure begins now!
          </p>
          <p className="font-bold">Let's work out to the moon! 🚀💪</p>
        </ContentDescription>
      </ContentSection>
      <TeamSection>
        <h3>Our Team</h3>
        <TeamMember>
          {teamDetail.map((member, index) => (
            <TeamCard key={index}>
              <TeamImage>
                <img src={member.img} alt="" />
              </TeamImage>
              <TeamInfo>
                <TeamName>
                  <h4>{member.name}</h4>
                </TeamName>
                <TeamDesc>
                  <p>{member.description}</p>
                </TeamDesc>
              </TeamInfo>
            </TeamCard>
          ))}
        </TeamMember>
      </TeamSection>
      {showButton && (
        <BackToTop onClick={scrollToTop}>
          <img src="/assets/images/icon/Arrow_top.svg" alt="Arrow button" />
        </BackToTop>
      )}
    </SectionWrapper>
  );
};

const ContentSection = styled.section`
  background-color: #ffffff;
  margin-inline: -2rem;
`;

const ContentDescription = styled.div`
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;
const TeamSection = styled.section`
  border-radius: 5px;
  margin-block: 2.5rem 4rem;

  & h3 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 18.875rem;
  border: 1px solid #000000;
  border-radius: 28px;
  overflow: hidden;
`;

const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const TeamImage = styled.div`
  border-radius: 50%;
`;

const TeamInfo = styled.div`
  background: #ecf229;
  padding: 1rem;
`;

const TeamName = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
`;

const TeamDesc = styled.div`
  color: #666;
`;

const BackToTop = styled.button`
  position: fixed;
  right: 1.25rem;
  bottom: 4rem;
  z-index: 99999;
`;
export default AboutUs;
