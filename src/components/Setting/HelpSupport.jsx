import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TitleComponent from "../TitleComponent";
import { ContentWrapper, SectionWrapper } from "../../Style/Wrapper";

// Styled components
const HelpSupportContainer = styled.div`
  font-family: "Arial", sans-serif;
  background: #f7f7f7;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const SubHeader = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 100px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  background-color: #ecf229; 
  color: #333;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #d4c221;
  }
`;

//Component
const HelpSupport = () => {
 
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here we would handle the form submission
  };

  return (
    <HelpSupportContainer>
      <TitleComponent title="Need Help?" />
      <SubHeader>Tell us how we can help.</SubHeader>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="reasonForContacting">Reason for contacting</Label>
          <select id="reasonForContacting" required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}>
            <option value="">--None--</option>
            <option value="account_login">Account & Login</option>
            <option value="policies">Lunafit Policies</option>
            <option value="platform_issues">Platform issues & access</option>
          </select>
        </FormField>
        <FormField>
          <Label htmlFor="subject">Subject</Label>
          <Input type="text" id="subject" required />
        </FormField>
        <FormField>
          <Label htmlFor="description">Description of issue</Label>
          <TextArea id="description" required></TextArea>
        </FormField>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </HelpSupportContainer>
  );
};

export default HelpSupport;
