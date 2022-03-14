import axios from "axios";
import {LoginFormPropsType} from "../Components/Login/LoginForm/LoginForm";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "89087f1a-df84-4609-ac91-9f089fdba243"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${30}`,
        ).then(response => response.data)
    },
    followToUser(id: number) {
        return instance.post(`follow/${id}`
        ).then(response => response.data)
    },
    unFollowToUser(id: number) {
        return instance.delete(`follow/${id}`
        ).then(response => response.data)
    },
    getProfile(userID: string) {
        return profileAPI.getProfile(userID)
    }
}

export const profileAPI = {
    getProfile(userID: string) {
        return instance.get(`profile/` + userID)
            .then(response => response.data)
    },
    getStatus(userID: string) {
        return instance.get(`profile/status/` + userID)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(formData: LoginFormPropsType) {
        return instance.post(`/auth/login`, formData)

    },
    logout() {
        return instance.delete(`/auth/login`)
            .then(response => response.data)
    }
}
