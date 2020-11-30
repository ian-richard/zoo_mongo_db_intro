use zoo;

const idToFind = ObjectId("5fc51bfd396c33f632a049ed");

db.animals.findOne({ _id: idToFind})

db.animals.updateOne({_id: ObjectId("5fc51bfd396c33f632a049ed")},
{ $set: {name: "Pip"}}
)

db.animals.deleteOne({ _id: ObjectId("5fc51bfd396c33f632a049ed")})


db.animals.find()
