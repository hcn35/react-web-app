import {
  LaptopOutlined,
  DashboardOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(
    <NavLink
      to="/workspace"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      Workspace
    </NavLink>,
    "1",
    <LaptopOutlined />
  ),
  getItem(
    <NavLink
      to="/analytics"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      Analytics
    </NavLink>,
    "2",
    <DashboardOutlined />
  ),
  getItem(
    <NavLink
      to="/settings"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      Settings
    </NavLink>,
    "3",
    <SettingOutlined />
  ),
];

function getBreadcrumb(pathName) {
  switch (pathName) {
    case "/workspace":
      return "Workspace";
    case "/analytics":
      return "Analytics";
    case "/settings":
      return "Settings";
    default:
      return "";
  }
}

export default function AppLayout() {
  let location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 16px",
            }}
            items={[{ title: getBreadcrumb(location.pathname) }]}
          />
        </Header>
        <Content>
          <div
            style={{
              padding: 16,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            background: colorBgContainer,
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
