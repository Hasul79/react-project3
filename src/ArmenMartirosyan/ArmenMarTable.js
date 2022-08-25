// import React from "react";
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
const[userData,setUserData]=useState(initialValues)//մենք ստանում ենք բոլոր արժեքները որոնք գրվում են input-ում և նրանց պահպանում ենք userData-ում
const[users, setUsers]=useState([])//այստեղ կպահպանվի user-ների ցանկը,userData-ում պահպանված արժեքները որպեսզի հասցեագրենք տաբլիցայի վրա դրա համար նրանց նախ պետք է մցնենք այս զանգվածի մեջ
const [editTableUserData, setEditTableUseData]=useState({//այստեղ պահպանվելու է փոփոխվող user-ի մասին ինֆորմացիան
isEdit: false,// մենք պետք է հասկանանք սա փոփոխություն է user-ի թե նոր user-ի ավելացում է
userIndex: null// սա պետք է պահպանի index-ը ընթացիկ user-ի որին մենք սեղմել ենք Edit կնոպկան
});

const handleRemoveClick=(index) => {// մենք այստեղ ստանում ենք index@ ներքևում գտնվող Remove button-ից, որի միջոցով մենք այդ index-ը կջնջենք users զանգվածից
    setUsers(users.filter((user, userIndex) => userIndex !== index));// այստեղով սահմանվում է Remove կնոպկայի աշխատանքը, որը միացված է Remove կնոպկային
}



const isFilledFields=userData.userName && userData.userSurname && userData.userSalary// սա ստեղծվել է նրա համար որպեսզի ներքևում գտնվող if-ի միջոցով սահմանվի որ եթե inputi բոլոր դաշտերը լրացված չեն add կնոպկան չավելացնի

const handleSubmitUser=(e)=>{//սա կարգավորիչ ֆունկցիա է, որը Add(Submit) կնոոպկայի սեղմելուց user-ին կներառի զանգվածի մեջ, այս ֆունկցիայի e(event)-ով կանչում ենք արդեն կառուցված ֆունկցիան` preventDefault, որը մեզ կարգելի մեր էջի վերագործարկումը, այս ֆունկցիան՝handleSubmitUser փոխանցվում է form-ի մեջ 
e.preventDefault()// այստեղով մենք ստանում ենք e(event)-ը, կանչում ենք preventDefault() որի միջոցով կարողանում ենք այնպես անել որ Add կնոպկան սեղմելուց մեր էջը չվերագործարկվի

if(isFilledFields){//if-ի միջոցով սահմանվում է որ եթե inputi բոլոր դաշտերը լրացված չեն add կնոպկան չավելացնի
  
  if(editTableUserData.isEdit){

    const editedData=users;
    editedData.splice(editTableUserData.userIndex, 1, userData);

    setUsers(editedData);

    setEditTableUseData({// այստեղ մենք ներառում ենք մեր state-ն, որում պետք է պահպանենք փոփոխության ենթարկվող user-ի տվյալները
      isEdit: false,
      userIndex: null//  այստեղով մենք գրում ենք ընթացիկ user-ի index-ը
    })
  }else{
    setUsers((prevState)=>[...prevState, userData]);//setUsers ֆունկցիան կտեղադրի user-ին իր զանգվածի մեջ՝useState([]): ((prevState)=>)-սրանով մենք ստանում ենք նախկին վիճակը որպեսզի մեք կարողանանք ավելացնենք ևս ինչ-որ անհրաժեշտ է, [...prevState, userData]-սրանով մենք վերադարձնում ենք զանգվածը որը կազմված կլինի նախկին արժեքով և ավելացված ընթացիկ userData-ն
  }
  

  setUserData(initialValues)// սրանով մենք add-ն սեղմելուց մաքրում ենք inputi մեջ գրվածը, սա աշխատում է ներքևում գտնվող inputi-ի value արժեքի հետ
  }
}

const handleCleanClick=()=> setUserData(initialValues);//այստեղով սահմանում ենք Clean կնոպկայի աշխատանքը,setUserData ֆունկցիայի միջոցով որը թարմացնում է userData փոփոխականի վիճակը և իրեն տալիս ենք initialValues փոփոխականը որը իրենից ներկայացնում է initialValues={userName: "",userSurname: "",userSalary: ""} օբյեկտը

