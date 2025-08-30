//5

import express from  "express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js"
import multer from "multer"

//this is an entry level for api/food/add
const foodRouter = express.Router();

// Image storage engine
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

// after this it rewrite  following 
//req.file
// {
//   fieldname: 'image',
//   originalname: 'burger.jpg',
//   encoding: '7bit',
//   mimetype: 'image/jpeg',
//   destination: 'uploads',
//   filename: '1693167891234burger.jpg',
//   path: 'uploads/1693167891234burger.jpg',
//   size: 12345
// }


    // req.body
// {
//   name: "Burger",
//   price: "120",
//   category: "Fast Food"
// }



const upload=multer({storage:storage})

//read messy request save file properly and storage here used is same diskStorage

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get('/list',listFood)
foodRouter.post("/remove",removeFood)

//upload.single("image")   // handles ONE file from field named "image"
// upload.array("photos", 5) // handles up to 5 files from field "photos"
// upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])



// First: upload.single("image") runs.

// Reads the incoming multipart request.

// Saves the uploaded file to /uploads/.

// Fills in:

// req.file → file metadata (filename, path, mimetype, etc.).

// req.body → text fields (name, description, etc.).

// Then: addFood(req, res) runs, now with structured data already available.





export default foodRouter;
