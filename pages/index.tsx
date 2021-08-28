// React
import { Fragment } from "react";

// Next
import type { NextPage } from "next";
import Head from "next/head";

// Components
import Background from "../components/Background/Background";
import Nav from "../components/Nav/Nav";
import Fact from "../components/Fact/Fact";
import Info from "../components/Info/Info";
import Projects from "../components/Projects/Projects";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Iceyy | Frontend Development</title>
      </Head>
      <Background />
      <Nav />
      <Fact fact={""} />
      <Info />
      <Fact fact={""} />
      <Projects />
      <Fact fact={""} />
      <Form />
      <Fact fact={""} />
      <Footer />
    </Fragment>
  );
};

export default Home;
