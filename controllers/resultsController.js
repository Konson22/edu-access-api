const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database("./database.db", sqlite.OPEN_READWRITE, err => err && console.log(err));


const getAllResults = (req, res) => {
    try{
      db.all('SELECT * FROM results', [], (err, rows) => {
        if(err) throw err;
        res.json(rows)
      })
    }catch(error){
      console.log(error)
    }
}


const getSingleResults = (req, res) => {
  const { indexNo } = req.body;
  try{
    db.get(`SELECT * FROM results WHERE studentIndex = ${indexNo}`, [], (err, results) => {
      if(err) throw err;
      if(results){
        res.json(results)
      }else{
        res.status(400).send('No data found!.')
      }
    })
  }catch(error){
    console.log(error)
  }
}

module.exports = { getAllResults, getSingleResults }



const results = [
  {
    state:'Juba',
    county:'Rajap',
    centerIndex:'Mahad Juba',
    studentName:'Kon Akech Kon',
    studentIndex:1234,
    schoolName:'Sopiri Secondary',
    section:'art',
    eng:Math.floor(Math.max(49, Math.random()*100)),
    arabic:Math.floor(Math.max(49, Math.random()*100)),
    math:Math.floor(Math.max(49, Math.random()*100)),
    cre:Math.floor(Math.max(49, Math.random()*100)),
    islamic:null,
    physic:null,
    chemistry:null,
    biology:null,
    milaterySci:Math.floor(Math.max(49, Math.random()*100)),
    history:Math.floor(Math.max(49, Math.random()*100))
  },
  {
    state:'Juba',
    county:'Gumbo',
    centerIndex:'Gumbo Sherikat',
    studentName:'Alison Juma',
    studentIndex:1234,
    schoolName:'Chinese Secondary',
    section:'science',
    eng:Math.floor(Math.max(49, Math.random()*100)),
    arabic:Math.floor(Math.max(49, Math.random()*100)),
    math:Math.floor(Math.max(49, Math.random()*100)),
    cre:null,
    islamic:Math.floor(Math.max(49, Math.random()*100)),
    physic:Math.floor(Math.max(49, Math.random()*100)),
    chemistry:Math.floor(Math.max(49, Math.random()*100)),
    biology:Math.floor(Math.max(49, Math.random()*100)),
    milaterySci:null,
    history:null
  },
  {
    state:'Wau',
    county:'Liria',
    centerIndex:'Wau Secondary',
    studentName:'James Mayen',
    studentIndex:1234,
    schoolName:'Wau Secondary',
    section:'art',
    eng:Math.floor(Math.max(49, Math.random()*100)),
    arabic:Math.floor(Math.max(49, Math.random()*100)),
    math:Math.floor(Math.max(49, Math.random()*100)),
    cre:Math.floor(Math.max(49, Math.random()*100)),
    islamic:null,
    physic:null,
    chemistry:null,
    biology:null,
    milaterySci:Math.floor(Math.max(49, Math.random()*100)),
    history:Math.floor(Math.max(49, Math.random()*100))
  },
  {
    state:'Juba',
    county:'Munuki',
    centerIndex:'Munuki Sherikat',
    studentName:'Samual Juma',
    studentIndex:1234,
    schoolName:'John Graang Secondary',
    section:'science',
    eng:Math.floor(Math.max(49, Math.random()*100)),
    arabic:Math.floor(Math.max(49, Math.random()*100)),
    math:Math.floor(Math.max(49, Math.random()*100)),
    cre:null,
    islamic:Math.floor(Math.max(49, Math.random()*100)),
    physic:Math.floor(Math.max(49, Math.random()*100)),
    chemistry:Math.floor(Math.max(49, Math.random()*100)),
    biology:Math.floor(Math.max(49, Math.random()*100)),
    milaterySci:null,
    history:null
  },
]


// db.run('delete from results')


// results.forEach((el, index) => {
//   sql = `INSERT INTO results(
//     state,
//     county,
//     centerIndex,
//     studentName,
//     studentIndex,
//     schoolName,
//     section,
//     eng,
//     arabic,
//     math,
//     cre,
//     islamic,
//     physic,
//     chemistry,
//     biology,
//     milaterySci,
//     history
//   ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
//   db.run(sql, [
//     el.state,
//     el.county,
//     Math.round(Math.random()*1000),
//     el.studentName,
//     1234+index,
//     el.schoolName,
//     el.section,
//     el.eng,
//     el.arabic,
//     el.math,
//     el.cre,
//     el.islamic,
//     el.physic,
//     el.chemistry,
//     el.biology,
//     el.milaterySci,
//     el.history
//   ], async err => {
//     if(err) throw err
//     console.log('done')
//   });
// });