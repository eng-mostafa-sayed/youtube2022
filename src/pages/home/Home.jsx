import { Fragment } from "react";
import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import "./Home.css";
function Home() {
  return (
    <Fragment>
      <Navbar />
      <Header />
    </Fragment>
  );
}

export default Home;
