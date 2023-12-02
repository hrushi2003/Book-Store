import express from "express";
import { connect } from "../config.js";
import { Book } from "../models/bookmodels.js";

const router = express.Router();
connect();
router.get('/',async (req,res) => {
    try{
       
       const books =await Book.find({});
       res.status(234).send(books)
    }catch(err){
        console.log(err);
    }
});

router.delete('/:id',async (req,res) => {
    try{
     
       const result = await Book.findByIdAndDelete(req.params.id);
       if(!result){
           throw new Error('No book found');
       }else{
         res.status(201).send(`Book with id ${req.params.id} deleted`);
       }
    }catch(err){
        console.log(err);
        res.status(500);
    }
})

router.put('/:id',async (req,res) => {
    try{
    
       const result = await Book.findByIdAndUpdate(req.params.id,req.body);
       if(!result) return res.status(404).send('No book found');
       else{
        res.json({message:"book updated succesfully"});
       }
    }catch(err){
        console.log(err);
    }
})

router.get('/:id',async(req,res) => {
    try{
       
        const book= await Book.findById(req.params.id);
        res.send(book);
}catch(err){
    console.log(err);
}
});

router.post('/',async(req,res) =>{
    try{

       const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        publishYear:req.body.publishYear
       });
       newBook.save().then((data) =>{
        console.log(data);
        res.send(data);
       }).catch((error) => {
        console.log(error);
       })
    }catch(err){
        console.log(err);
    }
})

export default router;