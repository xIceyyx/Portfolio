// Styled Components
import styled from "styled-components";

// Material UI
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";

interface Props {}

const Form = (props: Props) => {
  return (
    <Wrapper>
      <p className="heading">Contact</p>
      <form action="https://formsubmit.co/jb7643565@gmail.com" method="POST">
        <TextField
          label="Name"
          type="text"
          variant="filled"
          className="name"
          name="name"
        />
        <TextField
          label="Email"
          type="email"
          className="email"
          variant="filled"
          name="email"
        />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={6}
          className="message"
          placeholder="Message"
          required
          name="message"
        />

        <Button className="button" type="submit">
          Submit
        </Button>
      </form>
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  height: max-content;
  width: 100%;
  font-size: 2rem;
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .heading {
    font-size: 2.5rem;
  }

  form {
    height: 100%;
    margin-top: 20px;
    position: relative;

    //
    width: 600px;
    @media only screen and (max-width: 650px) {
      width: 100%;
    }
    //

    .name {
      background-color: transparent;
      width: 100%;
      z-index: 10;
    }

    .email {
      background-color: transparent;
      width: 100%;
      margin-top: 25px;
      z-index: 10;
    }

    .message {
      background-color: transparent;
      width: 100%;
      z-index: 10;
      position: relative;
      resize: none;
      margin-top: 20px;
      padding: 12px;
      font-size: 1rem;
      background-color: rgba(0, 0, 0, 0.09);
      border-bottom: 1px solid #263238;
      border-radius: 3px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.12);
      }

      &:focus {
        border-radius: 3px;
        outline-color: #3f51b5;
      }

      &::placeholder {
        font-size: 1rem;
        font-weight: 400;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        width: min-content;
      }

      &-label {
        font-size: 1rem;
      }
    }

    fieldset {
      display: none;
    }

    .button {
      background-color: rgba(0, 0, 0, 0.09);
      z-index: 10;
      width: 250px;
      margin-top: 20px;
      font-size: 1.1rem;

      &:hover {
        background-color: rgba(0, 0, 0, 0.12);
      }
    }
  }
`;
