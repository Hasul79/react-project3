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
    <div>
      <div>
        <div>
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
            <input placeholder="Write your name"/>
            <input placeholder="Write your surname"/>
            <input placeholder="Write your salary"/>
            <div>
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