import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { Root, Content, presets } from "mui-layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JokeContainer from "./containers/JokeContainer";

const baseTheme = createMuiTheme({
});
const config = presets.createStandardLayout({
  navWidth: 0
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Root config={config}>
        <Header />
        <Content>
          <JokeContainer />
        </Content>
        <Footer />
      </Root>
    </ThemeProvider>
  );
};

export default App;
