import express from "express";
import {addReceiver, getAllReceivers, deleteReceiver, getSpecificReceiver} from "../controllers/receiverControllers.js";

const router = express.Router();

router.post("/receiver", addReceiver);

router.get("/receiver", getAllReceivers);

router.get("/receiver/:id", getSpecificReceiver);

router.delete("/receiver/:id", deleteReceiver);

export default router;