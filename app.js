import "dotenv/config";
import session from "express-session";
import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";
import cors from "cors";
const isDevelopment = process.env.NODE_ENV === "development";
const app = express();
app.use(
    cors({
      credentials: true,
      origin: isDevelopment
        ? process.env.FRONTEND_URL 
        : "https://statuesque-kringle-a101ff.netlify.app"
    })
  );
app.use(express.json());
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);