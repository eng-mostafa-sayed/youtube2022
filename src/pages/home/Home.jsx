import { Fragment } from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/featuredProperties";
import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/propertyList";
import MailList from "../../components/mailList/mailList";
import "./Home.css";
import Footer from "../../components/footer/footer";
function Home() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guetst love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </Fragment>
  );
}

export default Home;
