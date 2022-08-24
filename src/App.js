
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Login from './Login/Login';
import ArmenMarTable from './ArmenMartirosyan/ArmenMarTable';
import Table from "./Armengh/Table";
import Hasmiktable from './Hasmik/Hasmiktable';




    

function App() { 

	return (
    
	<BrowserRouter>
	  <Routes>
        <Route path="/"  element={<Login />} />
		    <Route path="/ArmenMartirosyan" element={<ArmenMarTable />} />
			<Route path="/Armengh" element={<Table />} />
			{/* <Route path="/Bella"   element={< />} /> */}
			<Route path="/Hasmik"  element={< Hasmiktable/>} />
			{/* <Route path="/Slava"   element={< />} /> */}
      </Routes>
	</BrowserRouter>

	);
}


export default App;