import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Button, Result } from "antd";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./AppLayout";
import Workspace from "./pages/Workspace";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              path="/"
              index={true}
              element={<Navigate to="workspace" replace={true} />}
            />
            <Route path="workspace" element={<Workspace />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route
            path="*"
            element={
              <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
