const express = require("express");

const router = express.Router();

const User = require("../models/User");


// CREATE USER (POST)
router.post("/", async (req, res) => {

    try {

        const user = await User.create(req.body);

        res.status(201).json({
            message: "User created successfully",
            user
        });


    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }

});



// GET ALL USERS (READ)
router.get("/", async (req, res) => {

    try {

        const users = await User.find();

        res.status(200).json(users);


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});



// UPDATE USER (PUT)
router.put("/:id", async (req, res) => {

    try {

        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );


        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }


        res.status(200).json({
            message: "User updated successfully",
            user
        });


    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }

});



// DELETE USER (DELETE)
router.delete("/:id", async (req, res) => {

    try {

        const user = await User.findByIdAndDelete(req.params.id);


        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }


        res.status(200).json({
            message: "User deleted successfully"
        });


    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }

});



module.exports = router;