const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');


router.post('/register' , async (req,res) => {
  const {name , email , pass , role} = req.body;

  try{
    const existtingUser = User.findOne()
  }catch(err){

  }
})

router.post('/login' , async (req, res) => {
  
})
