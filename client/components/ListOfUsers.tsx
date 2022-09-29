import React from "react";
import { GET_ALL_USERS } from "../Graphql/Queries";
import { DELETE_USER } from "../Graphql/Mutations";
import { useQuery, useMutation} from "@apollo/client";

function ListOfUsers() {
  const { data } = useQuery(GET_ALL_USERS);
  const [deleteUser] = useMutation(DELETE_USER)
  
  return (
    <div>
      <h3>DB users</h3>
      {data &&
        data.getAllUsers.map((user: any) => {
          return (
            <div >
              {user.name} : {user.username}

            </div>
          );
        })}
    </div>
  );
}

export default ListOfUsers;