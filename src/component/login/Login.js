import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import MyVerticallyCenteredModal from "./login1";

function Login(props) {
  const [groups, setgroups] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [description1, setDescription1] = useState();
  const [menu1, setmenu1] = useState();
  const [tasks1, settasks1] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3030/groupes/getAllgroupes").then((res) => {
      console.log(res.data);
      setgroups(res.data);
    });
  }, []);
  async function description(item) {
    await setDescription1(item.description);

    //לשלוף את המניו לפי הקוד,
    axios
      .get(`http://localhost:3030/menu/getmenubyid/${item.menu}`)
      .then((res) => {
        console.log(res.data);
        setmenu1(res.data);
      });
    //
    axios
      .get(
        `http://localhost:3030/Individualtraining/getIndBynamegroup/${item.Individualtraining}`
      )
      .then((res) => {
        console.log(res.data);
        settasks1(res.data.tasks);
        setModalShow(true);
      });
  }

  function dddd(e) {
    navigate("/Registrationpage", { state: { groupeId: e.id } });
  }
  console.log("groups", groups);

  return (
    <>
      <div className="container-fluid1">
        <div className="l1">
          <br></br>
          <br></br>
          {/* <div className='row'>
                        <div className='col-10'> */}
          <div className="row">
            <div className="col-10">
              <div className="List1">
                {groups &&
                  groups.length &&
                  groups.map((item) => (
                    <Card key={item} style={{ width: "18rem" }}>
                      <Card.Header className="ch1">{item.name}</Card.Header>
                      <ListGroup>
                        <ListGroup.Item>{item.calories}:קלוריות</ListGroup.Item>
                        <ListGroup.Item>{item.crowd}</ListGroup.Item>
                        <ListGroup.Item>
                          משך זמן:{item.numWeeks} שבועות
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <button onClick={() => dddd(item)} className="ch1">
                            הרשמה
                          </button>{" "}
                          -{" "}
                          <button
                            className="ch1"
                            onClick={() => description(item)}
                          >
                            לפרטים
                          </button>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  ))}{" "}
              </div>
            </div>
            {/* </div></div> */}
          </div>
        </div>
      </div>

      <MyVerticallyCenteredModal
        className="m5"
        show={modalShow}
        onHide={() => setModalShow(false)}
        description={description1}
        menu={menu1}
        tasks={tasks1}
      />
    </>
  );
}

export default Login;
