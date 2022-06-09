import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import Authen from "../components/login/Login"
// import { logInSchema } from "../components/login/schema"
import { fetchLogin, fetchVerify } from "../features/authenticationSlice"

const LoginPage = () => {
  
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.token)
  const navigate = useNavigate()

  // useEffect(() => {
  //   dispatch(deleteErrorMessage())
  // }, [dispatch])

  useEffect(() => {
    if (isAuth) {
      navigate("/")
    }
  }, [navigate, isAuth])

  const handleSubmitForm = async (formData) => {
    console.log('before run API Login', formData)
    dispatch(fetchLogin(formData))

  }

  const handleVerfyForm = async (formData) => {
    console.log('before run API Verify', formData)
    dispatch(fetchVerify(formData))
  }

  return (
    <div className="py-6 mt-54">
      <div className="grid grid-cols-1 gap-6 ins:grid-cols-2 mx-auto w-full ins:w-750">
        {/* <div className="hidden ins:flex justify-end">
          <img className="transform" src={mobilePhone} alt="" />
        </div> */}
        <div className="mt-6 w-350 mx-auto">
          <Authen
            handleSubmitForm={handleSubmitForm}
            handleVerfyForm={handleVerfyForm}
            // schema={logInSchema}
          />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
