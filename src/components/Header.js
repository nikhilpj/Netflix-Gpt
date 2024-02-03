import { useNavigate } from "react-router-dom"
import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO,USER_ICON } from "../utils/constants";



const Header=()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store=> store.user)


    useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid,email,displayName} = user
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          navigate('/browse')
          
        } else {
          dispatch(removeUser())
          navigate('/')
        }
      });
      return ()=> unsubscribe()
    },[]) 

   

    const handleSignOut=()=>{

        signOut(auth).then(() => {
            navigate('/')
          }).catch((error) => {
            navigate('/error')
          });
    }
    return(<div className="absolute px-8 py-2 bg-gradient-to-t from-black z-10 w-full flex justify-between">
        <img className="w-44" src={LOGO} alt="logo"></img>
       {user && <div className="flex p-2 ">
       
        <img alt="user-icon" className="w-12 h-12" src={USER_ICON}/>
        <button className="font-bold text-white " onClick={handleSignOut}>Sign out</button>
        </div>}
    </div>)
}

export default Header