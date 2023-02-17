const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../../models/userModel");

router.get("/test", (req,res) => res.json({msg: "users route works"})); 

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email})
  .then(user =>{
    if(user){
        return res.status(400).json({email: "Email already exist"});
    } else{
        const newUser = new User({
          name: req.body.name,
          email:req.body.email,
          password: req.body.password
        });
        bcrypt.genSalt(10, (err, salt) => {
           bcrypt.hash(newUser.password, salt, (err, hash) =>{
              if(err) throw err;
              newUser.password = hash;
              newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err))
               
           })
        })
    }
  })
  console.log(req.body);
});


router.post("/login", (req, res) => {
  const email =req.body.email;
  const password = req.body.password;
User.findOne({email})
.then(user => {
    if(!user){
      return res.status(404).json({email: "User not found!"});
    }

    bcrypt.compare(password, user.password)
     .then(isMatch => {
       if(isMatch){
        res.json({msg: "success"})
       } else{
        return res.status(400).json({password: "password incorrect"})
       }
     })
});

})

module.exports = router;