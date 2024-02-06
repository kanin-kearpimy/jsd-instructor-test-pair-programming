import React from "react";
import { MediumTitle, PageTitleWrapper } from "../Style/TitleStyles";
import { BackButton } from "../Style/ButtonStyles";
const TitleComponent = ({ title }) => {
  return (
    <PageTitleWrapper>
      {(title === "Account" ||
        title === "Help" ||
        title === "Terms" ||
        title === "Feedback" ||
        title === "About us") && (
        <BackButton to="/setting" className="flex-none">
          <img src="/assets/images/icon/back-icon.svg" alt="" />
        </BackButton>
      )}
      <MediumTitle>{title}</MediumTitle>
    </PageTitleWrapper>
  );
};

export default TitleComponent;
