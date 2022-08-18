import React, {Component} from 'react';


export default class Register extends Component {
    render () {
       return (
		   <form>
               <h3>Sing Up</h3>
                      {/*  First name */}
			   <div className="form-group">
				    <label>First Name</label>
					<input type="text" className="form-control" placeholder='First Name'></input>
			   </div>
                        {/* Last Name */}
			   <div className="form-group">
				    <label>Last Name</label>
					<input type="text" className="form-control" placeholder='Last Name'></input>
			   </div>

			           {/* Email */}
			   <div className="form-group">
				    <label>Email</label>
					<input type="email" className="form-control" placeholder='Email'></input>
			   </div>

			          {/* Password */}
					  <div className="form-group">
				    <label>Password</label>
					<input type="password" className="form-control" placeholder='Password'></input>
			   </div>

			   {/* Password հաստատել */}
			   <div className="form-group">
				    <label>Confirm Password</label>
					<input type="password" className="form-control" placeholder='Confirm Password'></input>
			   </div>
		   </form>
	   )
 }
}