const handleEditСlick=(data, index)=>{// այս ֆունկցիան ընդունում է ընթացիկ user-ին և իր index-ը
setUserData(data);// սա input-ի արժեքն է, երբ որ edit կնոպկան սեղմենք տվյալները գնան լցվեն համապատասխան input-ների մեջ որ կարողանանք փոփոխենք, data-ն ընթացիկ տվյալն է որը մենք պետք է փոփոխենք
setEditTableUseData({// այստեղ մենք ներառում ենք մեր state-ն, որում պետք է պահպանենք փոփոխության ենթարկվող user-ի տվյալները
  isEdit: true,
  userIndex: index//  այստեղով մենք գրում ենք ընթացիկ user-ի index-ը
})
}
console.log("users:", users);

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
              {users.map((user,index)=>(// սրանով մենք մեր բոլոր user-ներին ավելացնում ենք տաբլիցայի տակ add կնոպկան սեղմելով, users-ը զանգված է index-ը զանգվածի ինդեքսն է
               <tr>
                {/* սրանով մենք սահմանում ենք հերթական համարները 1,2 և այլն */}
                <td>{index+1}</td>
                {/* users-ը մեզ մոտ դատարկ array է */}
                <td>{user.userName}</td>
                <td>{user.userSurname}</td>
                <td>{user.userSalary}</td>
                <td>
                  <div>
                  {/* onClick={()=>handleEditСlick(user, index)-ով մենք handleEditСlick ֆունկցիային տալիս ենք ընթացիկ user-ին և իր index-ը */}
                    <button className="edit-action" onClick={()=>handleEditСlick(user, index)}>Edit</button>
                    {/* վերևում սահմանվել է handleRemoveClick-ը որը կապ է հաստատել այս կնոպկայի հետ */}
                    <button className="remove-action" onClick={()=>handleRemoveClick(index)}>Remove</button>
                  </div>
                </td>

               </tr>
              ))}

            </tbody>

          </table>
        </div>
        <div>
          {/* form-ը նրա համար է որտեղ ավելացվելու են user-ները, այստեղ տեղադրում ենք onReset={handleCleanClick} որը աշխատեցնում է Clean կնոպկան  */}
          <form onSubmit={handleSubmitUser} onReset={handleCleanClick}>
          {/* onChange-ի միջոցով ստանում ենք input-ում կատարվող փոփոխությունները,e-ն նշանակում event(իրադարձություն),
          մեզ պետք է ընդգծելբոլոր նախորդ մուտքագրված արժեքները և ավելացնել միայն նորը, setUserData ֆունկցիան թարմացնում է state-ն,prevState-ում պահվում է state-ի
          նախորդ վիճակը և մենք նրանից ստանում ենք state-ի նախորդ վիճակը,
          ,
            */}
            <input className="input" placeholder="Write your name" 
            onChange={(e)=>setUserData((prevState)=>({ //այստեղով մենք օբյեկտում ավելացնում ենք նախորդ վիճակը այսինքն՝ ...prevState-ը և input-ում ընթացիկ մուքագրումները արժեքներով,
            //մենք այն ավելացնում ենք userName:-ում, և e(event)-ic ստանում ենք ընթացիկ արժեքը։Այս ֆունկցիան ասում է որ յուրաքանչյուր մուտքագրված նիշի համար գրիր նախորդ վիճակը այդ թվում userSurname:, userSalary։-ի նախորդ վիճակը և ընթացիկը թարմացրու
              ...prevState,
              userName: e.target.value // userName:-ը օբյեկտի բանալին է e.target.value-ն արժեքը, e.target.value-սա ընթացիկ թարմացված արժեքն է օբյեկտի 
            }))}
            value={userData.userName}//value-ն inputi պարամետր է, որին մենք տալիս ենք արժեք մեր state-ից, սա աշխատում է վերևում գրված այս՝ setUserData(initialValues) ֆունկցիայի հետ որով ջնջվում է input-ում գրվածը երբ սեղմում ենք Add

            />

            <input className="input" placeholder="Write your surname"
            onChange={(e)=>setUserData((prevState)=>({//onChange-ի միջոցով մենք գրում ենք մեր State-ը,
              ...prevState,
              userSurname: e.target.value//գրում ենք այդ input-ի անհրաժեշտ դաշտերում նրա արժեքը և այդ արժեքները միանգամից վերցնում գրում ենք ներքևում գտնվող value-ի մեջ։ 
            }))}
            value={userData.userSurname}
            />

            <input className="input" placeholder="Write your salary"
            onChange={(e)=>setUserData((prevState)=>({
              ...prevState,
              userSalary: e.target.value
            }))}
            value={userData.userSalary}
            />

            <div className="buttons-wrapper">
            {/* մաքրող կնոպկա */}
              <button type="reset" className="butt1">Clean</button>
            {/* ավելացնող կնոպկա, ինքը այս կնոպկայի մեջ դրել է այսպիսի պարամետր <button disabled={!isFilledFields} type="submit" className="butt2">, որտեղ disabled={!isFilledFields} -ը նշանակում է եթե input-ների մեջ բոլոր արժեքները ակտիվ չեն Add կնոպկան թող ակտիվ չլինի */}
              <button type="submit" className="butt2">{editTableUserData.isEdit ? "Edit" : "Add"}</button>
            </div>

          </form>
        </div>
      </div>
    </div>


  
  
    )
}

export default ArmenMarTable