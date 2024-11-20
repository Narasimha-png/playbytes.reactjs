import "../Styles/Home.css" ;
import HomePerson from "../Assets/HomePersons.png"
import Persons from "../Assets/persons.png" ;
import Data from "../DataBase/home";
import { useNavigate } from "react-router-dom";
console.log(Data) ;
const Header = ()=>(
    <div className="grey-light big-text header-div">QUESTIONS</div>
)
const Person = ()=>(
   <img className="person-img" src={HomePerson}></img>
)
const PrevQuestion = () => (
    <div className="previous-div">
        <div className="grey-light small-text">
            PREVIOUS QUESTIONS
        </div>
        <div className="line-div"></div>
    </div>
)

const QuestionDiv = ({Relation , index})=> {
    const navigate = useNavigate() ;
    return(
    <div onClick={(e)=>{
        navigate("/questions/" + Relation.index + "/details") ; 
    }
    } className="person-div" key={index}>
        <Person />
        <div className="person-aside-div">
            <div className="question-text">
            {Relation.question}
            </div>
            <div className="subquestion-text">
            <span className="friends-anchor">{Relation.people} of your friends </span > &nbsp;  answered this question
           
                <img  className="person-likes" src={Persons}></img>
        
            </div>
        </div>
    </div>
)
}
const HomeInfo = ()=>(
    <div className="home-info">
    <PrevQuestion />
    {
        Data.map((Relation , index)=>(
            <QuestionDiv Relation = {Relation} index={index}  />
        ))
    }
    
    </div>
)
const HomeDiv = ()=> (
    <>
    <Header />
    <HomeInfo />
    </>
)
export default HomeDiv ;