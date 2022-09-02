import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/hotels" exact="true" element={<List />} />
        <Route path="/hotels/:id" exact="true" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
