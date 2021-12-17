import "./App.css";
import Home from "./pages/Home";
import Item from "./pages/Item";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";
import ItemList from "./pages/ItemList";
import OrderSuccess from "./components/OrderSuccess";

function App() {
	return (
		<Router>
			<div className="app">
				<ToastContainer transition={Slide} />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/items/:category" exact element={<ItemList />} />
					<Route path="/item/:id" element={<Item />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/orderSuccess" element={<OrderSuccess />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
