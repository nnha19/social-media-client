import axios from "axios";
import React from "react";

const Users = ({ users }) => {
  console.log("User page gets rendered");
  console.log(users);
  const usersList = users.map((u) => {
    return <div key={u._id}>{u.username}</div>;
  });
  return (
    <div>
      <h1>List of users</h1>
      {usersList}
    </div>
  );
};

export const getStaticProps = async () => {
  const resp = await axios({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`,
    method: "GET",
  });

  return {
    props: { users: resp.data },
    revalidate: 10,
  };
};

export default Users;
