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


const primaryOneBooks =[
    {
        grade:'Primary 1',
        subject:'Geography',
        type:'textbook',
        image:'books/geography/geography_1_textbook.png',
        url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Geography/Secondary%20Geography%20Student%20Textbooks/Secondary%20Geography%201%20Student%20Textbook.pdf',
    },
    {
        grade:'Primary 2',
        subject:'Geography',
        type:'textbook',
        image:'books/geography/geography_2_textbook.png',
        url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Geography/Secondary%20Geography%20Student%20Textbooks/Secondary%20Geography%202%20Student%20Textbook.pdf',
    },
    {
        grade:'Primary 3',
        subject:'Geography',
        type:'textbook',
        image:'books/geography/geography_3_textbook.png',
        url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Geography/Secondary%20Geography%20Student%20Textbooks/Secondary%20Geography%203%20Student%20Textbook.pdf',
    },
    {
        grade:'Primary 4',
        subject:'Geography',
        type:'textbook',
        image:'books/geography/geography_4_textbook.png',
        url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Geography/Secondary%20Geography%20Student%20Textbooks/Secondary%20Geography%204%20Student%20Textbook.pdf',
    },
]

// db.run('delete from books_db')

// primaryOneBooks.forEach(book => {
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
