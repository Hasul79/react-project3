import React from "react";
import React, {useState} from "react";
import "./ArmenMarTable.css";

// սկզբնական վիճակն է օբյեկտի տեսքով, որտեղ պահպանվելու են userName, userSurname, userSalary
const initialValues={
  userName: "",
  userSurname: "",
  userSalary: ""
}
function ArmenMarTable(){
  // useState հուկը այն տեղն է որտեղ կպահպանենք ինչ որ տվյալներ, այնտեղ նրանց կթարմացնենք և իրենց կօգտագործենք:
  // Մենք ստանում ենք useState-ից initialValues-ը որի մեջ այս {userName: "",userSurname: "",userSalary: ""} օբյեկտն է, 
  // որuseState վերցրել է initialValues փոփոխականի-ի օբյեկտը և ներառել է userData փոփոխականի մեջ,
  // այսինքն useState-ը userData-ին փոխանցել է սկզբնական արժեքը, որը տվյալ դեպքում initialValues օբյեկտն է
const[userData,setUserData]=useState(initialValues)

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <div className="table-data">
          <table>
          {/* table-ի սյուներ */}
            <th>#</th>
            <th>User Name</th>
            <th>User Surname</th>
            <th>User Salary</th>
            <th>Actions</th>
            {/* մեր ավելացվող user(օգտագործող)-ներին հասցեագրելու համար ենք ստեղծում tbody-ն */}
            <tbody>

            </tbody>

          </table>
        </div>
        <div>
          {/* form-ը նրա համար է որտեղ ավելացվելու են user-ները  */}
          <form>
          onChange-ի միջոցով ստանում ենք input-ում կատարվող փոփոխությունները,  
            <input placeholder="Write your name" onChange={(e)=>setUserData((prevState)=>({
              ...prevState,
              userName: e.target.value
            }))}
            />
            <input placeholder="Write your surname"
            onChange={(e)=>setUserData((prevState)=>({
              ...prevState,
              userSurname: e.target.value
            }))}
            />
            <input placeholder="Write your salary"
            onChange={(e)=>setUserData((prevState)=>({
              ...prevState,
              userSalary: e.target.value
            }))}
            />
            <div className="buttons-wrapper">
            {/* մաքրող կնոպկա */}
              <button type="reset">Clean</button>
            {/* ավելացնող կնոպկա */}
              <button type="submit">Add</button>
            </div>

          </form>
        </div>
      </div>
    </div>


  
  
    )
}

export default ArmenMarTable