import  { useRef } from 'react';
import { Navbar, Nav, Container, Breadcrumb, ListGroup,Card,Form ,Row,Button} from 'react-bootstrap';
import './Questions.css';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Quesiong from '../Quesiong/Quesiong';


function Questions(props){
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gmwcamo','template_dca8869',form.current,'8bMsnC0I0cx_ugMKM')
      .then((result) => {
        alert("המייל נישלח בהצלחה!");
        form.current.reset();
      }, (error) => {
      }
    );
    e.traget.reset();
  };
    return(
      <section>
    
      <br></br>
      <br></br>
      <br></br>
      <h2 className='--text-center'>:אם יש לכם שאלה אנחנו פה בשבילכם</h2>
 <div className='container'>
      <form ref={form}
       onSubmit={sendEmail}
       className='--from-control--card'>

        <input type="text" placeholder='Full Name' name='user_name'required />
        <br></br>
        <br></br>
        <input type="email" placeholder='email' name='user_email'required />
        <br></br>
        <br></br>
        <input type="text" placeholder='Subject' name='Subject' />
        <br></br>
        <br></br>
        <textarea name='message' cols="30" rows="8" placeholder='your question'></textarea> 
                     
                   
        <br></br>
        <br></br>
        <button type="submit"className='--btn--btn-primary'>שליחה</button>
    
          {/* <form method='get' action='https://he.aliexpress.com/main-page'></form> */}
      </form>
    </div>

      </section>
//         <>
//         <div className='container-fluid'>
//           <div className='row'>
//             <div className='col'>
//           <br></br>
//           <br></br>
         
//         <div className='dh'>
      
//         <h1>:אם יש לכם שאלה לגבי תזונה אנחנו פה בשבילכם</h1>
//         </div>
//         <form ref={from} onSubmit={sendEmail}>
//          <div className='row1'>
//           |
//           <Row>
//            <Form.Group  controlId="formGridAddress2">
//            <Form.Label>:מייל</Form.Label>
//            <Form.Control type="email" placeholder="Enter email" required />
//            </Form.Group>
//           </Row>
//           </div>
//         <div className='form'>
//    <Form>
//    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//      {/* <Form.Label></Form.Label> */}
//      <br></br>
//      <Form.Control as="textarea" rows={3}  placeholder="הזן את שאלתך" required  />
//    </Form.Group>
//    </Form>
   
//    </div> 
//       </ form>
// <div className='col'>
// <Button  variant="primary" type="submit" className="button"to='/Quesiong' ><Link to='/Quesiong'>
//                   אישור
//                 </Link></Button>
//     </div>
//     </div>
//    </div>
//         </div>
//         </>
    )
}
export default Questions;