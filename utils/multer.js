const multer = require("multer");
const fs = require("fs");
// Set up multer with a custom file naming function
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Create a folder for the product using the product ID from the request body
    const productId = req.body.post_id || req.body.productId;
    const productFolder = `uploads/${productId}`;
    if (!fs.existsSync(productFolder)) {
      fs.mkdirSync(productFolder);
    }

    cb(null, productFolder);
  },
  filename: function (req, file, cb) {
    //count the number of files in the folder and add 1 to it to get the next file name
    const productId = req.body.post_id || req.body.productId;
    const productFolder = `uploads/${productId}`;

    const files = fs.readdirSync(productFolder);
    const fileCount = files.length + 1;
    // Use the product ID and the file count to create a unique file name
    //add the original file extension to the file name
    const fileExtension = file.originalname.split(".").pop();
    const fileName = `${fileCount}.${fileExtension}`;
    cb(null, fileName);
  },
});
const upload = multer({ storage: storage });

module.exports = upload;
