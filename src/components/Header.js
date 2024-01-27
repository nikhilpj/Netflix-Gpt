import { useNavigate } from "react-router-dom"
import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";


const Header=()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store=> store.user)


    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid,email,displayName} = user
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          navigate('/browse')
          
        } else {
          dispatch(removeUser())
          navigate('/')
        }
      });
    },[]) 

    const handleSignOut=()=>{

        signOut(auth).then(() => {
            navigate('/')
          }).catch((error) => {
            navigate('/error')
          });
    }
    return(<div className="absolute px-8 py-2 bg-gradient-to-t from-black z-10 w-full flex justify-between">
        <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"></img>
       {user && <div className="flex p-2 ">
        <img alt="user-icon" className="w-12 h-12" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uDtPlCTKLnrQW_ipwKsCJAHaHa%26pid%3DApi&f=1&ipt=e9bb9513d8da8352e3ec7e982474008193fb8068a354032275fcabd00973179d&ipo=images"/>
        <button className="font-bold text-white " onClick={handleSignOut}>Sign out</button>
        </div>}
    </div>)
}

export default Header