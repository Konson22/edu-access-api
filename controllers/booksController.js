const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database("./database.db", sqlite.OPEN_READWRITE, err => err && console.log(err));


const getAllBooks = (req, res) => {
    try{
      db.all('SELECT * FROM books_db', [], (err, rows) => {
        if(err) throw err;
        res.json(rows)
      })
    }catch(error){
      console.log(error)
    }
}



module.exports = { getAllBooks }

const citizenshipBooks =[
  {
      grade:'Senior 1',
      subject:'Citizenship',
      type:'textbook',
      image:'books/citizenship/citizenship_1_textbook.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Citizenship/Secondary%20Citizenship%20Student%20Textbooks/Secondary%20Citizenship%201%20Student%20Textbook.pdf',
  },
  {
      grade:'Senior 2',
      subject:'Citizenship',
      type:'textbook',
      image:'books/citizenship/citizenship_2_textbook.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Citizenship/Secondary%20Citizenship%20Student%20Textbooks/Secondary%20Citizenship%202%20Student%20Textbook.pdf',
  },
  {
      grade:'Senior 3',
      subject:'Citizenship',
      type:'textbook',
      image:'books/citizenship/citizenship_3_textbook.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Citizenship/Secondary%20Citizenship%20Student%20Textbooks/Secondary%20Citizenship%203%20Student%20Textbook.pdf',
  },
  {
      grade:'Senior 4',
      subject:'Citizenship',
      type:'textbook',
      image:'books/citizenship/citizenship_4_textbook.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Citizenship/Secondary%20Citizenship%20Student%20Textbooks/Secondary%20Citizenship%204%20Student%20Textbook.pdf',
  },
  
]
// db.run('delete from books_db where category="Primary"')

// citizenshipBooks.forEach(book => {
//   sql = `INSERT INTO books_db(
//     category,
//     grade,
//     subject,
//     type,
//     cover_image,
//     file_path
//   ) VALUES(?,?,?,?,?,?)`;
//   db.run(sql, [
//     'Secondary',
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

