require("dotenv").config();

const express = require("express");
const cors = require("cors");
const redis = require("redis")
// untuk upload ke cloudinary
const fileUpload = require("express-fileupload");

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
})

client.set("visits", 0)

const port = process.env.PORT | 3000;

const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const productInRoute = require("./routes/product_in");
const authRoute = require("./routes/auth");
const productOutRoute = require("./routes/product_out");
const reportRoute = require("./routes/print");
const auth = require("./middleware/AuthMiddleware");
const taskScheduler = require("./helpers/taskScheduler");

//cors
app.use(cors());
// untuk cloudinary
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", auth, userRoute);
app.use("/api/v1/product", auth, productRoute);
app.use("/api/v1/in", auth, productInRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/out", auth, productOutRoute);
app.use("/api/v1/print", auth, reportRoute);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
      res.send('Number of visits is: ' + visits + 1)
      client.set('visits', parseInt(visits) + 1)
  })
})


taskScheduler();

app.listen(port, process.env.base, () => console.log("Listened on port " + port));  