require('dotenv').config()

const response = require('../helpers/response')

class ProductInController {
  // uji coba routes berjalan dengan baik
  static async home(req, res){
    return res.status(200).json(response("Success", "Sukses akses!", "Hai from ProductIn Controller"))
  }

  // static async getProductIns(req, res){}

  // static async getProductIn(req, res){}

  static async saveProductIn(req, res){}

  // static async updateProductIn(req, res){}

  // static async deleteProductIn(req, res){}
}

module.exports = ProductInController