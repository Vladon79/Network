import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "89087f1a-df84-4609-ac91-9f089fdba243"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
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
        return instance.get(`profile/` + userID
        ).then(response => response.data)
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
        .then(response => response.data)
    }
}
