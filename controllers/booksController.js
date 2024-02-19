const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database("./database.db", sqlite.OPEN_READWRITE, err => err && console.log(err));


const getAllBooks = (req, res) => {
    try{
      db.all(`SELECT * FROM books_db where type = 'textbook'`, [], (err, rows) => {
        if(err) throw err;
        res.json(rows)
      })
    }catch(error){
      console.log(error)
    }
}



module.exports = { getAllBooks }


const mathBooks =[
  {
      grade:'Senior 1',
      subject:'Mathematics',
      type:'textbook',
      image:'books/mathematics/mathematics_1_textbook.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Mathematics/Secondary%20Mathematics%20Student%20Textbooks/Secondary%20Mathematics%201%20Student%20Textbook.pdf',
  },
  {
      grade:'Senior 2',
      subject:'Mathematics',
      type:'textbook',
      image:'books/mathematics/mathematics_2_textbook.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Mathematics/Secondary%20Mathematics%20Student%20Textbooks/Secondary%20Mathematics%202%20Student%20Textbook.pdf',
  },
  {
      grade:'Senior 3',
      subject:'Mathematics',
      type:'textbook',
      image:'books/mathematics/mathematics_3_textbook.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Mathematics/Secondary%20Mathematics%20Student%20Textbooks/Secondary%20Mathematics%203%20Student%20Textbook.pdf',
  },
  {
      grade:'Senior 4',
      subject:'Mathematics',
      type:'textbook',
      image:'books/mathematics/mathematics_4_textbook.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Mathematics/Secondary%20Mathematics%20Student%20Textbooks/Secondary%20Mathematics%204%20Student%20Textbook.pdf',
  },
  
]

// db.run('delete from books_db')

// mathBooks.forEach(book => {
//   sql = `INSERT INTO books_db(
//     category,
//     grade,
//     subject,
//     type,
//     cover_image,
//     file_path
//   ) VALUES(?,?,?,?,?,?)`;
//   db.run(sql, [
//     'Primary',
//     book.grade,
//     book.subject,
//     book.type,
//     book.image,
//     book.url
//   ], async err => {
//     if(err) throw err
//     console.log('done')
//   });
// });
