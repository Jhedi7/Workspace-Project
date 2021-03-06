const workspaceDb = require('../models/workspaces');

function getAll(req, res, next) {

  workspaceDb.getAll()
    .then(data=> {
      res.locals.workspaces = data;
      next();
    })
    .catch(next);
}



function getOne(req, res, next) {
  workspaceDb.getOne(req.params.id)
    .then(data=> {
      res.locals.workspace = data;
      next();
    })
    .catch(next);
}

function create(req, res, next) {
  workspaceDb.create({
    ...req.body,
    creator_id: res.locals.user && res.locals.user.id
  })
    .then(data=> {
      res.locals.workspace = data;
      next();
    })
    .catch(next);
}


function destroy(req, res, next) {
  workspaceDb.destroy(req.params.id)
    .then(()=>{
      next()
    })
    .catch(next);
}

function update(req, res, next) {
  workspaceDb.update(req.body)
    .then(data => {
      res.locals.workspace = data;
      next();
    })
    .catch(next);
}

module.exports = {
  getAll,
  create,
  getOne,
  destroy,
  update
};
