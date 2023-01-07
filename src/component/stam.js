// import "bootstrap/dist/css/bootstrap.min.css";
// // import { Button, Card, Col, Form, Row, Stack } from "react-bootstrap";
// import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
// import "./App.css";
// import Fruits from "./assets/Imges/Fruits.png";

// // , Explanation
// // import Card from 'react-bootstrap/Card';
// import axios from "axios";
// import { useEffect } from "react";
// import { connect } from "react-redux";
// import AppBarLocal from "./component/AppBarLocal";
// import { updateUser } from "./component/Redux/Actions/action";
// import { Link } from "react-router-dom";
// import Header from "./component/header/header";

// const linksNavBar = [];

// function mapStateToProps(state) {
//   return {
//     currentUser: state.userReducer.user,
//   };
// }

// function App(props) {
//   //const [currentUser, setcurrentUser] = useState()
//   const { currentUser, dispatch } = props;
//   useEffect(() => {
//     console.log("test");
//     axios.get("http://localhost:3030/user/getUser").then((res) => {
//       console.log(res.data);
//       // setmenu1(res.data);
//     });
//     dispatch(updateUser(JSON.parse(localStorage.getItem("user"))));
//   }, []);
//   return (
//     <Stack>
//       <AppBarLocal linksNavBar={linksNavBar} />
//       <Header linksNavBar={linksNavBar} />
//       {/* <Box style={{ paddingRight: "20%", paddingLeft: "20%", marginTop: "8%" }}>
//         <Grid
//           container
//           direction="row-reverse"
//           sx={{
//             flex: 1,
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "#C5DDC87F",
//             marginRight: "10%",
//             borderRadius: 6,
//           }}
//         >
//           <Grid item style={{ flex: 1 }}>
//             <Stack
//               style={{
//                 flex: 1,
//                 flexDirection: "row",
//                 direction: "rtl",
//                 paddingLeft: "10%",
//                 justifyContent: "center",
//               }}
//             >
//               <Typography
//                 style={{ color: "black", fontSize: 20, paddingLeft: 7 }}
//                 variant="h6"
//               >
//                 הכנס ת.ז
//               </Typography>
//               <Stack>
//                 <TextField
//                   size="small"
//                   type="text"
//                   placeholder="ת.ז"
//                   // onChange={(event) => {
//                   //   setDataForm({
//                   //     ...dataForm,
//                   //     [field.name]: field.isNumber
//                   //       ? Number(event.target.value)
//                   //       : event.target.value,
//                   //   });
//                   //   setErrors({ ...errors, [field.name]: undefined });
//                   // }}
//                   InputProps={{ inputProps: { min: 0 } }}
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                 ></TextField>
//                 <Button
//                   sx={{
//                     borderRadius: 20,
//                     marginTop: 2,
//                     marginBottom: 4,
//                     backgroundColor: "#A0CE5E",
//                   }}
//                   variant="contained"
//                   // color="#A0CE5E"
//                   type="submit"
//                 >
//                   היכנס
//                 </Button>
//                 <Typography
//                   style={{
//                     color: "black",
//                     fontSize: 20,
//                     paddingLeft: 7,
//                     alignSelf: "center",
//                   }}
//                   variant="h6"
//                 >
//                   או בחר קבוצה
//                 </Typography>
//                 <Button
//                   sx={{ borderRadius: 20, backgroundColor: "#A0CE5E" }}
//                   variant="contained"
//                   type="submit"
//                   // onClick={() => navigate("/Login")}
//                 >
//                   <Link to="/Login"> בחירת קבוצה</Link>
//                 </Button>
//               </Stack>
//             </Stack>
//           </Grid>
//           <Grid item style={{ flex: 1 }}>
//             <Box
//               component="img"
//               sx={{
//                 height: 350,
//                 width: 400,
//               }}
//               alt="logo"
//               src={Fruits}
//             />
//           </Grid>
//         </Grid>
//       </Box> */}
//     </Stack>
//     // <div className="App">
//     //   <Header />
//     //   {!currentUser ? (
//     //     <Row
//     //       style={{ paddingTop: "2%", paddingLeft: "45%", paddingRight: "45%" }}
//     //     >
//     //       <Form.Group>
//     //         <Form.Label>:ת.ז לכניסה</Form.Label>
//     //         <Form.Control type="string" placeholder="Enter T.Z" />
//     //       </Form.Group>
//     //       <Button variant="primary" type="button" className="button">
//     //         אישור{" "}
//     //       </Button>
//     //     </Row>
//     //   ) : (
//     //     <></>
//     //   )}
//     //   {currentUser ? (
//     //     <>
//     //       <Card border="dark" style={{ width: "15rem" }}>
//     //         <Card.Body>
//     //           <p style={{ display: "flex" }}>
//     //             {currentUser.name}
//     //             <b style={{ color: "palegreen" }}>{":שם מישתמש"}</b>
//     //           </p>
//     //           <p style={{ display: "flex" }}>
//     //             {currentUser.email}
//     //             <b style={{ color: "palegreen" }}>{":מייל"}</b>
//     //           </p>
//     //           <p style={{ display: "flex" }}>
//     //             {Math.floor(
//     //               (new Date().getTime() -
//     //                 new Date(currentUser.date).getTime()) /
//     //                 (1000 * 3600 * 24)
//     //             ) + 1}
//     //             <b style={{ color: "palegreen" }}>{":מיספר ימים שהותך באתר"}</b>
//     //           </p>
//     //         </Card.Body>
//     //       </Card>
//     //       <img src={Fruits} className="imgLogo" />
//     //     </>
//     //   ) : (
//     //     <></>
//     //   )}

//     //   {/* onClick={pass} */}

//     //   {/* <div className='img1'>
//     //      <img src={imeges1} className="imeges1" />
//     //     </div> */}
//     //   <Outlet />
//     // </div>
//   );
// }
// //progress
// export default connect(mapStateToProps)(App);
