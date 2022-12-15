import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import GlobalStyles from "./styles/global";

function App() {

  return (
    <div className="App">
      <GlobalStyles />

      <LoginPage />
        
    </div>
  );
}

export default App;
