// Styled Components
import styled from "styled-components";

interface Props {}

const Nav = (props: Props) => {
  return (
    <Wrapper>
      <div className="content">
        <p className="name">Iceyy</p>
      </div>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  height: min-content;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;

    .name {
      text-align: center;
      padding: 25px;
      padding-bottom: 0px;
      font-size: 2.75rem;
    }
  }
`;
