
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Login from './Login/Login';
import ArmenMarTable from './ArmenMartirosyan/ArmenMarTable';
    

function App() { 

	return (
    
	<BrowserRouter>
	  <Routes>
        <Route path="/"  element={<Login />} />
		    <Route path="/ArmenMartirosyan" element={<ArmenMarTable />} />
      </Routes>
	</BrowserRouter>

	);
}


export default App;