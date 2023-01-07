import React from "react";
import "./homepage.css";
import img from "../../assets/Imges/img.jpg";

function Homepage(props) {
  return (
    <>
      <div className="contaier-fluid1">
        <div className="row">
          <div className="col-8">
           
            {/* <div className="img1"> */}
               <img alt="img" src={img} className="imeges1" />
            {/* </div> */}
          </div>
        </div>

        <div className="row">
          <div className="col-10">
            <br></br>
            <br></br>
            <div className="dav1">
              <h1 className="h13">
                <b>!ברוכים הבאים</b>
              </h1>
              <h1>הבריאות זה אחד הדברים החשובים בחיינו </h1>
              <h1>ומשום כך צריך להקפיד על אורך חיים בריא וטוב </h1>
              <h1>כדי לשמור על בריאות הגוף והנפש שלנו באתרינו </h1>
              <h1>תוכלו לגלות מה כדי לכם לעשות כדי לשמור על </h1>
              <h1>בריאותכם על הצד הטוב ביותר</h1>
            </div>
            {/* <div className='Breadcrumb'>
        <Breadcrumb >
           <Breadcrumb.Item href="#" >SiteRegisteration</Breadcrumb.Item>
        </Breadcrumb>
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
