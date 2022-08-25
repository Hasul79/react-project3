import React, { useState} from 'react';
import './Hasmiktable.css';
  

const initialValues = {
	userName: '',
	userSurname: '',
	userSalary: ''
}

function Hasmiktable(){
	const [userData, setUserData] = useState(initialValues);
	

	
	console.log('userData', userData)
	return (
  <div clssName="wrapper">
	<div className="wrapper-content">
	<div className="form-data">
                <form>
					<input placeholder=" Write your name" 
					onChange={(e) => setUserData((prevState) =>({
						...prevState,
						userName: e.target.value
					}))} />
					<input  placeholder="Write surname" 
					onChange={(e) => setUserData((prevState) =>({
						...prevState,
						userSurname: e.target.value
					}))} />
					<input  placeholder="Write salary"
					 onChange={(e) => setUserData((prevState) =>({
						...prevState,
						userSalart: e.target.value
					}))}/>
				
					<div classNmae="buttons-wrapper">
						<button type="reset">Clean</button>
						<button type="submit">Add</button>
					</div>
			  
			    </form>
			  

		    </div>

		<div className="table-data">
			<table>
				<th> # </th>
				<th> User Name </th>
				<th> User Surname </th>
				<th> User Salary </th>
				<th>Actions</th>

				<tbody>

				</tbody>

			</table>
		</div>
		    
	</div>

  </div>
  )
}
export default Hasmiktable;
