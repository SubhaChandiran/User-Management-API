import { Router } from "express";
import UserRouter from "./user.js";
import DashboardRouter from "./dashboard.js";
const router = Router();
router.get("/", (req, res) =>
  res
    .status(200)
    .send(`<h1>User Management Application successfully running</h>`)
);
router.use("/user", UserRouter);
router.use("/dashboard", DashboardRouter);

export default router;
