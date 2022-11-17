import React, { useState } from "react";
import PageTemplate from "../../templates/PageTemplate.tsx";
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import * as style from "./auth.module.css";

type User = { authToken: string, accessLevel: string, name: string };
type Auth = { authToken: string, accessLevel: string };

type UserProps = { user: User };
type AuthProps = { auth: Auth, addArrow: (ar: AddArrowProps) => void };
type AddArrowProps = { start: string, end: string };

const users: User[] = [
  { authToken: '1234a', accessLevel: '1', name: 'Joe' },
  { authToken: '1234b', accessLevel: '2', name: 'Bob' },
  { authToken: '1234c', accessLevel: '3', name: 'Harold' },
  { authToken: '1234d', accessLevel: '4', name: 'Nick' }
]
const auths: Auth[] = users.map(({ name, ...authInfo }) => authInfo)

const Users = ({ user }: UserProps) => {
  return (
    <div className={style.User} id={`User${user.name}`} onDragStart={(e) => {
      e.dataTransfer.setData("arrow", `${user.authToken}|User${user.name}`);
    }}>
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

const Auths = ({ auth, addArrow }: AuthProps) => {
  return (
    <div className={style.Auth} id={auth.authToken} onDragOver={e => e.preventDefault()} onDrop={e => {
      const arrowData: string[] = e.dataTransfer.getData("arrow").split('|')
      if (arrowData[0] === auth.authToken) {
        const refs = { start: arrowData[1], end: auth.authToken };
        addArrow(refs);
        console.log("droped!", refs);
      }
    }}>
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

  const [arrows, setArrows] = useState([{ start: "", end: "" }]);
  const AddArrow = ({ start, end }: AddArrowProps) => {
    setArrows([...arrows, { start, end }]);
  };
  return (
    <div className={style.BlockContainer}>
      <Xwrapper>
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
                <Auths auth={auth} addArrow={AddArrow} key={index} />
              );
            })
          }
        </div>
        {arrows.map(ar => (
          <Xarrow start={ar.start} end={ar.end} />
        ))}

      </Xwrapper >

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
