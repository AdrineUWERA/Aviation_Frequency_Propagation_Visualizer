import Receiver from "../models/receiversModels.js";

const addReceiver = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "Fill all fields." });
    }
    try {
        const { latitude, longitude, coverage } = req.body;
        if (await Receiver.findOne({ latitude, longitude, coverage })) {
          res.status(400).json({
            message: `The receiver already exists`
          });
        } else {
          // add new receiver
        const receiver = await Receiver.create({
          latitude: latitude,
          longitude: longitude,
          coverage: coverage,
        });
        // saves the new receiver in the database
        const receiverAdded =  await receiver.save();
        res.status(201).json({
          message: "New receiver added successfully!",
          data: receiver,
        });
        }
    } catch (err) {
        res.status(500).json({
            message: "Something went wrong",
            error: `Error: ${err}`,
        });
    }
}

const getAllReceivers = async (req, res) => {
    const receivers = await Receiver.find();
    try{
        res.status(200).json({ 
            success: true,
            data: receivers,
            count: receivers.length
        });
    } catch (err) {
        res.status(500).json({
            message: "Something went wrong while loading all receivers",
            error: `Error: ${err}`,
        });
    };
}

const deleteReceiver = async (req, res) => {
    try {
        const receiver = await Receiver.findById(req.params.id);
        //checks if the receiver exists
        if (receiver) {
          //deletes the receiver
          const deletedReceiver = await Receiver.findByIdAndDelete(req.params.id);
          return res.status(204).json({ }); 
        } else{
          res.status(204).json({ });
        }
    } catch (err) {
        res.status(500).json({
            message: "Something went wrong",
            error: `Error: ${err}`
        });
    }
}

 

// gets the specific receiver
const getSpecificReceiver = async (req, res) => {
    try { 
      const receiver = await Receiver.findById(req.params.id);
      if (receiver) {
        res.status(200).json({ receiver });
      } else{
        return res.status(404).json({ error: "Receiver doesn't exist" });
      }
  
    } catch (err) {
      res.status(500).json({
        message: "Something went wrong",
        error: `Error: ${err}`,
      });
    }
};

export {addReceiver, getAllReceivers, deleteReceiver, getSpecificReceiver}