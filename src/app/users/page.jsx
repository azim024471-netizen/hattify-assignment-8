import { Suspense } from "react";
import UsersList from "../components/user/UsersList";

  
const getuser = async ()=> {
    const res = await fetch ('http://localhost:4444/users');

    return res.json()
}

const UserPage = () => {
   
    const userPromise = getuser();
     
    return (
        <div>
            <h2>Users with suspencr</h2>
            <Suspense fallback={<div>Loading.......</div>}>
            <UsersList userPromise={userPromise}>

            </UsersList>
             </Suspense>
        </div>
    );
};
  
export default UserPage;