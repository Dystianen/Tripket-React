import React from "react";
import {Layout} from "antd";
import { AppRoute } from "../../routes/app";

const { Content } = Layout;

export const DesktopLayout = () => {
  return (
    <Layout>
      <Content
        className="site-layout"
        style={{ padding: 0, margin: 0}}
      >
        <div
          className="site-layout-background"
          style={{ padding: 0, minHeight: 380 }}
        >
          <AppRoute/>
        </div>
      </Content>
    </Layout>
  )
}
