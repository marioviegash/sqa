var db = require('../models/index');

async function getData(_, res, _) {
  var data = await db['User'].get();
  return res.status(200).json({
    code: 200,
    status: 'SUCCESS',
    message: 'Success Get Data',
    data,
  });
}

async function addData(req, res, _) {
  var data = req.body;
  await db['User'].add(data.name);
  return res.status(201).json({
    code: 201,
    status: 'SUCCESS',
    message: 'Success Add Data',
  });
}

module.exports = {
  getData,
  addData,
}