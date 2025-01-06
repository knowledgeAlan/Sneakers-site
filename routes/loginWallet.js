const express = require("express");
const router = express.Router();
  
 
const dotenv = require("dotenv");
dotenv.config({ path: "../config/config.env" });
  

  router.post("/",async (req, res) => {
     

    const { account } = req.body;

    try {
       
      console.log("wallet==login==account==",account);

      const payload = {
        user: {
          id: account,
          // only an admin can take CRUD operations to collections & delete any users
          // if not an admin, the user can only make CRUD operations to his/her account
          isAdmin: false,
        },
      };

      return res.json({"token" :"xxtoken" });
       
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }

); 
module.exports = router;
