import "../Styles/Login.css" ;
import Introduction from "../Assets/intro.png" ;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Ellipse = ()=>(
    <div className="blue-ellipse">
    </div>
)
const Intro = ()=> (
    <div className="intro-div">
        <div className="smaller-text-div">Know Your</div>
        <div className="bolder-text-div">Friends Better</div>
        <div><img className="login-intro-img" src={Introduction}></img></div>
    </div>
)

const LogInput = ()=> {
    const [userName , setUserName] = useState("") ; 
    const [backTrace , setbackTrace] = useState(false) ;
    const navigate = useNavigate() ;
    const [visible , setVisible] = useState(false) ;
    const [error , setError] = useState("") ;
    const [pwd , setPwd] = useState("") ;
    const [maskedPwd , setMaskedPwd] = useState("") ;
    function HandleInputPwd(e){
        if( visible ){
            setPwd(e.target.value) ;
         }
         else{
            setPwd(pwd + e.target.value[e.target.value.length-1]) ;
         }
        
         setMaskedPwd("*".repeat(pwd.length+1) ) ;
    }
    return(
    <div className="login-inputs">
        <p className="login-text"  >Join the Fun</p>
    <input onInput={(e)=>{
        setUserName(e.target.value) ;
    }} type="text" placeholder="UserName"></input>
    <div  className="password-input">
    <input className="pwd-input" type="text" placeholder="Password" onKeyDown={(e)=>{
        if( e.key == "Backspace"){
            setbackTrace(true) ;
            const newPwd = pwd.substring(0, pwd.length-1) ;
            setPwd(newPwd) ; 
            setMaskedPwd("*".repeat(newPwd.length))
        }
            
    }} 
     onInput={(e)=>{ 
        if( backTrace){
            setbackTrace(false) ;
            return ;
        }
        HandleInputPwd(e);
        
        }} value={visible ? pwd : maskedPwd }></input>
    <svg onClick={(e)=>{
        setVisible(!visible) ;
    }} className="eye-symbol" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 6.75C9.59674 6.75 10.169 6.98705 10.591 7.40901C11.0129 7.83097 11.25 8.40326 11.25 9C11.25 9.59674 11.0129 10.169 10.591 10.591C10.169 11.0129 9.59674 11.25 9 11.25C8.40326 11.25 7.83097 11.0129 7.40901 10.591C6.98705 10.169 6.75 9.59674 6.75 9C6.75 8.40326 6.98705 7.83097 7.40901 7.40901C7.83097 6.98705 8.40326 6.75 9 6.75ZM9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9C2.0475 5.7075 5.25 3.375 9 3.375ZM2.385 9C2.99119 10.2377 3.93248 11.2806 5.10186 12.0099C6.27124 12.7393 7.6218 13.126 9 13.126C10.3782 13.126 11.7288 12.7393 12.8981 12.0099C14.0675 11.2806 15.0088 10.2377 15.615 9C15.0088 7.76227 14.0675 6.71944 12.8981 5.99006C11.7288 5.26068 10.3782 4.87401 9 4.87401C7.6218 4.87401 6.27124 5.26068 5.10186 5.99006C3.93248 6.71944 2.99119 7.76227 2.385 9Z" fill="#4592EC"/>
   
 </svg>
  
    </div>
    <div className="error-msg">{error.length > 0 ? error : ""}</div>
  
   <button onClick={(e)=>{
     if (userName.length === 0) {
        setError("Username must be specified");
    } 
    else if (!/^[A-Za-z]+$/.test(userName)) {
        setError("Username must contain only alphabetic characters");
     
    } 
    else if (pwd.length < 8) {
        setError("Password must contain at least 8 characters.");
      } else if (!/[A-Z]/.test(pwd)) {
        setError("Password must contain at least one uppercase letter.");
      } else if (!/[0-9]/.test(pwd)) {
        setError("Password must contain at least one number.");
      } else if (!/[^A-Za-z0-9]/.test(pwd)) {
        setError("Password must contain at least one special character.");
      } else {
       navigate("/questions") ;
      }
   }} className="login-btn">Login</button>
    </div>
)
}
const Login = () => (
    <>
    <div className="login-main-div">
    <Ellipse />
    <Intro />
    </div>
    <LogInput />
    </>
    
)
export default Login ;
