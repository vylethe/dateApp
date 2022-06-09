import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authApi from "../services/authApi"
import { eraseCookie, setCookie } from "../utils/cookie"

// export const fetchRegister = createAsyncThunk(
//   "user/fetchRegister",
//   async (formData, { rejectWithValue }) => {
//     try {
//       return await authApi.register(formData)
//     } catch (error) {
//       if (error?.response?.data) {
//         throw rejectWithValue(error.response.data.message)
//       }
//     }
//   }
// )

export const fetchVerify = createAsyncThunk(
  "user/fetchVerify",
  async (formData, { rejectWithValue }) => {
    try {
      return await authApi.verify(formData)
    } catch (error) {
      if (error?.response?.data) {
        throw rejectWithValue(error.response.data.message)
      }
    }
  }
)

export const fetchLogin = createAsyncThunk(
  "user/fetchLogin",
  async (formData, { rejectWithValue }) => {
    try {
      return await authApi.login(formData)
    } catch (error) {
      if (error?.response?.data) {
        throw rejectWithValue(error.response.data.message)
      }
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isAuth: false,
    code: "",
    token: "",
    errorMessage: "",
    changePasswordMessage: null,
    register: {
      id: null,
      status: false,
    },
  },
  reducers: {
    logout: (state) => {
      eraseCookie()
      state.isAuth = false
    },
    deleteErrorMessage: (state) => {
      state.errorMessage = ""
    },

    deleteChangePasswordMessage: (state) => {
      state.changePasswordMessage = null
    },
    editChangePasswordMessage: (state, action) => {
      state.changePasswordMessage = action.payload.message
    },
  },

  extraReducers: (builder) => {
    // builder.addCase(fetchRegister.fulfilled, (state, action) => {
    //   setCookie("userId", action.payload.token, 30)
    //   state.isAuth = true
    //   state.errorMessage = ""
    // })

    // builder.addCase(fetchChangePassword.rejected, (state, action) => {
    //   state.changePasswordMessage = action.payload
    // })

    // builder.addCase(fetchChangePassword.fulfilled, (state, action) => {
    //   state.changePasswordMessage = action.payload.message
    // })

    // builder.addCase(fetchRegister.rejected, (state, action) => {
    //   state.isAuth = false
    //   state.errorMessage = action.payload
    // })

    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      // setCookie("userId", action.payload.token, 30)
      // state.isAuth = true
      state.code = action.payload.code
      console.log(action)
      state.errorMessage = ""
    })

    builder.addCase(fetchLogin.rejected, (state, action) => {
      // state.isAuth = false
      state.errorMessage = action.payload
    })

    builder.addCase(fetchVerify.fulfilled, (state, action) => {
      // setCookie("userId", action.payload.token, 30)
      // state.isAuth = true
      console.log(action)
      state.token = action.payload.token
      state.errorMessage = ""
    })

    builder.addCase(fetchVerify.rejected, (state, action) => {
      // state.isAuth = false
      state.errorMessage = action.payload
    })
  },
})

export const {
  logout,
  deleteErrorMessage,
  editChangePasswordMessage,
  deleteChangePasswordMessage,
} = userSlice.actions
export default userSlice.reducer
