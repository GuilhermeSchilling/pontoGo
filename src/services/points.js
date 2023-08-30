import axios from "axios"

const pointsAPI = axios.create({baseURL:"http://localhost:9009/"})

//servico de metodo get para pegar todos registros de pontos

async function getAllUsersPoints(){
    const response = await pointsAPI.get("/admindashboard")
    return response.data
}

export {
    getAllUsersPoints,
    
}