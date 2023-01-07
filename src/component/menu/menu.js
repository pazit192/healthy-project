import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import Cookies from "universal-cookie";
import "./menu.css";

function Menu1(props) {
  const [groups, setgroups] = useState([]);
  const [menu1, setmenu1] = useState([]);
  const [localMenu, setLocalMenu] = useState([]);
  const [group, setGroup] = useState([]);
  const cookies = new Cookies();

  useEffect(() => {
    axios
      .get("http://localhost:3030/groupes/getAllgroupes")
      .then((res) => {
        setgroups(res.data);
      })
      .then(() => {
        axios.get(`http://localhost:3030/menu/getAllmenu/`).then((res) => {
          setmenu1(res.data);
        });
      });
    axios.get("http://localhost:3030/user/getUser").then((res) => {
      let userId = cookies.get("user");
      const user = res.data.find((user) => user.id === userId);
      setGroup(user.groupeId);
    });
  }, []);
  console.log("group", group);
  useEffect(() => {
    if (groups.length > 0 && menu1.length > 0) {
      let menuArray = [];
      groups?.forEach((group) => {
        menu1?.forEach((menu) => {
          if (menu.id === group.id) {
            let temp = {};
            temp = { ...menu, title: group.name };
            menuArray.push(temp);
          }
        });
      });
      setLocalMenu([...menuArray]);
    }
  }, [groups, menu1]);
  return (
    <>
      <div className="container-fluid1">
        <div className="l1">
          <br></br>
          <br></br>

          <div className="row">
            <div className="col-10">
              <div className="List1">
                {localMenu &&
                  localMenu.length > 0 &&
                  localMenu.map((menu) => {
                    console.log("menu", menu);
                    return (
                      <Card style={{ width: "18rem" }}>
                        <Card.Header className="c2">{menu.title}</Card.Header>
                        <ListGroup>
                          <ListGroup.Item
                            style={{
                              backgroundColor: menu.id === group && "rgb(211, 211, 211)",
                            }}
                          >
                           <b>ארוחת בוקר:</b>{menu.breakfast}
                          </ListGroup.Item>
                          <ListGroup.Item
                            style={{
                              backgroundColor: menu.id === group && "rgb(211, 211, 211)",
                            }}
                          >
                            <b>ארוחת צהריים:</b>{menu.lunch}
                          </ListGroup.Item>
                          <ListGroup.Item
                            style={{
                              backgroundColor: menu.id === group && "rgb(211, 211, 211)",
                            }}
                          >
                         <b>ארוחת ביינים:</b> {menu.Snack}
                          </ListGroup.Item>
                          <ListGroup.Item
                            style={{
                              backgroundColor: menu.id === group && "rgb(211, 211, 211)",
                            }}
                          >
                              <b>ארוחת ערב:</b> {menu.dinner}
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <MyVerticallyCenteredModal className='m5'
                show={modalShow}
                onHide={() => setModalShow(false)}
                description={description1}
                menu={menu1}
                tasks={tasks1}
            /> */}
    </>
  );
}

export default Menu1;
