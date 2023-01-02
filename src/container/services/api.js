import instance from "./provider";
import axios from 'axios'


export const Auth = {
    signin: async (data) => {
        console.log(data)
        return await axios.post('https://ondegooltd.cyclic.app/v1/auth/signin', data).then((res) => {
            // console.log(res.data)
            return res.data
        }
        ).catch((err) => console.log(err))
    },
    signup: async (data) => {
        return await axios.post('https://ondegooltd.cyclic.app/v1/auth/signup', data).then((res) => { return res.data }).catch((err) => err)
    }
}

export const User = {
    getAllUsers: async () => {
        return await instance.get('/user').then((res) => { return res.data }).catch((err) => err)
    },
    getUserProfile: async () => {
        return await instance.get('/user/me').then((res) => { return res.data }).catch((err) => err)
    },
    getUserById: async (id) => {
        return await instance.get(`/user/${id}`).then((res) => { return res.data }).catch((err) => err)
    },
    createUser: async (data) => {
        return await instance.post('/user', data).then((res) => { return res.data }).catch((err) => err)
    },
    updateUser: async (id, data) => {
        return await instance.patch(`/user/${id}`, data).then((res) => { return res.data }).catch((err) => err)
    }
}

export const Orders = {
    getAllOrders: async () => {
        return await instance.get('/order').then((res) => { return res.data }).catch((err) => err)
    },
    getOrderById: async (id) => {
        return await instance.get(`/order/${id}`).then((res) => { return res.data }).catch((err) => err)
    },
    createOrderByAdmin: async (data) => {
        return await instance.post('/order/new', data).then((res) => { return res.data }).catch((err) => err)
    },
    updateOrder: async (id, data) => {
        return await instance.patch(`/order/${id}`, data).then((res) => { return res.data }).catch((err) => err)
    }
}

export const Cylinder = {
    getAllCylinders: async () => {
        return await instance.get('/cylinder').then((res) => { return res.data }).catch((err) => err)
    },
    getCylinderById: async (id) => {
        return await instance.get(`/cylinder/${id}`).then((res) => { return res.data }).catch((err) => err)
    },
    createCylinder: async (data) => {
        return await instance.post('/cylinder/new', data).then((res) => { return res.data }).catch((err) => err)
    },
    updateCylinder: async (id, data) => {
        return await instance.patch(`/cylinder/${id}`, data).then((res) => { return res.data }).catch((err) => err)
    },
    deleteCylinder: async (id) => {
        return await instance.delete(`/cylinder/${id}`).then((res) => { return res.data }).catch((err) => err)
    }
}

export const Roles = {
    getAllRoles: async () => {
        return await instance.get('/role').then((res) => { return res.data }).catch((err) => err)
    },
    getRoleById: async (id) => {
        return await instance.get(`/role/${id}`).then((res) => { return res.data }).catch((err) => err)
    },
    createRole: async (data) => {
        return await instance.post('/role/new', data).then((res) => { return res.data }).catch((err) => err)
    },
    updateRole: async (id, data) => {
        return await instance.patch(`/role/${id}`, data).then((res) => { return res.data }).catch((err) => err)
    },
    deleteRole: async (id) => {
        return await instance.delete(`/role/${id}`).then((res) => { return res.data }).catch((err) => err)
    }
}

export const Campus = {
    getAllCampuses: async () => {
        return await instance.get('/campus').then((res) => { return res.data }).catch((err) => err)
    },
    getCampusById: async (id) => {
        return await instance.get(`/campus/${id}`).then((res) => { return res.data }).catch((err) => err)
    },
    createCampus: async (data) => {
        return await instance.post('/campus/new', data).then((res) => { return res.data }).catch((err) => err)
    },
    updateCampus: async (id, data) => {
        return await instance.patch(`/campus/${id}`, data).then((res) => { return res.data }).catch((err) => err)
    },
    deleteCampus: async (id) => {
        return await instance.delete(`/campus/${id}`).then((res) => { return res.data }).catch((err) => err)
    }
}