const {Teams} = require("../Models/Team")
const multer = require('multer');
const nodemailer = require("nodemailer")
const validator = require("validator")
// const router = express.Router()
const fs = require('fs');
const path = require('path');

require("dotenv").config()

let transpoter = nodemailer.createTransport({
  service:"gmail",
  auth:{
      user:process.env.Email,
      pass:process.env.pass,
  }
})

transpoter.verify((error,success)=>{
  if(error){
      console.log(error)
  }else{
      console.log("ready for messages....success")
  }
})


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const CreateTeams=async(req, res) => {

  const image = req.file;

  const {FristName,LastName,NIN,Gender,State,LGA,Residence,PhoneNumber,Email}= req.body

  try {
   
    // if (!image) {
    //     const error = new Error('Please upload a file');
    //     error.status = 400;
    //     throw error;
    //   }

      // checking if email exist
      const exist = await Teams.findOne({where: {PhoneNumber:PhoneNumber}})
    
        
      if(!PhoneNumber ){
          throw Error("All field must be filled")
      }

      // if (!validator.isEmail(email)){
      //     throw Error("Email not Valid")
      // }

      if(!exist){
        // console.log(exist)
        throw Error ("Email already exist")
    }

      // console.log(image)

      // const teams = await Teams.create({
      //   Name,
      //   Position,
      //   PhoneNumber,
      //   Email,
      //   whatsAppNumber,
      //   ImagePath:image.filename,
      
      // }).then(result =>{
        
      //   res.status(200).json(result)
      //   return result
      // })
      res.status(200).json("ok")
  } catch (error) {
    res.status(400).json({error:error.message})
  }
  ;
}

const sendVerification= async ({_id,email},res)=>{
  try {
      const otp= `${Math.floor(1000 + Math.random() * 9000)}`

      // console.log(otp)
      // setting up options for the email
      const options= {
          from:process.env.Email,
          to:email,
          subject:"Verify your email",
          html:`<p>Enter <b> ${otp} </b> in the app to verify your email adress and complete the signup</p>
              <p> this code will <b>expire in 1 hour</b></p>
          `
      }
      // storing the otp

      const saltRounds =  await bcrypt.genSalt(10)

      const hashCode = await bcrypt.hash(otp, saltRounds)

      // console.log(hashCode)

      const code = await verificationModel.create({
          UserId:_id,
          otp:hashCode,
          createdAt:Date.now(),
          expiredAt:Date.now() + 3600000
      })
      console.log(code)

      await transpoter.sendMail(options)

      // res.json({
      //     status:"PENDING",
      //     message:"verification otp email sent",
      //     data:{
      //         userId:_id,
      //         email,
      //     }
      // })
  } 
  catch (error) {
      res.status(400).json({error:error.message})
  }
}

const GetAllTeamMembers = async (req,res)=>{
  try {
    const teams = await Teams.findAll()
    
    .then(result =>{
      
      res.status(200).json(result)
    })
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}



const GetSingleMemeber = async(req,res)=>{
  const Teamid = req.params.id
  
  try {

    const Getone = await Teams.findOne({where: {id:Teamid}}).then(result =>{
      res.status(200).json({result,Modles})
    })
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

const UpdateMember = async (req, res) => {
  try {
    const image = req.file;
    const {Id} =req.params
  const {Name,Position,PhoneNumber,Email,whatsAppNumber}= req.body

  // if (!image) {
  //   const error = new Error('Please upload a file');
  //   error.status = 400;
  //   throw error;
  // }

    const teams = await Teams.update(
      { Name,Position,PhoneNumber,Email,whatsAppNumber },
      { where: { id: Id } }
    ).then(result =>{
      res.status(200).json({message:"Record updated Successfully"})
    })
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const DeleteRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Teams.destroy({
      where: { id },
      cascade: true,
    }).then(result =>{
      res.status(200).json({ message: 'Record deleted successfully' });
    })
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




module.exports={
    CreateTeams,
  upload,
  GetAllTeamMembers,
  GetSingleMemeber ,
  UpdateMember,
  DeleteRecord,
  
}
