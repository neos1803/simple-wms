require('dotenv').config()

const {
  User,
  Product
} = require("../models")
const response = require('../helpers/response')

const attUser = ['full_name', 'username', 'email', 'phone_number', 'role']
const attProduct = ['name', 'photo_url', 'stock', 'price']

class ProductController {
  // uji coba routes berjalan dengan baik
  static async home(req, res) {
    return res.status(200).json(response("Success", "Sukses akses!", "Hai from Product Controller"))
  }

  // static async getProducts(req, res){}

  static async getProduct(req, res) {
    const {
      id
    } = req.params
    const productget = await Product.findByPk(
      id, {
        attributes: attProduct,
        included: [{
          model: User,
          attributes: attUser
        }]
      }
    )

    try {
      if (productget) {
        return res.status(200).json(response("Success", "Data product ditemukan!", productget))
      } else {
        return res.status(400).json(response("Failed!", "Data product tidak ditemukan!", ''))
      }
    } catch (error) {
      return res.status(404).json(response("Failed", error.message, ''))
    }
  }

  // static async saveProduct(req, res){}

  // static async updateProduct(req, res){}

  // static async deleteProduct(req, res){}
}

module.exports = ProductController