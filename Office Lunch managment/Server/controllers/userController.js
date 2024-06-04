const User = require('../models/User');

exports.createUser = async (req, res) => {
    const { name } = req.body;
    try {
        const newUser = new User({ name });
        await newUser.save();
        res.status(201).json({
            message: "User created successfully!"
        });
    } catch (err) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
};

exports.setLunchChoice = async (req, res) => {
    const { name, lunchChoice } = req.body;

    try {
        const user = await User.findOne({ name });  // Added await here
        if (!user) {
            return res.status(404).json({
                message: "User not found!"
            });
        }
        user.lunchChoice = lunchChoice;
        await user.save();
        res.json({
            message: "Lunch choice updated successfully!",
            lunchChoice
        });
    } catch (err) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
};

exports.getLunchChoices = async (req, res) => {
    try {
        const users = await User.find();
        
       return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({
            message: 'Failed to get lunch choices'
        });
    }
};
