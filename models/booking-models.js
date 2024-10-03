import mongoose, { Schema, model} from "mongoose";
const bookingschema =new Schema({
    firstName : {
        type: String,
        // required: true
    },
lastName :{
type: String,
// required : true
},


sex : {
    type : String,
    enum : {
        values : ['male', 'female']
    },
    // required : true
},

saetNunber : {
type:Number,
// unique:true,
// required : true,
},

email : {
    type: String,
    // unique:true,
    // required: true

}
})

 export const booking = model('booking', bookingschema)
