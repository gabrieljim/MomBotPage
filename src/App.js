import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import About from "./screens/About";
import Commands from "./screens/Commands";

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Router>
					<Route path="/" component={Navbar} />
					<div className="container">
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/about" component={About} />
							<Route path="/commands" component={Commands} />
						</Switch>
					</div>
				</Router>
			</ThemeProvider>
		</div>
	);
}

export default App;
