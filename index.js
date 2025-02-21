const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());




const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://<${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tkglq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

        //     await client.connect();
      const Taskcollection = Tasks.db("smarttaskerDB").collection(Tasks);
//    create 
  app.post('/',async(req,res)=>{
      const newtask=req.body 
      const result = await Taskcollection.insertOne(newtask)
      res.send(result)
  })
//   get 
app.get('/',async(req,res)=>{
      const tasks = await Taskcollection.find().toArray()
      res.send(tasks)
})
// update task  
app.put('/task/:id',async(req,res)=>{
      const {id}=req.params;
      const result = await Taskcollection.updateOne(
            {_id:new ObjectId(id)},
      {$set :updateDate})
      res.send(result)
})
// delete 
app.delete('task/:id',async(req,res)=>{
      const {id }=req.params
      const result = await Taskcollection.deleteOne({_id:new ObjectId(id)})
      res.send(result)
})
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
//     await client.close();
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
      const result = req.body;
      res.send("job is falling form sky");
    });
    
    app.listen(port, () => {
      console.log(`job is waiting at:${port}`);
    });
