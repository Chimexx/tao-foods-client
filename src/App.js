import "./App.css";
import Home from "./pages/Home";
import Item from "./pages/Item";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ItemList from "./pages/ItemList";
import OrderSuccess from "./components/OrderSuccess";
import Snackbar from "./components/SnackBar/snackbar";

function App() {
	return (
		<Router>
			<div className="app">
				<Snackbar />
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
