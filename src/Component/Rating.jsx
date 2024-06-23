
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const star = ({ star }) => {



  const renderStars = (star)=>{
    const stars = [];

    for(let i= 1; i <= 5; i++){

      if(i <= star){
          
        console.log('less then', 'i', i, 'star',star)

        stars.push(<FaStar style={{ color: "gold" }} />)
      }
     else if(i === Math.ceil(star) && !Number.isInteger(star)){
        stars.push(<FaStarHalfAlt style={{ color: "gold" }}  />)
        console.log('equal to', 'i', i, 'star',star)
        
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
