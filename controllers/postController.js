const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database("./database.db", sqlite.OPEN_READWRITE, err => err && console.log(err));


const getAllPosts = (req, res) => {
  try{
    db.all('SELECT * FROM posts', [], (err, rows) => {
      if(err) throw err;
      res.json(rows)
    })
  }catch(error){
    console.log(error)
  }
}

// ADD NEW  POST
const createPost = async (req, res) => {
  try {
    const { username, text, avatar } = req.body;
    sql = 'INSERT INTO posts(username, text, avatar) VALUES(?,?,?)'
    db.run(sql, [username, text, avatar], async function(err) {
        if(err) throw err
        res.json({id:this.lastID, username, text, avatar })
    })
  } catch (error) {
    res.send('Error')
  }
}

// db.run('delete from posts')


const getAllPostsComments = (req, res) => {
  try{
    db.all('SELECT * FROM comments_db', [], (err, rows) => {
      if(err) throw err;
      res.json(rows)
    })
  }catch(error){
    console.log(error)
  }
}


const postComment = async (req, res) => {
  try {
    const { postId, username, text, avatar } = req.body;
    sql = 'INSERT INTO comments_db(postId, username, text, avatar) VALUES(?,?,?,?)'
    db.run(sql, [postId, username, text, avatar], async function(err) {
        if(err) throw err
        res.json({id:this.lastID, username, text, avatar })
    })
  } catch (error) {
    res.send('Error')
  }
}


module.exports = { getAllPosts, createPost, postComment, getAllPostsComments }
