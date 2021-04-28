// exercise 1
db.bios.find({_id: 8})

// exercise 2
db.bios.find({_id: 8}, {name: 1})

// exercise 3
db.bios.find({_id: 8}, {_id: 0, name: 1, birth: 1})

// exercise 4
db.bios.find({'name.first': "John"}).pretty()

// exercise 5
db.bios.find().limit(3)

// exercise 6
db.bios.find().limit(5).skip(2)

// exercise 7
db.books.count()

// exercise 8
db.books.find({status: "PUBLISH"}).count()

// exercise 9
db.books.find({}, {title: 1, isbn: 1, pageCount: 1, _id: 0})

// exercise 10
db.books.find({status: "MEAP"}, {title: 1, authors: 1, status: 1})
