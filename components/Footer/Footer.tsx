// Styled Components
import styled from "styled-components";

interface Props {}

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <p className="content">Made by Iceyy🔥</p>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
`;
