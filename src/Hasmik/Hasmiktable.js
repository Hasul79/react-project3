import React, { useState} from 'react';
import './Hasmiktable.css';
import profile from './image/njdeh2.jpg';

const initialValues = {
	userName: '',
	userSurname: '',
	userAge: '',
	userSalary: ''
}

function Hasmiktable(){
	const [userData, setUserData] = useState(initialValues);
	const [users, setUsers] = useState([]);
	const [editableUserData, setEditableUserData] = useState({
		isEdit: false,
		userIndex: null
	});

   const handleRemoveClick = (index) =>{
       setUsers(users.filter((user, userIndex) => userIndex !== index));
   }
	
	const isFilledFields = userData.userName && userData.userSurname && userData.userAge &&  userData.userSalary

	const handleSubmitUser = (e) => {
       e.preventDefault();

	if(isFilledFields) {
		if (editableUserData.isEdit) {
			const editedData = users;
			editedData.splice(editableUserData.userIndex, 1, userData);
			
			setUsers(editedData);

			setEditableUserData({
				isEdit: false,
				userIndex: null
			})
		} else {
	        setUsers((prevState) => [...prevState, userData]);
		}
		
		setUserData(initialValues)
	}  
}
	
 const handleCleanClick = () => setUserData(initialValues);

  const handleEditClick = (data, index) => {
	setUserData(data);
	setEditableUserData({
		isEdit: true,
		userIndex: index
	})
  }
	console.log('userData ', userData);

	return (
<div className="body">
  <div className="wrapper">
	<div className="wrapper-content">
	   <div className="form-data">
	     <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
			 </div>


                <form className="forma" onSubmit={handleSubmitUser} onReset={handleCleanClick}>
					<input className="input_name" placeholder=" Write your name" 
					onChange={(e) => setUserData((prevState) =>({
						...prevState,
						userName: e.target.value
					}))}
					value={userData.userName} 
					/>

					<input className="input_name" placeholder="Write surname" 
					onChange={(e) => setUserData((prevState) =>({
						...prevState,
						userSurname: e.target.value
					}))} 
					value={userData.userSurname} 
					/>

					<input className="input_name" placeholder="Write age" 
					onChange={(e) => setUserData((prevState) =>({
						...prevState,
						userAge: e.target.value
					}))} 
					value={userData.userAge} 
					/>

					<input className="input_name"  placeholder="Write salary"
					 onChange={(e) => setUserData((prevState) =>({
						...prevState,
						userSalary: e.target.value
					}))}
					value={userData.userSalary} 
					/>
				
					<div classNmae="buttons-wrapper">
						<button className="button_input" type="reset" >Clean</button>
						<button className="button_input" disabled={!isFilledFields}  type="submit" >{editableUserData.isEdit ? `Edit` : `Add` }</button>
					</div>
			  
			    </form>
			  
		     </div>

		<div className="table-data">
			<table className="table">
				{/* <th> <span>&#8592;</span>HOME</th> */}
				<th className="tht">#</th>
				<th className="th"> User Name </th>
				<th className="th"> User Surname </th>
				<th className="tha"> Age </th>
				<th className="th"> User Salary </th>
				<th className="th">Actions</th>

				<tbody>
                  {users.map((user, index) => (
					<tr>
					<td className="tdt">{index + 1}</td>
					<td className="td">{user.userName}</td>
					<td className="td">{user.userSurname}</td>
					<td className="td">{user.userAge}</td>
					<td className="td">{user.userSalary}</td>
					<td className="td">
						<div className='td-btn' >
							<button className="edit-action button" onClick ={() => handleEditClick(user, index)}>Edit</button>
							<button  className="remove-action button" onClick={() => handleRemoveClick(index)}>Delete</button>
						</div>
					</td>
				</tr>
				  ))}
					

					 
				</tbody>

			</table>
		</div>
		    
	</div>

  </div>
</div>  
  )
}
export default Hasmiktable;

