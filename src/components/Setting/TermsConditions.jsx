import React from "react";
import styled from "styled-components";
import TitleComponent from "../TitleComponent";
import { ContentWrapper, SectionWrapper } from "../../Style/Wrapper";

const TermsConditions = () => {
  return (
    <SectionWrapper>
      <TitleComponent title="Terms" />
      <ContentWrapper>
        <div className="ml-4">
          <h3 className="font-bold">LunarFit Terms and Conditions</h3>
          <p>Effective as of: February 08, 2024</p>
          <br />
          <p>
            {" "}
            Welcome to LunarFit, the exercise tracking web application. Before
            you start using our services, please read these terms and conditions
            carefully. By using our web application, you agree to be bound by
            the following terms and conditions:
          </p>
          <br />
          <ol className="list-decimal">
            <li>
              Use of the Application: LunarFit is intended for personal use
              only. Commercial use of the application is prohibited without
              prior written consent from LunarFit.
            </li>
            <li>
              Accuracy of Information: While LunarFit strives to provide
              accurate and up-to-date information, we do not guarantee the
              accuracy, reliability, or completeness of any information on the
              application. The use of any information is at your own risk.
            </li>
            <li>
              User Responsibilities: Users are responsible for maintaining the
              confidentiality of their accounts and passwords. Users agree to
              notify LunarFit immediately of any unauthorized use of their
              accounts.
            </li>
            <li>
              Data Privacy: LunarFit is committed to protecting user privacy and
              personal information. By using our application, users consent to
              the collection, use, and sharing of their data as outlined in our
              Privacy Policy.
            </li>
            <li>
              Prohibited Activities: Users agree not to engage in any activities
              that may disrupt or interfere with the proper functioning of
              LunarFit, including but not limited to hacking, spamming, or
              distributing malware.
            </li>
            <li>
              Intellectual Property: All content and materials available on
              LunarFit, including text, graphics, logos, and images, are the
              property of LunarFit and are protected by copyright and other
              intellectual property laws.
            </li>
            <li>
              Disclaimer of Warranties: The use of LunarFit is at your own risk.
              LunarFit does not warrant that the application will be
              uninterrupted or error-free and does not make any warranties
              regarding the accuracy or reliability of the results that may be
              obtained from the use of the application.
            </li>
            <li>
              Limitation of Liability: In no event shall LunarFit be liable for
              any direct, indirect, incidental, special, or consequential
              damages arising out of or in any way connected with the use of the
              application.
            </li>
          </ol>
          <br />
          <p>
            By using LunarFit, you acknowledge that you have read and understood
            these terms and conditions and agree to be bound by them. If you do
            not agree with any of these terms, please do not use LunarFit.
          </p>
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default TermsConditions;
