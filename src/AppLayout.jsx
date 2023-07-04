import {
  LaptopOutlined,
  ReadOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
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
  getItem("Workspace", "1", <LaptopOutlined />, [
    getItem(
      <NavLink
        to="/transactions"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Transactions
      </NavLink>,
      "2"
    ),
    getItem(
      <NavLink
        to="/budgets"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Budgets
      </NavLink>,
      "3"
    ),
    getItem(
      <NavLink
        to="/bills"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Bills
      </NavLink>,
      "4"
    ),
    getItem(
      <NavLink
        to="/goals"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Goals
      </NavLink>,
      "5"
    ),
    getItem(
      <NavLink
        to="/credit"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Credit Score
      </NavLink>,
      "6"
    ),
    getItem(
      <NavLink
        to="/investments"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Investments
      </NavLink>,
      "7"
    ),
    getItem(
      <NavLink
        to="/trends"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Trends
      </NavLink>,
      "8"
    ),
  ]),
  getItem("Learning", "9", <ReadOutlined />, [
    getItem(
      <NavLink
        to="/progress"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Progress
      </NavLink>,
      "10"
    ),
    getItem(
      <NavLink
        to="/schedule"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Schedule
      </NavLink>,
      "11"
    ),
    getItem(
      <NavLink
        to="/classes"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Classess
      </NavLink>,
      "12"
    ),
    getItem(
      <NavLink
        to="/quizzes"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Quizzes
      </NavLink>,
      "13"
    ),
    getItem(
      <NavLink
        to="/resources"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Resources
      </NavLink>,
      "14"
    ),
  ]),

  getItem(
    <NavLink
      to="/settings"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      Settings
    </NavLink>,
    "15",
    <SettingOutlined />
  ),
];

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [defaultOpenKeys, setDefaultOpenKeys] = useState(["1"]);
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState(["2"]);
  function handleOnSelect({ key }) {
    setDefaultSelectedKeys([key]);
  }

  function handleOnOpenChange(openKeys) {
    setDefaultOpenKeys(openKeys);
  }
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
          mode="inline"
          items={items}
          openKeys={defaultOpenKeys}
          selectedKeys={defaultSelectedKeys}
          onOpenChange={handleOnOpenChange}
          onSelect={handleOnSelect}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        ></Header>
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
