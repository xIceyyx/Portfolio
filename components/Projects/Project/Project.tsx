// Styled Components
import styled from "styled-components";

interface Props {
  repoLink: string;
  projectLink: string;
  readmeLink: string;
  image: string;
}

const Project = (props: Props) => {
  return (
    <Wrapper>
      <a
        href={props.projectLink}
        target="_blank"
        className="project-link"
        rel="noreferrer"
      >
        <img src="./images/eye.svg" alt="eye image" className="eye-img" />
        <img src={props.image} alt="project image" className="project-img" />
      </a>

      <a
        href={props.repoLink}
        target="_blank"
        className="github-link"
        rel="noreferrer"
      >
        <img src={props.readmeLink} alt="github image" className="github-img" />
      </a>
    </Wrapper>
  );
};

export default Project;

const Wrapper = styled.div`
  margin: 10px;
  margin-top: 0px;
  height: min-content;
  width: min-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    //
    width: 400px;
    @media only screen and (max-width: 450px) {
      width: 350px;
    }

    object-fit: cover;
    //
  }

  .project-link {
    position: relative;
    transition: all 0.25s;
    margin-bottom: 5px;
    height: min-content;
    height: 235px;
    z-index: 1000;

    &:hover {
      .eye-img {
        opacity: 1;
      }
    }

    .project-img {
      height: 100%;
    }

    .eye-img {
      transition: all 0.25s;
      background-color: rgba(0, 0, 0, 0.25);
      opacity: 0;
      position: absolute;
      z-index: 100;
      height: 100%;
      width: 100%;
    }
  }

  .github-link {
    z-index: 1000;
  }
`;
