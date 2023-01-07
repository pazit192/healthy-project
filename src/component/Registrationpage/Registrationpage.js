import { Typography } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateUser } from "../Redux/Actions/action";
import "./Registrationpage.css";


export function findRegistrationFormErrors(userDetails) {
  let newErrors = {};
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const { name, email, pon,id, age, groupeId } = userDetails;
  // name errors
  let nameRegex = new RegExp("[0-9]");
  if (!name || name === "") newErrors.name = "require";
  else if (name && nameRegex.test(name)) newErrors.name = "validName";
  // errors
  if (!age || age === "") 
    newErrors.age = "require";
  else  
    switch(groupeId) {
      case 1:
          if (!(age>=40 && age<=60))
            newErrors.age = "require";
          break
      case 2:
          if (age<=18)
            newErrors.age = "require";
          break  
      case 3:
          if (age<18)
            newErrors.age = "require";
          break  
      case 4:
          if (age<18)
            newErrors.age = "require";
          break  
      case 5:
          if (age<16)
            newErrors.age = "require";
          break  
       case 6:
          if (age<60)
            newErrors.age = "require";
          break 
    }

//errors id
let idRegex = new RegExp("[0-9]");
  if (!id || id === "") newErrors.id = "require";
  else if ((id && id.length !== 9) || (id && !idRegex.test(id)))
    newErrors.id = "validid";
  // email errors
  if (!email || email === "") newErrors.email = "require";
  else if (email && !emailRegex.test(email)) newErrors.email = "validEmail";
  // pon errors
  let ponRegex = new RegExp("(0[0-9]{8,9})");

  if (!pon || pon === "") newErrors.pon = "require";
  else if ((pon && pon.length !== 10) || (pon && !ponRegex.test(pon)))
    newErrors.pon = "validpon";

  return newErrors;
}
// function Explanation(props) {
//   return (
//     <>
//       <div className='container-fluid'>
//         <div className='row'>
//           <div className='col-11.5'>
//             <br></br>
//             <div className="h">
//               <h3>:הרשמה לאתר</h3>
//               <h4>צריך לירשום לכל קבוצה כמה דברים עליה צריך לישאול את המורה</h4>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


function Registrationpage(props) {
  const navigation = useNavigate();
  const [errors, setErrors] = useState({});
  const { currentUser, dispatch } = props;

  const location = useLocation();
  let groupe = location.state;

  const name = useRef();
  const id = useRef();
  const age = useRef();
  const email = useRef();
  const pon = useRef();
  const date = useRef();

  function saveNewUser() {
    let user = {
      name: name.current.value,
      id: id.current.value,
      age: age.current.value,
      email: email.current.value,
      pon: pon.current.value,
      date: date.current.value,
      groupeId: groupe.groupeId,
    };
    const newErrors = findRegistrationFormErrors(user);
    console.log("newErrors", newErrors);
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
      // No errors!
    } else {
      axios.post(`http://localhost:3030/user/newUser`, user).then((res) => {
        if ( typeof(res.data) != 'object')
        {
          alert(res.data);
        } else {
          
          localStorage.setItem("user", JSON.stringify(user));
          dispatch(updateUser(JSON.parse(localStorage.getItem("user"))));
          //מעבר לעמוד הוספת בהצלחה
          navigation("/Confirmationpage");
          
        }
      });
    }
  }




  return (
    <>
      {/* <Explanation></Explanation> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-11.5">
            <div className="form2">
              <br></br>
              <h3 className="h31">:הרשמה לאתר</h3>
              <Form>
                <Row className="mb-3">
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>:שם מלא</Form.Label>
                    <Form.Control
                      ref={name}
                      type="text"
                      placeholder="Enter Name"
                    />
                    <Typography style={{ color: "red" }}>
                      {errors && errors.name && "נא הכנס רק אותיות"}
                    </Typography>
                  </Form.Group>

                  <Form.Group controlId="formGridPassword">
                    <Form.Label>:ת.ז</Form.Label>
                    <Form.Control
                      ref={id}
                      type="string"
                      placeholder="Enter T.Z"
                    />
                   <Typography style={{ color: "red" }}>
                      {errors && errors.id && "נא הכנס מספר בעל 9 ספרות"}
                    </Typography>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>:אימייל</Form.Label>
                    <Form.Control
                      ref={email}
                      type="email"
                      placeholder="Enter Email"
                    />
                    <Typography style={{ color: "red" }}>
                      {errors && errors.email && "המייל אינו תקין"}
                    </Typography>
                  </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>:מספר פלאפון</Form.Label>
                    <Form.Control
                      ref={pon}
                      type="string"
                      placeholder="Enter pon"
                    />
                    <Typography style={{ color: "red" }}>
                      {errors && errors.pon && "הנייד אינו תקין הכנס רק מספרים"}
                    </Typography>
                  </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>:גיל</Form.Label>
                    <Form.Control
                      ref={age}
                      type="number"
                      placeholder="Enter Age"
                    />
                     <Typography style={{ color: "red" }}>
                      {errors && errors.age &&"אנא מלא גיל תקין"}
                    </Typography>
                  </Form.Group>

                  <Form.Group controlId="formGridPassword">
                    <Form.Label>:תאריך</Form.Label>
                    <Form.Control
                      disabled
                      ref={date}
                      type="Date"
                      placeholder="Enter date"
                      value={new Date().toISOString().substring(0, 10)}
                    />
                    <p>ביום הרשמתך לקבוצה מתחיל תקופת הדיאטה*</p>
                  </Form.Group>
                </Row>

                <Button
                  
                  onClick={saveNewUser}
                  variant="primary"
                  type="button"
                  className="button"
                >
                  אישור
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// , Explanation
export default connect()(Registrationpage);
