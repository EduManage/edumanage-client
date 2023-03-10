import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { ProSidebarProvider } from "react-pro-sidebar";
import UserContext from "./UserContext/UserContext";
import {
  QueryClient, QueryClientProvider
} from '@tanstack/react-query'

AOS.init();
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProSidebarProvider>

      <QueryClientProvider client={queryClient}>
        <UserContext>
            <App />
        </UserContext>
      </QueryClientProvider>

    </ProSidebarProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
