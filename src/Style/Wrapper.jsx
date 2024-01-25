import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 26.875rem;
  min-height: 100vh;
  height: 100%;
  background: #dddddd;
  padding: 4rem 2rem 0;
`;

const SectionWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.section`
  border-radius: 10px;
  background: #ffffff;
  padding: 2rem 1rem;
`;

export { Wrapper, SectionWrapper, ContentWrapper };
