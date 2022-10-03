import React, { useState, useEffect } from 'react';
import './Hasmiktable.css';
import njdeh from './image/njdeh.jpg';
import kapan from './image/kapan.jpg';
import  prof from './image/a.jpg';
import { Link } from "react-router-dom";


const initialValues = {
	firstName: '',
	surName: '',
	age: '',
	salary: ''
}

function Hasmiktable(){



	// dark & light
	const [isClicked, setIsClicked] = useState(false); //click-ով բացի նկարներն
	const [userData, setUserData] = useState(initialValues);
	const [users, setUsers] = useState([]);
	const [editableUserData, setEditableUserData] = useState({
		isEdit: false,
		userIndex: null
	});

	useEffect(() => {
		fetch(`http://localhost:7777/users`)
		.then(response => response.json())
		.then(data => setUsers (data))
	},[])
	console.log(users)


	// dark & light
	const handleToggle = () => {
		setIsClicked(!isClicked);
	  };
//  table function
         // Remove button ----------
   const handleRemoveClick = (user) =>{
       setUsers(users.filter((user, userIndex) => userIndex !== user.id));
	   fetch(`http://localhost:7777/users/${user.id}` , {
		method : 'DELETE'
	   })
   }
	 //input - պ/է լրացված լինի բոլոր input որ ակտիվ լինի
	const isFilledFields = userData.firstName && userData.surName && userData.age &&  userData.salary
        
	     //Add button ------
	const handleSubmitUser = (e) => {
       e.preventDefault();

	if(isFilledFields) {  //input-ների դաշտերի  լրացված ստուգում
		if (editableUserData.isEdit) {  //առկա է, թե նոր  user անուն
			const editedData = users;
			editedData.splice(editableUserData.userIndex, 1, userData);
			
			setUsers(editedData); //տվյալների պահպանում և ավելացում

			setEditableUserData({
				isEdit: false,       //  user data տվյալների զրոյացում
				userIndex: null      //index զրոյացում

			})
     fetch(`http://localhost:7777/users/${editedData[editableUserData.userIndex].user.id}`, {
		method: 'PATCH',
		  body: JSON.stringify(userData)
	 })
		} else {
			fetch(`http://localhost:7777/users`, {
				method: 'POST',
			 	  body: JSON.stringify(userData)
			})
	        setUsers((prevState) => [...prevState, userData]);
		}
		// նախկին տվյալ + նոր user data
		setUserData(initialValues)
	}  
}
       //Clean button  -----------
 const handleCleanClick = () => setUserData(initialValues);

       //Edit button ---------
  const handleEditClick = (data, index) => {  //ֆունկցիա որն ընդունում է ընթացիկ user-ին և իր index-ը
	setUserData(data);
	setEditableUserData({
		isEdit: true,
		userIndex: index
	})
  }
	console.log('userData ', userData);



	return (

<div className="body">
<div> 
	   {
		  isClicked  ? <img className="nkar" src={njdeh} />  : <img className="nkar" src={kapan} />
		} 	
       
	   <button className="bg" onClick={handleToggle}>
		{
		  isClicked ? "Dark" : "Light" 
		}
		</button>
	 </div>
    
  <div className="wrapper">
  	<div className="wrapper-content">
	   <div className="form-data">
	   	  <div className="cont-image">
             <img src={prof} alt="prof" className="prof"/>
		  </div>
			 
                <form className="forma" onSubmit={handleSubmitUser} onReset={handleCleanClick}>
					<input className="input_name" placeholder=" Write your name" 
					onChange={(e) => setUserData((prevState) =>({
						...prevState,
						firstName: e.target.value
					}))}
					value={userData.firstName} 
					/>

					<input className="input_name" placeholder="Write surname" 
					onChange={(e) => setUserData((prevState) =>({
						...prevState,
						surName: e.target.value
					}))} 
					value={userData.surName} 
					/>

					<input className="input_name" placeholder="Write your age" 
					onChange={(e) => setUserData((prevState) =>({
						...prevState,
						age: e.target.value
					}))} 
					value={userData.age} 
					/>

					<input className="input_name"  placeholder="Write salary"
					 onChange={(e) => setUserData((prevState) =>({
						...prevState,
						salary: e.target.value
					}))}
					value={userData.salary} 
					/>
				
					<div className="buttons-wrapper">
					
						<button className="button_input" type="reset" >Clean</button>
						<button className="button_input" disabled={!isFilledFields}  type="submit" >{editableUserData.isEdit ? `Edit` : `Add` }</button>
					</div>
			  
			    </form>
			<Link to="/"><button className="home-btn">&#8592; Home</button></Link>
		</div>

		<div className="table-data">
			<table className="table">
				<th className="tha">#</th>
				<th className="thb"> User Name </th>
				<th className="thb"> User Surname </th>
				<th className="tha"> Age </th>
				<th className="thb"> User Salary </th>
				<th className="thb">Actions</th>

				<tbody>
                  {users.map((user) => (
				   <tr key={user.id}>
						<td className="tdt">{user.id }</td>
						<td className="td">{user.firstName}</td>
						<td className="td">{user.surName}</td>
						<td className="tda">{user.age}</td>
						<td className="td">{user.salary}</td>
						<td className="td">
							<div className='td-btn' >
								<button className="edit-action button" onClick ={() => handleEditClick(user, user.id)}>Edit</button>
								<button  className="remove-action button" onClick={() => handleRemoveClick(user.id)}>Delete</button>
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

