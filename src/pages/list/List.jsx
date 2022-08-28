import React, { Fragment } from "react";
import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";

export const List = () => {
  return (
    <Fragment>
      <Navbar />
      <Header type="list" />
    </Fragment>
  );
};
