import { Router } from "express";
import {
  getProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
} from "../controllers/property_controller.js";
const router = Router();

router.get("/", getProperties);
router.get("/:id", getProperty);
router.post("/create", createProperty);
router.put("/update/:id", updateProperty);
router.delete("/delete/:id", deleteProperty);

export default router;
