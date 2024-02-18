import styled from "styled-components";
import TitleComponent from "../TitleComponent";

const SubHeader = styled.div`
  font-size: 2rem;
  font-weight: bold;
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
    <div>
      <TitleComponent title="Need Help?" />
      <Form onSubmit={handleSubmit}>
        <SubHeader>Tell us how we can help.</SubHeader>
        <FormField>
          <Label htmlFor="reasonForContacting">Reason for contacting</Label>
          <select
            id="reasonForContacting"
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          >
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
    </div>
  );
};

export default HelpSupport;
