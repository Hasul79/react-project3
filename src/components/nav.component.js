import React, {Component} from 'react';
import {Link} from "react-router-dom";


export  default  class Nav extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand navbar-light fixed-top">
               <div className="container">
                   <Link className="navbar-brand" to={'/'}> Գլխավոր էջ </Link>
                <div className="collapse navbar-collapse">
                   <ul className="navbar-nav ml-auto">
                     <li className="nav-item">
                        <Link to={'/login'}  className="nav-link" > Մուտք </Link>
                     </li>
                     <li className="nav-item">
                       <Link to={'/register'} className="nav-link" > Գրանցվել </Link>
                     </li>
                  </ul>
               </div>
             </div>
        </nav>
		);
	};
};