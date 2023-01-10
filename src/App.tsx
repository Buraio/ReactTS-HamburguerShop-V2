import { ToastContainer } from "react-toastify";
import RoutesMain from "./routes";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <RoutesMain />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
}

export default App;
