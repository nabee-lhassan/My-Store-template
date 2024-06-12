import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPop } from "../redux/Slice/PopSlice";




export default function Sidebar(Props) {

  const dispatch = useDispatch();

  const ehn = ()=>{
    if (setPop(false)){

      dispatch(setPop(false))
      
    }
  }

  


  return (Props.trigger) ? (
    <div className="popup" onClick={()=> {Props.setTriger(false), ehn()}} >
        <div className="inner-popup" onClick={(e)=>{e.stopPropagation()}}>
            {Props.children}
            <div className="div-btn">
            <Link to={'/cart'} onClick={()=> {  Props.setTriger(false),ehn()}} >{Props.title_btn}</Link>
            <div className="" style={{cursor:'pointer'}} onClick={()=> {Props.setTriger(false), ehn()}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
</svg>
            </div>
            </div>
        </div>

    
    </div>
  ) :"";
}
