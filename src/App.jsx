import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import { Contact } from "./pages/Contact";
import Cart from "./pages/cart/Cart";
import Productdetails from "./pages/productDetails/Productdetails";
import { ShopContextProvider } from "./context/Shopcontext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Productdetails />} />
          </Routes>
          <footer>
            <p>Created by Sai Chakri</p>
            <a href="https://github.com/SaiChakri-d/kmd-task-react">
              <img
                className="github-logo"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub logo"
              />
            </a>
          </footer>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
