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
    font-size: 2.5rem;
    padding: 25px 10px;
    text-align: center;
  }
`;
