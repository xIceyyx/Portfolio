// Styled Components
import styled from "styled-components";

interface Props {}

const Info = (props: Props) => {
  return (
    <Wrapper>
      <div className="content">
        <div className="section-1">
          <p className="section-1__heading">Hi!</p>
          <p className="section-1__main">
            I&apos;m Iceyy, Front End developer from{" "}
            <img src="./images/flag.jpg" width="20px" /> England that is open to
            learning new things!
          </p>

          <p className="section-1__current">
            Currently working with HTML, CSS, JavaScript, TypeScript, React,
            Next.js, Redux, Framer Motion, Styled Components, Material UI,
            Git/Github!
          </p>
        </div>

        <div className="section-2">
          <ul className="section-2__main">
            <li>
              <img src="./images/html.svg" alt="HTML" />
            </li>
            <li>
              <img src="./images/css.svg" alt="CSS" />
            </li>
            <li>
              <img src="./images/javascript.svg" alt="JavaScript" />
            </li>
            <li>
              <img src="./images/typescript.svg" alt="TypeScript" />
            </li>
            <li>
              <img src="./images/react.svg" alt="React" />
            </li>
            <li>
              <img src="./images/nextjs.svg" alt="Next" />
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Info;

const Wrapper = styled.section`
  //
  height: 300px;
  @media only screen and (max-width: 1000px) {
    height: 425px;
  }
  //

  width: 100%;
  background-color: #fff;

  .content {
    //
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (max-width: 1000px) {
      flex-direction: column;
    }
    //

    height: 100%;
    padding: 0 10px;

    .section-1 {
      &__heading {
        font-size: 2.25rem;
      }

      &__main {
        //
        width: 400px;
        @media only screen and (max-width: 600px) {
          width: 350px;
        }
        //

        padding-top: 15px;
        font-size: 1.1rem;
      }

      &__current {
        //
        width: 400px;
        @media only screen and (max-width: 600px) {
          width: 350px;
        }
        //

        padding-top: 10px;
        font-size: 1.1rem;
      }
    }

    .section-2 {
      &__main {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-between;
        gap: 25px;

        //
        width: 400px;
        @media only screen and (max-width: 410px) {
          width: 375px;
        }
        //

        font-size: 1.2rem;

        li {
          list-style-type: none;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            //
            width: 60px;
            @media only screen and (max-width: 1000px) {
              width: 50px;
            }
            //
          }
        }
      }
    }
  }
`;
