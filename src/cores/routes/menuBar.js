import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { Strings } from "../locals/index";

const { Header, Content } = Layout;

const MenuBar = ({ children }) => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[`1`]}>
          <Link to="/">
            <Menu.Item key="1">{Strings.getString("menubar1")}</Menu.Item>
          </Link>
          {/* <Link to="/vaccineRegister"> */}
          <a href="/vaccineRegister">
            <Menu.Item key="2">{Strings.getString("menubar2")}</Menu.Item>
          </a>
          {/* </Link> */}
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64, height: 0 }}
      >
        {children}
        {/* {page === "Covid19VaccineRegister" && <Covid19VaccineRegister />} */}
      </Content>
    </Layout>
  );
};
export default MenuBar;
