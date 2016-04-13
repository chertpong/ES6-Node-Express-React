import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let cakeSchema = new Schema({
    name        :{type:String, required:true, unique:true},
    price       :{type:Number},
    description :{type:String},
    thumbnail   :{type:String},
    pictures    :[
      {type:String}
    ],
    tags        :[
      {type:String}
    ]
  },
  {timestamps: true}
);


let Cake = mongoose.model('Cake', cakeSchema,'Cakes');

export default Cake;