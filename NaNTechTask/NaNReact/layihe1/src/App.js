import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import Nav from "./Pages/Nav.js";
import About from "./Pages/About.js";
import AddPost from "./Pages/AddPost.js";
import Auto from "./Components/Auto.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="AddPost" element={<AddPost />} />
          {/* <Route path="Auto" element={<Auto />} /> */}
          <Route path="Auto/:id" element={<Auto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

