// Styled Components
import styled from "styled-components";

// Particles
import Particles from "react-particles-js";
import ParticleConfig from "./particle-config";

interface Props {}

const Background = (props: Props) => {
  //@ts-ignore
  return <Wrapper params={ParticleConfig} />;
};

export default Background;

const Wrapper = styled(Particles)`
  background: rgba(255, 255, 255, 0);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  opacity: 0.5;
`;
