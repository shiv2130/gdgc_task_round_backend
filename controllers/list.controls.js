const List = require('../models/shopping.models.js')


const getLists = async (req,res) => {
    try {
       const list =  await List.find({})
       res.status(200).json(list);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


const getList = async (req, res) => {
    try {
        const { id } =  req.params;
        const list = await List.findById(id);
        res.status(200).json(list);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



const createList = async (req, res) => {
    try {
        const list = await List.create(req.body)
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


const updateList = async (req, res) => {
    try {
        const {id}  = req.params;
        const list  = await List.findByIdAndUpdate(id, req.body)
        if(!list){
            return res.status(404).json({message: 'Product not found'})
        }

        const updateList = await List.findById(id)
        res.status(200).json(updateList)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteList = async (req, res) => {
    try {
        const { id } = req.params;
        const list = await List.findByIdAndDelete(id);
        if(!list){
            res.status(404).json({message: "Product not find"})
        }
        res.status(200).json({message: "Product deleted successfully"})
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {
    createList, 
    getLists,
    getList,
    updateList, 
    deleteList
}