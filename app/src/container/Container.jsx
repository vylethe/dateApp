import React from "react"
import Game from "../components/game/Game"
import io from "socket.io-client";
import {eventsList, API_URL} from '../config/constants';
import { useSelector } from "react-redux"
// import { useDispatch, useSelector } from "react-redux"
// import PrivateRoute from "../routes/PrivateRoute"
// import routes from "../routes/routes"
// import { useEffect } from "react"
// import { fetchLoggedUser } from "../features/userSlice"
// import Header from "./../components/header/Header"
// import { Switch } from "react-router"

let socket;
const Container = () => {
  // const dispatch = useDispatch()
  // const loggedUser = useSelector((state) => state.user.loggedUser)
  // useEffect(() => {
  //   dispatch(fetchLoggedUser())
  // }, [dispatch])

  const user = {
    gender: 0,
    age_from: 18,
    age_to:  65,
    age: 25,
    longitude: '34.097492507602645',
    latitude: '44.9444580078125',
    distance: 25000,
    first_name: 'girl2'
  };

  const token = useSelector((state) => state.auth.token)
  console.log(`token: ${token}`)

  const playGameInit = () => {
    socket = io(API_URL, {
      query: `token=${token}`
    });

    socket.emit(eventsList.GAME_PLAYER_INIT, user, (error) => {
      if (error) alert(error);
    });
  }

  return (
    <>
      <Game playGameInit={playGameInit}/>
    </>
  )
}

export default Container
