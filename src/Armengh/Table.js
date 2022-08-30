import React, { useState } from 'react';
import "./Table.css";


const initialValues = {
  userName:'',
  userSurname:'',
  userSalary:''
}


function Table() {
  const [userData, setUserData] = useState(initialValues);
  const [users, setUsers] = useState([])
  const [editableUserData, setEditableUserData] = useState({
    isEdit: false,
    userIndex: null
  })

  const handleRemoveClick = (index) => {
    setUsers(users.filter((user,userIndex) => userIndex !== index));
  }

  const isFilledFields = userData.userName && userData.userSurname && userData.userSalary;

  const handleSubmitUser = (e) => {
e.preventDefault();

if(isFilledFields){
if (editableUserData.isEdit){
  const editedDate = users;
  editedDate.splice(editableUserData.userIndex, 1, userData)

  setUsers(editedDate);

  setEditableUserData({
    isEdit: false,
    userIndex: null
  })

} else{
  setUsers((prevState) => [...prevState, userData]);
}
  setUserData(initialValues)
}
  }

const handleCleanClick = () => setUserData(initialValues);

const handleEditClick =(data, index) => {
  setUserData(data);
  setEditableUserData({
    isEdit: true,
    userIndex: index
  })
}

// console.log('userData', userData)




  return (
   <div className='wrappera'>
    <div className='wrapper-contenta'>
      <div className='table-dataa'>
        <table className='tablea'>
          <th className='tha'>#</th>
          <th className='tha'>User Name</th>
          <th className='tha'>User Surname</th>
          <th className='tha'>User Salary</th>
          <th className='tha'>Actions</th>

          <tbody className='tbodya'>
            {users.map((user, index) => (
              <tr>
                <td className='tda'>{index + 1}</td>
                <td className='tda'>{user.userName}</td>
                <td className='tda'>{user.userSurname}</td>
                <td className='tda'>{user.userSalary}</td>
                <td className='tda'>
                  <div>
                    <button className='edit-ectiona' onClick={() => handleEditClick(user,index)}>edit</button>
                    <button className='remove-actiona' onClick={() => handleRemoveClick(index)}>remove</button>
                  </div>
                </td>
              </tr>
            
            ))}
          </tbody>

        </table>
      </div>
        <div>
          <form className='formaa' onSubmit={handleSubmitUser} onReset={handleCleanClick}>
            <input className='inputa' placeholder="Write your name" onChange={(e) => setUserData((prevState) => ({
              ...prevState,
              userName: e.target.value
            }))} 
            value={userData.userName}
            />


            <input className='inputa' placeholder="Write your surname" onChange={(e) => setUserData((prevState) => ({
              ...prevState,
              userSurname: e.target.value}))}
              value={userData.userSurname}
               />


            <input className='inputa' placeholder="Write your salary" onChange={(e) => setUserData((prevState) => ({
              ...prevState,
              userSalary: e.target.value
            }))}
            value={userData.userSalary}
            />


            <div className='buttons-wrappera'>
              <button className='buttona' type="reset">Clean</button>
              <button className='buttona' disabled={!isFilledFields} type="submit">{editableUserData.isEdit ? 'Edit' : 'Add'}</button>
            </div>
          </form>
        </div>
    </div>
    <div>
      <button className='menua'>Back to menu</button>
      </div>
   </div>
  );
}

export default Table;
