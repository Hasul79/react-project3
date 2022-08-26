import React, { useState} from 'react';
import './Hasmiktable.css';
import profile from './image/njdeh2.jpg';

const initialValues = {
	userName: '',
	userSurname: '',
	userSalary: ''
}

function Hasmiktable(){
	const [userData, setUserData] = useState(initialValues);
	const [users, setUsers] = useState([]);

   const isFilledFields = userData.userName && userData.userSurname && userData.userSalary

	const handleSubmitUser = (e) => {
       e.preventDefault();

	if(isFilledFields) {
	    setUsers((prevState) => [...prevState, userData]);
	
		setUserData(initialValues)
	}  
	
	
}
	

	console.log('userData ', userData);

	return (
  <div className="wrapper">
	<div className="wrapper-content">
	   <div className="form-data">
	     <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
			 </div>


                <form onSubmit={handleSubmitUser}>
					<input placeholder=" Write your name" 
					onChange={(e) => setUserData((prevState) =>({
						...prevState,
						userName: e.target.value
					}))}
					value={userData.userName} 
					/>
					<input  placeholder="Write surname" 
					onChange={(e) => setUserData((prevState) =>({
						...prevState,
						userSurname: e.target.value
					}))} 
					value={userData.userSurname} 
					/>
					<input  placeholder="Write salary"
					 onChange={(e) => setUserData((prevState) =>({
						...prevState,
						userSalary: e.target.value
					}))}
					value={userData.userSalary} 
					/>
				
					<div classNmae="buttons-wrapper">
						<button type="reset">Clean</button>
						<button disabled={!isFilledFields}  type="submit">Add</button>
					</div>
			  
			    </form>
			  

		    </div>

		<div className="table-data">
			<table>
				{/* <th> <span>&#8592;</span>HOME</th> */}
				<th>#</th>
				<th> User Name </th>
				<th> User Surname </th>
				<th> User Salary </th>
				<th>Actions</th>

				<tbody>
                  {users.map((user, index) => (
					<tr>
					<td>{index + 1}</td>
					<td>{user.userName}</td>
					<td>{user.userSurname}</td>
					<td>{user.userSalary}</td>
					<td>
						<div>
							<button className="edit-action">edit</button>
							<button  className="remove-action">remove</button>
						</div>
					</td>
				</tr>
				  ))}
					

					 
				</tbody>

			</table>
		</div>
		    
	</div>

  </div>
  )
}
export default Hasmiktable;
