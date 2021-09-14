import { Link } from "react-router-dom";
import Members from "../../components/members";


const Home = () => {


  return (
    <div>
      <ul>
        {Members.map((members) => (
          <li>
            {members.type === "pj" ? (
              <Link to={`/company/${members.id}`}> {members.name} </Link>
            ) : (
              <Link to={`/customer/${members.id}`}> {members.name} </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

