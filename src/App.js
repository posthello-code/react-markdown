import "./App.css";
import { NavBar } from "./NavBar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Grommet } from "grommet";
import Home from "./content/Home";
import Error from "./content/Error";

function Layout() {
  return (
    <>
      <Grommet id="grommet" align="center">
        {/* NavBar component currently hidden */}
        <NavBar />
      </Grommet>
      {/* Render the content for current page based on Browser router state below*/}
      <Outlet></Outlet>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
