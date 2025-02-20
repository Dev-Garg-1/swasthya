const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI) 
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
    name: String, 
    email: {type: String, unique: true}, 
    password: String
})

const User = mongoose.model("User", UserSchema);



const HealthDataSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    emergencyName: String,
    emergencyPhone: String,
    emergencyRelationship: String,
    healthStatus: String,
    firstName: String,
    lastName: String,
    age: Number,
    gender: String,
    familyHistory: String,
    bpSystolic: Number,
    bpDiastolic: Number,
    bloodSugar: Number,
    cholesterol: Number,
    bmi: Number,
    smokingStatus: String,
    alcoholConsumption: String,
    exerciseLevel: String,
    existingConditions: String,
    medications: String,
    heartRate: Number,
    ecgAbnormality: String,
    recentComplaints: String,
    otherComplaints: String
}, { timestamps: true });

const HealthData = mongoose.model("HealthData", HealthDataSchema);

// Store health details
app.post('/api/health-data', async (req, res) => {
    try {
        const { userId, ...healthData } = req.body;

        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const newHealthData = new HealthData({
            userId,
            ...healthData
        });

        await newHealthData.save();
        res.status(201).json({ message: "Health data saved successfully", healthData: newHealthData });
    } catch (error) {
        console.error("Error saving health data:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});



app.post('/register', async(req, res) => {
    const {name, email, password} = req.body;
    const hashedPassword = await bycrypt.hash(password, 10);
    try {
        const user = new User({name, email, password: hashedPassword});
        await user.save();
        res.json({message: "User registered successfully"});
    }catch(error) {
        res.status(400).json({error: "User already exists"});
    }
})

app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({error: "user not found"});

    const isMatch = await bycrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({error: "invalid credentials"});

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
    res.json({token, user});
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));