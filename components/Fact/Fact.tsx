// Styled Components
import styled from "styled-components";

interface Props {
  fact: string;
}

const Fact = (props: Props) => {
  return (
    <Wrapper>
      <p className="fact">{props.fact}</p>
    </Wrapper>
  );
};

export default Fact;

const Wrapper = styled.div`
  position: relative;

  .fact {
    font-size: 3rem;
    color: #fff;
    padding: 25px 10px;
  }
`;
