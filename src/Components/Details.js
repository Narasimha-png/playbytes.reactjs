import Details from "../Assets/Details.png";
import { useState , useEffect } from "react";
import Plus from "../Assets/plus.png";
import "../Styles/Details.css";
import User1 from "../Assets/User1.png";
import Sendbtn from "../Assets/sendbtn.png";
import { useNavigate , useParams } from "react-router-dom";
import Data from "../DataBase/home";

const Back = () => {
  const navigate = useNavigate();
  return (
    <svg
      onClick={() => {
        navigate("/questions");
      }}
      className="back-btn"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 19.939L8 12.939L15 5.93896"
        stroke="#3D3D3D"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const Header = () => (
  <div className="grey-light big-text header-div header-answers">
    {" "}
    <Back /> QUESTIONS
  </div>
);

const HeaderIntro = () => {
    const {id} = useParams() ;
    const Question = Data[id]?.question;
    return (
  <div className="main-div">
    <div className="question-text-ans">
     {Question}
    </div>
    <div className="person-img-details">
      <img className="header-img" src={Details}></img>
    </div>
    <div className="add-tag">
      <p> View more questions on this topic</p>
      <img className="plus-img" src={Plus}></img>
    </div>
  </div>
);
}
const User1Msgs = () => (
  <div className="sender-div">
    <div>
      <img className="user1-img" src={User1}></img>
    </div>
    <div className="sender-msgs">
      <div className="ans-text ans-one">
        <span className="sender-name">John Smith</span>
        I'd love to have Mr. Bean as my roommate!
      </div>
      <div className="ans-text two">
        He's hilarious and always finds a way to <br></br>
        make everyday life an adventure.
      </div>
    </div>
  </div>
);

const SentTemplate = ({msg}) => (
    <div className="ans-text ans-two change-color">
   {msg}
  </div>
)

const SendServer = ({listMsgs}) => {
  useEffect(() => {
    const messagesContainer = document.querySelector('.father-div');
    if (messagesContainer) {
      setTimeout(() => {
        messagesContainer.scrollTop = messagesContainer.scrollTop + 40;
      }, 0);
    }
  }, [listMsgs]); 

  return(<div key="23" className="sender-div send-server">
    
    <div className="sender-msgs send-server-msgs">
      <div className="ans-text ans-one change-color">
        <span className="sender-name change-sender">John Doe</span>
        I'd choose to room with Tony Stark, a.k.a. <br></br>
        Iron Man. Imagine the perks! A high-tech  <br/>
        apartment, a personal AI assistant (Jarvis), <br></br>
        and endless tech gadgets to play with.
      </div>
      {
        listMsgs.map((msg , index)=>(
            <SentTemplate msg={msg} />
        ))
      }
     
    </div>
    <div>
      <img className="user1-img" src={User1}></img>
    </div>
  </div>)
};

const Message = ({inputMsg , setInputMsg , setListMsgs}) => {
  return (
    <div className="send-msg-div">
      <input value={inputMsg} onInput={(e)=>{
        setInputMsg(e.target.value) ;
      }}
      onKeyUp={(e)=>{
        if( e.key === "Enter"){
            if( inputMsg.trim() === ""){
                alert("Enter some text") ;
                return ;
    
            }
                
            setListMsgs((prevList)=>([...prevList , inputMsg.trim() ]) 
            )
            setInputMsg("") ;

        }
      }}
        className="msg-text"
        type="text"
        placeholder="Type a message"
      ></input>
      <img onClick={(e)=>{
        if( inputMsg.trim() === ""){
            alert("Enter some text") ;
            return ;

        }
            
        setListMsgs((prevList)=>([...prevList , inputMsg.trim() ]) 
        )
        setInputMsg("") ;
      }} className="send-btn" src={Sendbtn}></img>
    </div>
  );
};
const Discuss = () => {
    const [inputMsg , setInputMsg] = useState("") ;
    const [listMsgs , setListMsgs] = useState([]) ;
    return (
  <>
    <Header />
    <div className="father-div">
    <HeaderIntro />
    <User1Msgs />
    <SendServer listMsgs={listMsgs} />
    </div>
    <Message inputMsg={inputMsg} setInputMsg={setInputMsg} setListMsgs={setListMsgs} />
  </>
);
}
export default Discuss;
