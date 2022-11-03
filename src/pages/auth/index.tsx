import * as React from "react";
import PageTemplate from "../../templates/PageTemplate.tsx";
import * as style from "./auth.module.css"

type User = { authToken: string, accessLevel: string, name: string };
type Auth = { authToken: string, accessLevel: string };

type UserProps = { user: User };
type AuthProps = { auth: Auth };

const users: User[] = [
  { authToken: '1234a', accessLevel: '1', name: 'Joe' },
  { authToken: '1234b', accessLevel: '2', name: 'Bob' },
  { authToken: '1234c', accessLevel: '3', name: 'Harold' },
  { authToken: '1234d', accessLevel: '4', name: 'Nick' }
]
const auths: Auth[] = users.map(({ name, ...authInfo }) => authInfo)

const Users = ({ user }: UserProps) => {
  return (
    <div className={style.User} id={style[`User${user.name}`]}>
      <img src={require(`./images/${user.name}.png`).default} className={style.userImages} alt={`${user.name}`}></img>
      <div className={style.UserInfo}>
        <h1>{user.name}</h1>
        <p className={style['AuthToken']}>
          Authentication token<br></br>
          {user.authToken}<br></br>
        </p>
        <p className={style['AuthLevel']}>
          Authorisation level<br></br>
          {user.accessLevel}<br></br>
        </p>
      </div>
    </div >
  );
}

const Auths = ({ auth }: AuthProps) => {
  return (
    <div className={style.Auth} id={style[`${auth.authToken}`]}>
      <div className={style.AuthInfo}>
        <p className={style['AuthToken']}>
          Authentication token<br></br>
          {auth.authToken}<br></br>
        </p>
        <p className={style['AuthLevel']}>
          Authorisation level<br></br>
          {auth.accessLevel}<br></br>
        </p>
      </div>
    </div >)
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
      <div className={style.Auths}>
        {
          auths.map((auth, index) => {
            return (
              <Auths auth={auth} key={index} />
            );
          })
        }
      </div>
    </div>
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
