require('dotenv').config()

const { users } = require("../models")
const response = require('../helpers/response')

const attUser = ['full_name', 'username', 'email', 'phone_number', 'role']

class UserController {
  // uji coba routes berjalan dengan baik
  static async home(req, res){
    return res.status(200).json(response("Success", "Sukses akses!", "Hai from User Controller"))
  }

  // static async getUsers(req, res){}

  static async getUser(req, res){
    const { id } = req.params
    const userget = await users.findByPk(
      id, { attributes: attUser }
    )

    try {
      if (userde) {
        
      } else {
        
      }
    } catch (error) {
      
    }
  }

  // static async saveUser(req, res){}

  // static async updateUser(req, res){}

  // static async deleteUser(req, res){}
}

module.exports = UserController