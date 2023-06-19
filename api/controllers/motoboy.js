import Motoboy from "../models/Motoboy.js";

// CREATE
export const createMotoboy = async (req, res) => {
  try {
    const motoboyData = req.body;
    const motoboy = await Motoboy.create(motoboyData);
    res.status(201).json(motoboy);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create motoboy' });
  }
};

// UPDATE
export const updateMotoboy = async (req, res) => {
  try {
    const { id } = req.params;
    const motoboyData = req.body;
    const updatedMotoboy = await Motoboy.findByIdAndUpdate(id, motoboyData, { new: true });
    res.json(updatedMotoboy);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update motoboy' });
  }
};

// DELETE
export const deleteMotoboy = async (req, res) => {
  try {
    const { id } = req.params;
    await Motoboy.findByIdAndRemove(id);
    res.json({ message: 'Motoboy deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete motoboy' });
  }
};

// GET
export const getMotoboy = async (req, res) => {
  try {
    const { id } = req.params;
    const motoboy = await Motoboy.findById(id);
    if (motoboy) {
      res.json(motoboy);
    } else {
      res.status(404).json({ error: 'Motoboy not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to get motoboy' });
  }
};

// GET ALL
export const getAllMotoboys = async (req, res) => {
  try {
    const motoboys = await Motoboy.find();
    res.json(motoboys);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get motoboys' });
  }
};