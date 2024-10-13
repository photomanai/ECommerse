import { useState } from "react";
import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import DrawerComponent from "./components/DrawerComponent";

function App() {
  return (
    <>
      <div>
        <PageContainer>
          <Header />
          <RouterConfig />
          <Loading />
          <DrawerComponent />
        </PageContainer>
      </div>
    </>
  );
}

export default App;
