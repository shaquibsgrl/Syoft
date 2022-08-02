const express = require("express");

const router = express.Router();
const User = require("../Models/UserSchema");
const { body } = require("express-validator");

router.get("/", async (req, res) => {
    try {
      const user = await User.find().lean().exec();
      return res.status(200).send({ User: user });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  });
  router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id).lean().exec();
      return res.status(200).send({ User: user });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  });

  router.patch("/:id",
    body("username").trim().not().isEmpty().withMessage("Name is required"),
    body("password").trim().not().isEmpty().withMessage("Password is required"),
    body("email")
      .isEmail()
      .custom(async (value) => {
        const user = await User.findOne({ email: value });
  
        if (user) {
          throw new Error("Email is already taken");
        }
        return true;
      }))