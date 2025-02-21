const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tkglq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const Taskcollection = client.db("smarttaskerDB").collection("tasks");

    // ✅ Create Task
    app.post('/tasks', async (req, res) => {
      const newTask = req.body;
      try {
        const result = await Taskcollection.insertOne(newTask);
        res.send(result);
      } catch (error) {
      //   console.error("Failed to insert task:", error);
        res.status(500).json({ message: "Failed to add task" });
      }
    });
    app.get('/tasks',async(req,res)=>{
      const result = await Taskcollection.find().toArray()
      res.json(res)
    })

    // ✅ Get Tasks by Email
    app.get('/tasks/:email', async (req, res) => {
      const { email } = req.params;
      try {
        const tasks = await Taskcollection.find({ email }).toArray();
        
        if (!Array.isArray(tasks)) {
          return res.status(500).json({ message: "Invalid response data format" });
        }

        const todo = tasks.filter(task => task.category?.toLowerCase() === "todo");
        const inprogress = tasks.filter(task => task.category?.toLowerCase() === "inprogress");
        const done = tasks.filter(task => task.category?.toLowerCase() === "done");

        res.json({ todo, inprogress, done });
      //   console.log({todo,inprogress,done})
      } catch (error) {
      //   console.error("Failed to fetch tasks:", error);
        res.status(500).json({ message: "Failed to fetch tasks" });
      }
    });

    // ✅ Update Task Category
    app.put('/tasks/:id', async (req, res) => {
      const { id } = req.params;
      const { category } = req.body; // নতুন Category
    
      try {
        const result = await Taskcollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: { category } }  // ✅ Category Update
        );
    
        if (result.modifiedCount === 0) {
          return res.status(404).json({ message: "No task found or no update performed" });
        }
    
        res.json({ message: "Task category updated successfully", result });
      } catch (error) {
      //   console.error('Failed to update task category:', error);
        res.status(500).json({ message: 'Failed to update task category' });
      }
    });
    

    // ✅ Delete Task
    app.delete('/tasks/:id', async (req, res) => {
      const { id } = req.params;
      try {
        const result = await Taskcollection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
          return res.status(404).json({ message: "No task found to delete" });
        }

        res.json({ message: "Task deleted successfully", result });
      } catch (error) {
      //   console.error("Failed to delete task:", error);
        res.status(500).json({ message: "Failed to delete task" });
      }
    });

  } finally {
    // Do NOT close client connection, it should stay open
  }
}
run().catch(console.dir);

// ✅ Root Route
app.get("/", (req, res) => {
  res.send("Job is falling from the sky!");
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`Server is running at: ${port}`);
});
