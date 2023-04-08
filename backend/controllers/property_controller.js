import CatchAsyncError from "../middleware/CatchAsyncError.js";
import property_model from "../models/property_model.js";

export const getProperties = CatchAsyncError(async (req, res) => {
  const properties = await property_model.find();
  res.status(200).json({
    properties,
  });
});
export const getProperty = async (req, res) => {
  const property = await property_model.findById(req.params.id);
  res.status(200).json({
    property,
  });
};
export const createProperty = CatchAsyncError(async (req, res, next) => {
  const property = await property_model.create(req.body);
  res.status(200).json({
    property,
  });
});

export const updateProperty = CatchAsyncError(async (req, res) => {
  const property = await property_model.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({
    property,
  });
});
export const deleteProperty = CatchAsyncError(async (req, res) => {
  const property = await property_model.findByIdAndDelete(req.params.id);
  res.status(200).json({
    property,
  });
});
