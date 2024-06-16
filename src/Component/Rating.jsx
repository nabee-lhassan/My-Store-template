import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";



export default function Rating(Props) {



  return (
    <div>
      <FaStar/>
      <FaStarHalfAlt/>
      <AiOutlineStar/>
      <span>{Props.star}</span>
    </div>
  )
}
