const { response } = require("express")

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'api',
    password: 'admin',
    port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results)=>{
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserByID = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * from users where id = $1', [id], (error, results)=>{
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const {name, email} = request.body

    pool.query('INSERT INTO users (name, email) values ($1, $2)', [name, email], (error, results)=>{
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const updateUsers = (request, response) => {
    const id = parseInt(request.params.id)
    const {name, email} = request.body

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id],
        (error, results)=>{
            if(error){
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results)=>{
        if(error){
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getUsers,
    getUserByID,
    createUser,
    updateUsers,
    deleteUser
}