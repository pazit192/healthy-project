import "./Trainingexercises.css";
import { useLocation } from "react-router";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Trainingexercises(props) {
  const { state } = useLocation();
  const { codeGroupe } = state;

  const [Individualtraining, setIndividualtraining] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3030/Individualtraining/getIndBynamegroup1/${codeGroupe}`
      )
      .then((res) => {
        console.log(res.data);
        setIndividualtraining(res.data);
      });
  }, []);
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <div className="code">{codeGroupe}</div>
       
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
         
            <div></div>
            <div className="hm2">
              {Individualtraining &&
                Individualtraining.length &&
                Individualtraining.map((item) => (
                  <h2 key={item}>
                    {item}
                    {"*"}
                  </h2>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Trainingexercises;
