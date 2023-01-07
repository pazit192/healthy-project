import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import logo from "../assets/Imges/logo.jpg";
import { Form, Row } from "react-bootstrap";

const linksNavBar = [
  {
    name: "בחירת קבוצה",
    link: "/Login",
  },
  {
    name: "סדר אימון",
    link: "/Trainingorder",
  },
  {
    name: "גרף",
    link: "/Graphd",
  },
  {
    name: "תפריט",
    link: "/menu1",
  },
  {
    name: "שאלות",
    link: "/Questions",
  },
  {
    name: "המלצותינו",
    link: "/Recommendations",
  },
  {
    name: "אודותינו",
    link: "/Aboutus",
  },
];


function LoginHome(props) {
  // alert(props.isHidden);
  const [id, setId] = useState("");

  const cookies = new Cookies();
   
  
  function checkUser() {
 

    if (!id || id === "") 
    {
      // props.setHidden(false);
      return
      // newErrors.id = "require";
    }
 
    // props.setIsErrorMessageHidden(true);
    axios.get("http://localhost:3030/user/getUser").then((res) => {
      const user = res.data.find((user) => user.id === id);
      if (user) {
        cookies.set("user", user.id);
        const current = new Date();
        localStorage.setItem("user", JSON.stringify(user))
        if ((getWeeksDiff(new Date(user.date), current) >= 8 && user.groupeId == 1) ||
            (getWeeksDiff(new Date(user.date), current) >= 16 && user.groupeId == 2) ||
            (getWeeksDiff(new Date(user.date), current) >= 48 && user.groupeId == 5) ||
            (getWeeksDiff(new Date(user.date), current) >= 2 && user.groupeId == 3) ||
            (getWeeksDiff(new Date(user.date), current) >= 4 && user.groupeId == 4) ||
            (getWeeksDiff(new Date(user.date), current) >= 4 && user.groupeId == 6))
        {
          Remove(user.id);
          return alert('הינך סיימת את תקופתך בדיאטה וביכולתך להרשם שוב,תודה רבה!')
        }

     
        props.setUserName(user.name);
        props.setUserId(user.id);
        props.setRegister(true);
        props.setLinksNavBar([...linksNavBar]);
      } else {
        alert('ת.ז לא קיימת')
      }
    });
  }

  function Remove(id) {
    axios.delete(`http://localhost:3030/user/deleteuser/${id}`).then((res) => {

     });
  }

  function getWeeksDiff(startDate, endDate) {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
  
    return Math.round(Math.abs(endDate - startDate) / msInWeek);
  }

  
  return (
    <Box style={{ paddingRight: "20%", paddingLeft: "20%", marginTop: "8%" }}>
      <Grid
        container
        direction="row-reverse"
        sx={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#C5DDC87F",
          marginRight: "10%",
          borderRadius: 6,
        }}
      >
        <Grid item style={{ flex: 1 }}>
          <Stack
            style={{
              flex: 1,
              flexDirection: "row",
              direction: "rtl",
              paddingLeft: "10%",
              justifyContent: "center",
            }}
          >
            <Stack>
            <h4 style={{
                  paddingLeft: 7,
                  alignSelf: "center",
                }}>כניסה לאזור האישי</h4>
           
              <TextField
                size="small"
                type="text"
                placeholder="ת.ז"
                onChange={(e) => setId(e.target.value)}
                // onChange={(event) => {
                //   setDataForm({
                //     ...dataForm,
                //     [field.name]: field.isNumber
                //       ? Number(event.target.value)
                //       : event.target.value,
                //   });
                //   setErrors({ ...errors, [field.name]: undefined });
                // }}
                InputProps={{ inputProps: { min: 9 } }}
                InputLabelProps={{
                  shrink: true,
                }}
              ></TextField>
  
         
         
              <Button
                sx={{
                  marginLeft:15,
                  paddingLeft:15,
                  borderRadius: 20,
                  marginTop: 2,
                  backgroundColor: "#A0CE5E",
                }}
                onClick={(to="/Homepage") => checkUser()  }
                variant="contained"
                type="submit"
               
              >
                כניסה
              </Button>
              
              <Link to="/Login"  style={{ direction: 'ltr'}}>   
              <span onClick={() => props.setRegister(true)}>להרשמה לחץ כאן</span></Link>
            </Stack>
          </Stack>
        </Grid>
        <Grid item style={{ flex: 1 }}>
         <Box
            component="img"
            sx={{
              height:350,
              width: 400,
            }}
            alt="logo"
            src={logo}
          />
        </Grid> 
        
      </Grid>
    </Box>
  );
}

export default LoginHome;