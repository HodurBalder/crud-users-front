import Api from '@/services/Api'

export default {
    createUser(data){
        return Api().post(`/users`, data )
    },

    getUsers(){
        return Api().get('/users')
    },

    getUser(id){
        return Api().get(`/users/${id}`)
    },

    updateUser(id, data){
        return Api().put(`/users/${id}`, { ...data })
    },

    deleteUser(id){
        return Api().delete(`/users/${id}`)
    }
}