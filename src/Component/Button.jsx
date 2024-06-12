import { Link } from "react-router-dom";

export default function Button(Props) {
    
  return (
    <div>
      <Link className="main-button"  to={Props.goto}>{Props.name}</Link>
    </div>
  );
}
