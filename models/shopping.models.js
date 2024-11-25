const mongoose  = require('mongoose');

const shoppingSchema = mongoose.Schema(
    {
    name:{
        type: 'string', 
        required: true,
    },

    title:{
        type:'string',
        required: true,
    },
    description:{
        type: 'string',
        required: false,
    }, 
    seller:{
        type: 'string',
        required : false, 
    },
    rating:{
        type: 'number',
        required: true,
        default: 0,
    }
}
)
const List = mongoose.model("List", shoppingSchema);
module.exports = List;