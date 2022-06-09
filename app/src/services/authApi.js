import axiosClient from "./axiosClient"

const authApi = {
  register: (formData) => {
    return axiosClient.post("users/register", formData)
  },

  login: (formData) => {
    console.log("run api")
    return axiosClient.post(`v1/auth/login`, formData)
  },
  
  changePassword: ({ id, newPassword, currentPassword }) => {
    return axiosClient.patch(`users/${id}/change-password`, {
      newPassword,
      currentPassword,
    })
  },

  verify: (formData) => {
    return axiosClient.post(`v1/auth/verify`, formData)
  },
}

export default authApi
