import express from "express";
import {addReceiver, getAllReceivers, deleteReceiver, getSpecificReceiver} from "../controllers/receiverControllers.js";

const router = express.Router();

router.post("/receivers", addReceiver);

router.get("/receivers", getAllReceivers);

router.get("/receivers/:id", getSpecificReceiver);

router.delete("/receivers/:id", deleteReceiver);

export default router;