import axios from 'axios'

export default()=> {
    return axios.create({
        baseURL: 'https://crud-users-back.vercel.app',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "*",
            // "Access-Control-Allow-Headers": ""
            //'Authorization' : 'Basic cJmAc71jah17sgqi1jqaksvaksda='
        }
    })
}