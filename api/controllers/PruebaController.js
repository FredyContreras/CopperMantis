/**
 * PruebaController
 *
 * @description :: Server-side logic for managing pruebas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `PruebaController.index()`
   */
  index: function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },
	mensaje: function (req, res) {
    return res.json({
      todo: 'un saludo nuevo'
    });
  }
};
