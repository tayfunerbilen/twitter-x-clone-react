import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import routes from "./routes";
import './assets/css/tailwind.css'
import {Provider} from "react-redux";
import store from "~/store";

ReactDOM.createRoot(document.getElementById('tayfun')).render(
  <Provider store={store}>
		<RouterProvider router={routes} />
	</Provider>
)
