require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const user = require("./model/user");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwtoken = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const Authentication = require("./middleware/authentication");
const product = require("./model/product");
const multer = require("multer");
const products = require("./model/product");
const cartitem = require("./model/cartitem");
const { default: Stripe } = require("stripe");
const Database_url = process.env.DATABASE;
const stripe = require("stripe")(process.env.STRIPE_KEY);



const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    method: ["GET", "POST"],
  })
);
mongoose
  .connect(Database_url)
  .then(() => {
    console.log("database connected");
  })
  .catch((e) => {
    console.log(e);
    console.log("database not connected");
  });
app.use(bodyParser.json({ limit: "60mb" }));
app.use(express.static("images"));
app.use(bodyParser.urlencoded({ extended: false, limit: "60mb" }));


// payment Method 
app.post("/create-checkout-session",async(req,res,next)=>{
const data = req.body
// console.log(data)
const lineItems = data.map((product)=>({
  // console.log(product.item.image.map((item)=>{
  //   console.log(item.name)
  // }))
  price_data:{
    currency:"pkr",
    product_data: {
name: product.item.title,
   
    },
    unit_amount:Math.round(product.item.price*100),
  },
  quantity:product.item.quantity
}));
const session = await stripe.checkout.sessions.create({
  payment_method_types:["card"],
  line_items:lineItems,
  mode:"payment",
  success_url:"http://localhost:3000/success",
  cancel_url:"http://localhost:3000/cancel",
})
res.json({id:session.id})
})

app.post("/signup", (req, res) => {
  const { firstname, lastname, phonenumber, email, password, gender } =
    req.body;

  user
    .findOne({ email: email })
    .then((result) => {
      if (result) {
        return res.json({ message: "user already exist" });
      }

      const saveData = new user({
        firstname,
        lastname,
        phonenumber,
        email,
        password,
        gender,
      });
      saveData
        .save()
        .then(() => {
          return res.json({ message: "signup complete" });
        })
        .catch((err) => {
          console.log(err);
          return res.json({ message: "something went wrong please try again" });
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/login", (req, res) => {
  const { email, password } = req.body;
  
  user
    .findOne({ email: email })
    .then((result) => {
      if (result) {
        bcrypt.compare(password, result.password, (err, response) => {
          if (response) {
            const token = jwtoken.sign(
              { email: result.email, _id: result._id },
              process.env.SECRECT_KEY,
              {
                expiresIn: "1d",
              }
            );
            //   console.log({ token });
            // Set cookie here
            res.cookie("jwtoken", token, {
               expires: new Date(Date.now() + 29800093090),
               httpOnly:false,
               secure:false
            });
            console.log("login complete");
            return res.json({ message: "Login successful" ,redirect:"/"});
          } else {
            console.log("Incorrect password");
            return res.json({ message: "Incorrect password" });
          }
        });
      } else {
        console.log("No record found");
        return res.json({ message: "No record found" });
      }
    })
    .catch((err) => {
      console.log("Something went wrong");
      return res.json({ error: "Something went wrong" });
    });

});

app.use("/service", Authentication, (req, res) => {
  res.json({ message: req.user });
});
app.use("/logout", Authentication, (req, res) => {
  console.log("logout")
  res.clearCookie("jwtoken");
  
  res.send({message:"user logout succefull"});
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "C:/Users/SEAGATE/OneDrive/Desktop/second Ecommerce/client/public");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname 
  );
  },
});
const upload = multer({ storage });

const cpUpload = upload.fields([{ name: 'imagefile', maxCount: 8 }])
app.use("/addproduct", cpUpload, (req, res, next) => {
  console.log("hello product");
  // console.log(req.body);
  const {imagefile}= req.files
  const { title, price, description, category } = req.body;
  // console.log(title, price, description, category);
  // console.log(imagefile);

  const images =imagefile.map(file => ({
    name: file.originalname,
    data: file.path,
    contentType: file.mimetype,
    path: file.filename,
  }));

  // console.log(images)
    const saveProduct = new product({
      title,
      price,
      description,
      category,
      image:images
    });
    saveProduct
      .save()
      .then(() => {
        res.send({ message: "data upload" }).json();
      })
      .catch((err) => {
        console.log(err);
        res.send({ error: "something wrom" });
      });
  
 
});
app.get("/sendproduct", async (req, res) => {
  const product = await products.find({});
  return res.send(product);
});
app.post("/cartitem", Authentication,async (req, res, next) => {
  const  data = req.body;
  try {

    const newItem = new cartitem({
      user: req.user._id,
      item: data,
    });
    const updatedUser = await cartitem.findOneAndUpdate(
      { user: req.user._id, "item._id": data._id },
      { $inc: { "item.quantity": 1 } },
      { new: true }
    );
    if(updatedUser){
console.log("ince")
    }
    else{
      newItem.save().then(() => {
        console.log("added cart");
      });
    }
   
  } catch (error) {
    console.log(error);
  }
});
app.get("/cartdata", Authentication, async (req, res) => {
  try {
    const usercart = await cartitem.find({ user: req.user._id });
    res.json(usercart);
  } catch (error) {
    console.log(error);
  }
});
app.use("/cartdata/increase/:itemId", Authentication, async (req, res) => {
  const { itemId } = req.params;
  const userId = req.user._id;

    const updatedUser = await cartitem.findOneAndUpdate(
      { user: userId, "item._id": itemId },
      { $inc: { "item.quantity": 1 } },
      { new: true }
    );
    if(updatedUser){
res.json({message:"user not found"})
    }
});
app.use("/cartdata/decrease/:itemId", Authentication, async (req, res) => {
  const { itemId } = req.params;
  const userId = req.user._id;
  try {
    const found = await cartitem.findOneAndUpdate(
      { user: userId, "item._id": itemId },
      { $inc: { "item.quantity": -1 } },
      { new: true }
    );
    if (!found) {
      console.log("not found");
    } else {
      res.json(found);
    }
  } catch (error) {
    console.log(error);
  }
});
app.use("/cartdata/remove/:itemId",Authentication,async(req, res)=>{
  const {itemId} = req.params
 
try {

  const result =await cartitem.findByIdAndDelete({_id:itemId})
  res.json({result})
} catch (error) {
  console.log(error)
}
})
app.use("/", (req, res) => {
  console.log(process.env.SECRECT_KEY)
  return res.status(200).send({ message: req.userData,message:"hi I am Zain from server"}
    
  );
});
app.listen(process.env.PORT, () => {
  console.log("server running");
});
