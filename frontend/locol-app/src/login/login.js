import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { InputAdornment, Button, TextField, Input } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import axios from 'axios';

import "./login.css";

// export const Login = ({}) => {
//   const FlexColumn1Function = (e, name) => {
//     alert(`${name} was clicked`);
//   };


function Login() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/hello-world/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default Login;


// function login() {

//   return (
//     <div id="LoginPage">
//       <div id="Background">
//         <div id="Panel">
//             <text10>Welcome Back!</text10>
          
//           <text1>Sign in</text1>
//           <text2>to your Locol account</text2>
//           <text3>Email:</text3>
//           <div className="tf-outer">
//             <TextField
//               className="tf-inner"
//               variant="outlined"
//               position="absolute"
//             />
//             </div>
//             <text4>Password</text4>
//             <div className="tf-outer">
//              <TextField
//               className="tf-inner"
//               variant="outlined"
//               position="absolute"
//               InputProps={{endAdornment: (<InputAdornment position="end" style = {{cursor: "pointer"}}>
//                 <Visibility 
//                   onMouseDown={() => this.toggleShowPassword()}
//                   onMouseUp={() => this.toggleShowPassword()}
//                   />
//               </InputAdornment>)}}
//               // InputProps={{
//               //   endAdornment: (
//               //     <InputAdornment position="end" style={{ cursor: "pointer"}}>
//               //       <Visibility
//               //         onMouseDown={() => this.toggleShowPassword()}
//               //         onMouseUp={() => this.toggleShowPassword()}
//               //       />
//               //     </InputAdornment>
//               //   ),
//               // }}
//               // type={this.state.showPassword ? "text" : "password"}
//               // value={this.state.password}
//               // onChange={(e) => this.changePassword(e.target.value)}
//             />
            
//           {/* 

//                     <Element1 />
//                     <Text4>Password</Text4>
//                     <FlexColumn>
//                         <IconsaxLineareye
//                             src={`https://file.rendit.io/n/InxojZGgvxtK7t5awRLt.svg`}
//                         />
//                     </FlexColumn> */}
//                     </div>
//                     <div className="FlexColumn1">
//                       <text5>Login</text5>
//                     </div>
//             <text6>Don't have an account?  
//               <a href="/signup_person"> Sign Up</a> instead.
//               <div><a href="/home">Forgot Password?</a></div> {/*change the url*/}
//             </text6>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default login;

// const LoginRootRootRoot = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
//   background-color: #ffffff;
//   overflow: hidden;
// `;
// const Panel = styled.div`
//   height: 389px;
//   left: 395px;
//   top: 189px;
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   align-items: flex-start;
//   padding: 2.5% 0px;
//   border-radius: 20px;
//   background-color: rgba(255, 255, 255, 0.75);
//   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
// `;
// const Text1 = styled.div`
//   width: 100%;
//   height: 44px;
//   margin: 0px 0px 1.08% 0px;
//   color: #00416b;
//   font-size: 35px;
//   font-weight: 700;
//   font-family: Montserrat;
//   line-height: 44.41500186920166px;
//   text-align: center;
// `;
// const Text2 = styled.div`
//   width: 100%;
//   height: 18px;
//   margin: 0px 0px 2.62% 0px;
//   color: #00416b;
//   font-size: 14px;
//   font-weight: 500;
//   font-family: Montserrat;
//   line-height: 17.766000747680664px;
//   text-align: center;
// `;
// const Text3 = styled.div`
//   width: 6.32%;
//   height: 16px;
//   margin: 0px 0px 1.08% 16.95%;
//   font-size: 13px;
//   font-weight: 600;
//   font-family: Montserrat;
//   white-space: nowrap;
// `;
// const Element1 = styled.div`
//   width: 64.1%;
//   height: 40px;
//   margin: 0px 0px 3.08% 16.95%;
//   border-width: 1px;
//   border-radius: 20px;
//   border-style: solid;
//   border-color: #bdbdbd;
//   box-shadow: 0px 5px 25px 0px #02375f;
// `;
// const Text4 = styled.div`
//   width: 10.02%;
//   height: 16px;
//   margin: 0px 0px 1.08% 16.95%;
//   font-size: 13px;
//   font-weight: 600;
//   font-family: Montserrat;
//   white-space: nowrap;
// `;
// const FlexColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
//   margin: 0px 0px 5.55% 16.95%;
//   padding: 1.23% 2.16% 1.23% 58.24%;
//   border-width: 1px;
//   border-radius: 20px;
//   border-style: solid;
//   border-color: #bdbdbd;
//   box-shadow: 0px 5px 25px 0px #02375f;
// `;
// const IconsaxLineareye = styled.img`
//   width: 100%;
//   height: 24px;
// `;

// const Text6 = styled.div`
//   width: 34.82%;
//   height: 13px;
//   align-self: flex-end;
//   margin: 0px 31.28% 0.92% 0px;
//   color: #9e9e9e;
//   font-size: 11px;
//   font-weight: 500;
//   font-family: Montserrat;
//   white-space: nowrap;
// `;
// const Text7 = styled.div`
//   display: contents;
//   color: #38518d;
//   font-size: 11px;
//   font-weight: 500;
//   font-family: Montserrat;
// `;
// const Text8 = styled.div`
//   display: contents;
//   color: #38518d;
//   font-size: 11px;
//   font-weight: 500;
//   font-family: Montserrat;
//   text-decoration-line: underline;
// `;
// const Text9 = styled.div`
//   display: contents;
//   color: #9e9e9e;
//   font-size: 11px;
//   font-weight: 500;
//   font-family: Montserrat;
// `;
// const ForgotPassword1 = styled.div`
//   width: 21.11%;
//   height: 13px;
//   margin: 0px 0px 0px 33.9%;
//   color: #39538e;
//   font-size: 11px;
//   font-weight: 500;
//   font-family: Montserrat;
//   text-decoration-line: underline;
// `;
// const ForgotPassword = styled.div`
//   display: contents;
//   color: #3a548f;
//   font-size: 11px;
//   font-weight: 500;
//   font-family: Montserrat;
//   text-decoration-line: underline;
// `;
// const Text10 = styled.div``;
