import { style } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Trainingorder.css";

function Trainingorder(props) {
  // const [Trainingorder, setTrainingorder] = useState()//סדר אימון
  const [combine, setCombine] = useState();
  const [user, setUser] = useState();
  let navigate = useNavigate();

  useEffect(async () => {
    //שליפת כל הסדר אימון
    //סוג אימון
    //אימון קבוצתי
    let trainingorder = await axios.get(
      "http://localhost:3030/Trainingorder/getTraining"
    );
    trainingorder = trainingorder.data;

    let typeoftraining = await axios.get(
      "http://localhost:3030/Typeoftraining/getTrainingo"
    );
    typeoftraining = typeoftraining.data;

    let groupes = await axios.get(
      "http://localhost:3030/groupes/getAllgroupes"
    );
    groupes = groupes.data;

    let grouptraining = await axios.get(
      "http://localhost:3030/Grouptraining/getGrouptraining"
    );
    // let grouptraining = await axios.get(`http://localhost:3030/Grouptraining/getGrouptraining/${groupes}`)

    grouptraining = grouptraining.data;
    let user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
    let arr = [];
    let arr1 = [];
    await trainingorder.forEach((order) => {
      typeoftraining.forEach((type) => {
        if (order.nameimon === type.id) {
          arr.push({
            id: order.codegroupes,
            codeGroupe: groupes.filter((p) => p.id === order.codegroupes)[0]
              .name,
            typeTraning: type.sogimon,
            day: type.nameday,
            start: 0,
            finish: 0,
          });
        }
      });
    });
    arr.forEach((a) => {
      grouptraining.forEach((gt) => {
        if (a.id === gt.groupeCode) {
          a.start = gt.start;
          a.finish = gt.finish;
        }
      });
    });
    console.log(arr);

    setCombine(arr);
  }, []);

  function bbbb(e) {
    console.log(e.codeGroupe);
    navigate("/Trainingexercises", { state: { codeGroupe: e.codeGroupe } });
  }

  let days = [
    { day: "יום ראשון" },
    { day: "יום שני" },
    { day: "יום שלישי" },
    { day: "יום רביעי" },
    { day: "יום חמישי" },
  ];

  return (
    <>
      <div className="container-fuid">
        <div className="row">
          <div className="l">
            <br></br>
            <br></br>
            <div className="col-12">
              <div className="List">
                {/* className="card" */}
                {days.map((item) => (
                  <Card
                    key={item}
                    style={{
                      width: "18rem",
                      height: "35vh",
                      // overflow: "scroll",
                      direction: "ltr",
                    }}
                  >
                    <Card.Header  className="c">{item.day}</Card.Header>
                    <ListGroup style={{ overflow: "scroll" }}className="b">
                      {/* // מעבר על כל סדר אימון ולשלוף רק את מי שהוא כמו היום נוכחי    */}
                      {combine &&
                        combine.length &&
                        combine.map((obj) =>
                          obj.day === item.day ? (
                             obj.typeTraning === "אימון יחידני" ? (
                              <ListGroup.Item
                                className={
                                  user
                                    ? obj.id === user.groupeId
                                      ? "groupColor"
                                      : ""
                                    : ""
                                }
                                 
                              >
                                <button onClick={() => bbbb(obj)}className="c">
                                  {obj.typeTraning}
                                </button>
                                <b>
                                  {":"}
                                  {obj.codeGroupe}
                                </b>
                              </ListGroup.Item>
                             ): obj.typeTraning === "אימון קבוצתי" ? (
                              <ListGroup.Item
                                className={
                                  user
                                    ? obj.id === user.groupeId
                                      ? "groupColor"
                                      : ""
                                    : ""
                                }    
                              >
                                <b>{obj.codeGroupe}</b>
                                {":"}
                                {obj.typeTraning}
                                {":"}
                                {obj.start}
                                {"-"}
                                {obj.finish}
                             <p><b> השלח קישור לזום</b></p>
                              </ListGroup.Item>
                            ) : (
                              <ListGroup.Item
                                className={
                                  user
                                    ? obj.id === user.groupeId
                                      ? "groupColor"
                                      : ""
                                    : ""
                                }
                                
                              >
                                <b>{obj.codeGroupe}</b>
                                {/* <b>{user.groupeId}</b> */}
                                {":"}
                                {obj.typeTraning}
                              </ListGroup.Item>
                            )
                          ) : (
                            ""
                          )
                        )}
                    </ListGroup>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
export default Trainingorder;
