import React, { use } from 'react';

const UsersList = ({userPromise}) => {
    const user = use(userPromise)
    console.log(user)
    return (
        <div>
          user : {user.length}
        </div>
    );
};

export default UsersList;



