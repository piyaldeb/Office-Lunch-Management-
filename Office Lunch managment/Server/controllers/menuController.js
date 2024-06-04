const Menu = require('../models/Menu');

exports.createMenu = async (req,res)=>{
    const {date , options} = req.body;
    try{
        const newMenu = new Menu({date,options});
        await newMenu.save();
        res.status(201).json(newMenu);
    }
    catch(err){
        res.status(500).json({message:"Something went wrong"});

    }
};

exports.getMenu = async(req,res)=> {
    const {date} = req.params;

    try{
        const menu = await Menu.findOne({date});
        if(!menu){
            return res.status(404).json({
                message:"Menu not found"
            })
        }
        res.json(menu);
    }
    catch(err){
        res.status(500).json({
            message:"Something went wrong"
        })
    }
};


