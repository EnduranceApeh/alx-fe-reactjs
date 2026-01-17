import UserContext from "./UserContext";
import { useContext } from "react";

const UserProfile = (props) => {
  const { name, age, bio } = useContext(UserContext);

   return (
     <div>
       <h2>{name}</h2>
       <p>Age: {age}</p>
       <p>Bio: {bio}</p>
     </div>
   );
 };

 export { UserProfile };