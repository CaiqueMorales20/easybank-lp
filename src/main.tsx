// Imports
import React from "react";
import ReactDOM from "react-dom/client";

// Styles
import { GlobalStyle } from "./global/GlobalStyle.tsx";

// App
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>
);
