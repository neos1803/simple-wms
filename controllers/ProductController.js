require('dotenv').config()

const response = require('../helpers/response')

class ProductController {
  // uji coba routes berjalan dengan baik
  static async home(req, res){
    return res.status(200).json(response("Success", "Sukses akses!", "Hai from Product Controller"))
  }

  // static async getProducts(req, res){}

  // static async getProduct(req, res){}

  static async saveProduct(req, res){}

  // static async updateProduct(req, res){}

  // static async deleteProduct(req, res){}
}

module.exports = ProductController