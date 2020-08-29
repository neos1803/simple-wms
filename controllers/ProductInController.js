require('dotenv').config()

const {
  Product,
  Product_In
} = require("../models")
const response = require('../helpers/response')

const attProductIn = ['date', 'total']
const attProduct = ['name', 'photo_url', 'stock', 'price']

class ProductInController {
  // uji coba routes berjalan dengan baik
  static async home(req, res){
    return res.status(200).json(response("Success", "Sukses akses!", "Hai from ProductIn Controller"))
  }

  // static async getProductIns(req, res){}

  static async getProductIn(req, res){
    const {
      id
    } = req.params
    const productinget = await Product_In.findByPk(
      id, {
        attributes: attProductIn,
        included: [{
          model: Product,
          attributes: attProduct
        }]
      }
    )

    try {
      if (productinget) {
        return res.status(200).json(response("Success", "Data product ditemukan!", productget))
      } else {
        return res.status(400).json(response("Failed!", "Data product tidak ditemukan!", ''))
      }
    } catch (error) {
      return res.status(404).json(response("Failed", error.message, ''))
    }
  }

  // static async saveProductIn(req, res){}

  // static async updateProductIn(req, res){}

  // static async deleteProductIn(req, res){}
}

module.exports = ProductInController