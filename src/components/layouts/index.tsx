import "scss/common.scss";
import React, { FC } from "react";
import { Helmet } from "react-helmet";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Helmet title="Gatsby Typescript Boilerplate" />
      {children}
    </>
  );
};

export default Layout;
