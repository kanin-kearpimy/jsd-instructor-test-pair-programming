import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 26.875rem;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #dddddd;
  padding: 4rem 2rem 10rem;

  @media (min-width: 640px) {
    max-width: none;
    margin: 0 auto;
    padding-bottom: 10rem;
    /* padding: 4rem 3.5rem 10rem; */
  }

  @media (min-width: 1280px) {
    max-width: 80rem;
    margin: 0 auto;
    padding-bottom: 2rem;
  }
`;

const SectionWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.section`
  border-radius: 10px;
  background: #ffffff;
  padding: 2rem 1rem;

  @media (min-width: 1280px) {
    display: flex;
    gap: 8rem;
    padding: 2rem;
  }
`;

export { Wrapper, SectionWrapper, ContentWrapper };
