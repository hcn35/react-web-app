import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Button, Result } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./AppLayout";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";
import Investments from "./pages/Investments";
import Credit from "./pages/Credit";
import Trends from "./pages/Trends";
import Goals from "./pages/Goals";
import Bills from "./pages/Bills";
import Budgets from "./pages/Budgets";
import Progress from "./pages/Progress";
import Schedule from "./pages/Schedule";
import Classes from "./pages/Classes";
import Quizzes from "./pages/Quizzes";
import Resources from "./pages/Resources";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              path="/"
              index={true}
              element={<Navigate to="transactions" replace={true} />}
            />
            <Route path="transactions" element={<Transactions />} />
            <Route path="bills" element={<Bills />} />
            <Route path="budgets" element={<Budgets />} />
            <Route path="credit" element={<Credit />} />
            <Route path="goals" element={<Goals />} />
            <Route path="investments" element={<Investments />} />
            <Route path="trends" element={<Trends />} />
            <Route path="progress" element={<Progress />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="classes" element={<Classes />} />
            <Route path="quizzes" element={<Quizzes />} />
            <Route path="resources" element={<Resources />} />
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
    </QueryClientProvider>
  );
}
