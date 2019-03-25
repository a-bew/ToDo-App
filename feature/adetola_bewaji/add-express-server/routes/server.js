const express = require("express");
const router = express.Router();
const uuid = require('uuid');

router.get("/items", (req, res) => {
  return res.json({items:[
          {
            id: uuid.v4(),
            term: "Sales deck editing - 30 mins",
            getname : "sale",
            isChecked: "",
            setColor: ""
          },
          {
            id: uuid.v4(),
            term: "Practice on boarding walk throughs - 1 hour",
            getname : "practice",
            isChecked: "",
            setColor: ""
          },
          {
            id: uuid.v4(),
            term: "Write blog post: How to Broaden Your Content Calender - 2 hours",
            getname : "blog",
            isChecked: "",
            setColor: ""
          },
          {
            id: uuid.v4(),
            term: "Prepare and send email announcement to Brain, Sarah and Tyrell - 1 hour",
            getname : "",
            isChecked: "",
            setColor: ""
          }


        ]});
});

module.exports = router;
