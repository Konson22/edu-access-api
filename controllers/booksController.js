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



const chemistryBooks =[
  {
      grade:'Senior 1',
      subject:'Chemistry',
      type:'textbook',
      image:'books/chemistry/chemistry_1_textbook.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Chemistry/Secondary%20Chemistry%20Student%20Textbooks/Secpndary%20Chemistry%201%20Student%20Textbook.pdf',
  },
  {
      grade:'Senior 2',
      subject:'Chemistry',
      type:'textbook',
      image:'books/chemistry/chemistry_2_textbook.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Chemistry/Secondary%20Chemistry%20Student%20Textbooks/Secpndary%20Chemistry%202%20Student%20Textbook.pdf',
  },
  {
      grade:'Senior 3',
      subject:'Chemistry',
      type:'textbook',
      image:'books/chemistry/chemistry_2_textbook.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Chemistry/Secondary%20Chemistry%20Student%20Textbooks/Secpndary%20Chemistry%203%20Student%20Textbook.pdf',
  },
  {
      grade:'Senior 4',
      subject:'Chemistry',
      type:'textbook',
      image:'books/chemistry/chemistry_4_textbook.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Chemistry/Secondary%20Chemistry%20Student%20Textbooks/Secpndary%20Chemistry%204%20Student%20Textbook.pdf',
  },
  {
      grade:'Senior 1',
      subject:'Chemistry',
      type:'teacher guide',
      image:'books/chemistry/chemistry_1_teacher_guide.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Chemistry/Secondary%20Chemistry%20Teacher%20Guides/Secpndary%20Chemistry%201%20Teacher%20Guide.pdf',
  },
  {
      grade:'Senior 2',
      subject:'Chemistry',
      type:'teacher guide',
      image:'books/chemistry/chemistry_2_teacher_guide.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Chemistry/Secondary%20Chemistry%20Teacher%20Guides/Secpndary%20Chemistry%202%20Teacher%20Guide.pdf',
  },
  {
      grade:'Senior 3',
      subject:'Chemistry',
      type:'teacher guide',
      image:'books/chemistry/chemistry_3_teacher_guide.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Chemistry/Secondary%20Chemistry%20Teacher%20Guides/Secpndary%20Chemistry%203%20Teacher%20Guide.pdf',
  },
  {
      grade:'Senior 4',
      subject:'Chemistry',
      type:'teacher guide',
      image:'books/chemistry/chemistry_4_teacher_guide.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Chemistry/Secondary%20Chemistry%20Teacher%20Guides/Secpndary%20Chemistry%204%20Teacher%20Guide.pdf',
  },
]


const biologyBooks =[
  {
      grade:'Senior 1',
      subject:'Biology',
      type:'textbook',
      image:'books/biology/biology_1_textbook.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Biology/Secondary%20Biology%20Student%20Textbooks/Secondary%20Biology%201%20Student%20Textbook.pdf',
  },
  {
      grade:'Senior 2',
      type:'textbook',
      subject:'Biology',
      image:'books/biology/biology_2_textbook.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Biology/Secondary%20Biology%20Student%20Textbooks/Secondary%20Biology%202%20Student%20Textbook.pdf'
  },
  {
      grade:'Senior 3',
      subject:'Biology',
      type:'textbook',
      image:'books/biology/biology_3_textbook.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Biology/Secondary%20Biology%20Student%20Textbooks/Secondary%20Biology%203%20Student%20Textbook.pdf'
  },
  {
      grade:'Senior 4',
      subject:'Biology',
      type:'textbook',
      image:'books/biology/biology_4_textbook.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Biology/Secondary%20Biology%20Student%20Textbooks/Secondary%20Biology%204%20Student%20Textbook.pdf',
      teachertextbook:''
  },
  {
      grade:'Senior 1',
      subject:'Biology',
      type:'teacher-guide',
      image:'books/biology/biology_1_teacher_guide.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Biology/Secondary%20Biology%20Teacher%20Guides/Secondary%20Biology%201%20Teacher%20Guide.pdf',
  },
  {
      grade:'Senior 2',
      subject:'Biology',
      type:'teacher-guide',
      image:'books/biology/biology_2_teacher_guide.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Biology/Secondary%20Biology%20Teacher%20Guides/Secondary%20Biology%202%20Teacher%20Guide.pdf'
  },
  {
      grade:'Senior 3',
      subject:'Biology',
      type:'teacher-guide',
      image:'books/biology/biology_3_teacher_guide.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Biology/Secondary%20Biology%20Teacher%20Guides/Secondary%20Biology%203%20Teacher%20Guide.pdf'
  },
  {
      grade:'Senior 4',
      subject:'Biology',
      type:'teacher-guide',
      image:'books/biology/biology_4_teacher_guide.png',
      url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Biology/Secondary%20Biology%20Teacher%20Guides/Secondary%20Biology%204%20Teacher%20Guide.pdf'
  },

]




const englishBooks =[
    {
        grade:'Senior 1',
        subject:'English',
        type:'textbook',
        image:'books/english/english_1_textbook.png',
        url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20English/Secondary%20English%20Student%20Textbooks/Secondary%20English%201%20Student%20Textbook.pdf',
    },
    {
        grade:'Senior 2',
        subject:'English',
        type:'textbook',
        image:'books/english/english_2_textbook.png',
        url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20English/Secondary%20English%20Student%20Textbooks/Secondary%20English%202%20Student%20Textbook.pdf',
    },
    {
        grade:'Senior 3',
        subject:'English',
        type:'textbook',
        image:'books/english/english_3_textbook.png',
        url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20English/Secondary%20English%20Student%20Textbooks/Secondary%20English%203%20Student%20Textbook.pdf',
    },
    {
        grade:'Senior 4',
        subject:'English',
        type:'textbook',
        image:'books/english/english_4_textbook.png',
        url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20English/Secondary%20English%20Student%20Textbooks/Secondary%20English%201%20Student%20Textbook.pdf',
    },
   
]


const geographyBooks =[
    {
        grade:'Senior 1',
        subject:'Geography',
        type:'textbook',
        image:'books/geography/geography_1_textbook.png',
        url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Geography/Secondary%20Geography%20Student%20Textbooks/Secondary%20Geography%201%20Student%20Textbook.pdf',
    },
    {
        grade:'Senior 2',
        subject:'Geography',
        type:'textbook',
        image:'books/geography/geography_2_textbook.png',
        url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Geography/Secondary%20Geography%20Student%20Textbooks/Secondary%20Geography%202%20Student%20Textbook.pdf',
    },
    {
        grade:'Senior 3',
        subject:'Geography',
        type:'textbook',
        image:'books/geography/geography_3_textbook.png',
        url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Geography/Secondary%20Geography%20Student%20Textbooks/Secondary%20Geography%203%20Student%20Textbook.pdf',
    },
    {
        grade:'Senior 4',
        subject:'Geography',
        type:'textbook',
        image:'books/geography/geography_4_textbook.png',
        url:'https://eastafricaschoolserver.org/content/_public/Local%20Topics/South%20Sudan/South%20Sudan%20Secondary%20Textbooks/Secondary%20Geography/Secondary%20Geography%20Student%20Textbooks/Secondary%20Geography%204%20Student%20Textbook.pdf',
    },
]

// db.run('delete from books_db')

// geographyBooks.forEach(book => {
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
