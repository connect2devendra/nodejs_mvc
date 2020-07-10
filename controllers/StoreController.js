const db = require('../models/index');
/**
 * Class Stores Controller
 */
class StoreController {
  /**
   * List of Stores
   * @param {*} req
   * @param {*} res
   */
  list(req, res) {
    db.Store.findAll()
    .then( userResponse => {
      // res.status( 200 ).json( userResponse )
      res.render('stores/list',{page_title:"Stores List", data:userResponse});
    })
    .catch( error => {
      res.status( 400 ).send( error )
    })
  }
  /**
   * Crea te a article Form
   * @param {*} req
   * @param {*} res
   */
  create(req, res) {
    return res.render("stores/create",{ title: 'Create New Store.' });
  }
  /**
   * Store a new article in database
   * @param {*} req
   * @param {*} res
   */
  store(req, res) {
    const name = req.body.store_name;
    const active = req.body.status;
    db.Store.create({'name':name,'active':active}).then(store => res.redirect("/stores/list"));
  }

  /**
   * Edit a article
   * @param {*} req
   * @param {*} res
   */
  edit(req, res) {
    const id = req.params.id;
    db.Store.findByPk(id).then(store =>
      res.render("stores/edit", { store })
    ); 
  }
  /**
   * Update a article in database
   * @param {*} req
   * @param {*} res
   */
  update(req, res) {
    const id = req.params.id;
    const name = req.body.store_name;
    const active = req.body.status;
    db.Store.update({'name':name,'active':active}, { where: { id } }).then(store =>
      res.redirect("/stores/list")
    );
  }
  /**
   * Remove an article in database
   * @param {*} req
   * @param {*} res
   */
  delete(req, res) {
    const id = req.params.id;
    db.Store.destroy({
      where: { id }
    }).then(() => res.redirect("/stores/list"));
  }

  /**
   * Show a article
   * @param {*} req
   * @param {*} res
   */
  show(req, res) {
    // const id = req.params.id;
    // db.Articles.findById(id).then(article =>
    //   res.render("articles/show", { article })
    // );
  }

  /**
   * Render visible
   * @param {*} req
   * @param {*} res
   */
  visible(req, res) {
    // const id = req.params.id;
    // db.Articles.findById(id).then(article =>
    //   article
    //     .update({ active: 1 })
    //     .then(result => res.redirect("/articles/liste"))
    // );
  }

  /**
   * Render invisible an article
   * @param {*} req
   * @param {*} res
   */
  invisible(req, res) {
    // const id = req.params.id;
    // db.Articles.findById(id).then(article =>
    //   article
    //     .update({ active: 0 })
    //     .then(result => res.redirect("/articles/liste"))
    // );
  }
}

module.exports = StoreController;
