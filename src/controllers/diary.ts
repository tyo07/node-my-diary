let Database = require('../helpers/database'), dbConfig = require('../config/config'), dbConnection = new Database(dbConfig)


exports.edit = function(req, res) {
  res.send('this is edit post endpoint');
};

exports.delete = function(req, res) {
  res.send('this is delete post endpoint');
};


exports.add = async function (req, res) {
  // call with promise
  const result = await dbConnection.execute('SELECT post_id  FROM node_diary.diary WHERE post_id=?', [1], {prepare: true});
  console.log('select data from cassandra db ' + result.rows[0].post_id);

  // call with callback
  callDb(function (err, result) {
    if (err) {
      console.log("ERROR: ", err)
    } else {
      console.log('got user profile with email ' + result.rows[0].post_id);
    }
  });
  res.send('this is add post endpoint');

};


function callDb(callback)
{
  let query = 'SELECT post_id  FROM node_diary.diary WHERE post_id=?';
  dbConnection.execute(query, [1], { prepare : true }, function(err, result) {
    if(err)
      callback(err, null)
    else
      callback(null, result)
  });
}



