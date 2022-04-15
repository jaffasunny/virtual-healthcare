import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";

import "./App.css";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Header />
			<Body />
			<Footer />
		</div>
	);
}

export default App;
