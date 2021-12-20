const express = require('express')
const router = express.Router()
const Event = require('../models/Event')

router.get("",async(req,res)=>{
    try{
        const events = await Event.find({})
        res.status(200).send(events)
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})

router.post("",async(req,res)=>{
    try{
        const event = new Event(req.body)
        const eventSave = await event.save()
        res.status(200).send(event)
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const event = await Event.findByIdAndDelete(id)
        res.status(200).send(event)
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const event = await Event.findByIdAndUpdate(id, req.body, {new:true})
        res.status(200).send(event)
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const event = await Event.findById(id)
        res.status(200).send(event)
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})

module.exports = router;
