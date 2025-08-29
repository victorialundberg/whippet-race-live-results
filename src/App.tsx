import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router";
import { GlobalStyle } from "./styles/styled_components/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
