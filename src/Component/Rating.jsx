
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const star = ({ star }) => {



  const renderStars = (star)=>{
    const stars = [];

    for(let i= 1; i <= 5; i++){

      if(i <= star){
          

        stars.push(<FaStar style={{ color: "gold" }} />)
      }
     else if(i === Math.ceil(star) && !Number.isInteger(star)){
        stars.push(<FaStarHalfAlt style={{ color: "gold" }}  />)
        
      }
      else if(i >= star ){
        
        stars.push(<AiOutlineStar style={{ color: "gold" }} />)
      }

    }

    return stars

  }

  return (
    <div>
      <span>{renderStars(star)}</span>
    </div>
  );
};

export default star;
