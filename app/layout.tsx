import "@styles/global.css";
import React from "react";
import { Metadata } from "next";

import Nav from "@components/Nav";
import Provider from "@components/Provider"

export const metadata: Metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;