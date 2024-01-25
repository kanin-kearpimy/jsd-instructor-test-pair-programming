import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Theme from "./Theme";
import TitleComponent from "../TitleComponent";
import Nav from "../Nav";
import { SectionWrapper, ContentWrapper } from "../../Style/Wrapper";

const Setting = () => {
  return (
    <SectionWrapper>
      <TitleComponent title="Setting" />
      <ContentWrapper>
        <SectionHeader>General</SectionHeader>
        <Theme />
        <ButtonLink to="/account">
          Account{" "}
          <img
            src="/src/assets/images/icon/forward-icon.svg"
            alt="forward-icon"
          />
        </ButtonLink>
        <SectionHeader>Other</SectionHeader>
        <ButtonLink to="/support">
          Help & Support{" "}
          <img
            src="/src/assets/images/icon/forward-icon.svg"
            alt="forward-icon"
          />
        </ButtonLink>
        <ButtonLink to="/terms">
          Terms & Conditions{" "}
          <img
            src="/src/assets/images/icon/forward-icon.svg"
            alt="forward-icon"
          />
        </ButtonLink>
        <ButtonLink to="/feedback">
          Send Feedback{" "}
          <img
            src="/src/assets/images/icon/forward-icon.svg"
            alt="forward-icon"
          />
        </ButtonLink>
        <ButtonLink to="/aboutus">
          About Us{" "}
          <img
            src="/src/assets/images/icon/forward-icon.svg"
            alt="forward-icon"
          />
        </ButtonLink>
      </ContentWrapper>
      <SignOutButton
        onClick={() => {
          /* Sign out logic: We haven't still decided yet */
        }}
      >
        <img
          src="/src/assets/images/icon/signout-icon.svg"
          alt="signout-icon"
        />
        Sign Out
      </SignOutButton>
      <Nav />
    </SectionWrapper>
  );
};

const SectionHeader = styled.h2`
  color: #333;
  font-family: "Roboto", "san-serif";
  font-size: 2rem;
  font-weight: bold;
  padding: 5px 0;
`;

const ButtonLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  color: #000;
  background: #fff;
  text-decoration: none;
  border: 1px solid #000;
  border-radius: 5px;
  margin-block: 1rem;
  padding: 10px 15px;
  &:hover {
    background: #e7e7e7;
  }
`;

const SignOutButton = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  color: #151718;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border: 2px solid #151718;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin-top: 20px;

  &:hover {
    background: #555;
  }
`;

export default Setting;
