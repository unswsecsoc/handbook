import * as React from "react";
import PageTemplate from "../../templates/PageTemplate.tsx";
import * as style from "./auth.module.css"


type User = { authToken: string, accessLevel: string, name: string };
const users: User[] = [
  { authToken: '1234a', accessLevel: '1', name: 'Joe' },
  { authToken: '1234b', accessLevel: '2', name: 'Bob' },
  { authToken: '1234c', accessLevel: '3', name: 'Harold' },
  { authToken: '1234d', accessLevel: '4', name: 'Nick' }
]

type UserProps = { user: User }

const Users = ({ user }: UserProps) => {
  return (
    <div className={style.User} id={style[`User${user.name}`]}>
      <img src={require(`./images/${user.name}.png`).default} className={style.userImages} alt={`${user.name}`}></img>
      <div className={style.UserInfo}>
        <b>{user.name}</b>
        <p>
          Authentication token<br></br>
          {user.authToken}<br></br>
        </p>
        <p>
          Authorisation level<br></br>
          {user.accessLevel}<br></br>
        </p>
      </div>
    </div >
  );
}

const Cards = () => {
  return (
    <div className={style.BlockContainer}>
      <div className={style.Users}>
        {
          users.map((user, index) => {
            return (
              <Users user={user} key={index} />
            );
          })
        }
      </div>

    </div >
  );
}

const AuthPage = () => {
  return (
    <PageTemplate>
      <Cards />
    </PageTemplate>
  )
}

export default AuthPage;
