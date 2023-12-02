const Resource = require("../models/Resource");

// Gets All Training Resources
exports.getResources = async (req, res) => {
  // TODO: Implement find to get all resources
  // Return 200 status with success: true and data: your resources
  try {
    const resources = await Resource.find();
    res.status(200).json({ success: true, data: resources });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Get Single Training Resource
exports.getSingleResource = async (req, res) => {
  try {
    // TODO: Implement findById and pass req.params.id
    // Return 200 status with success: true and data: your resource
    const resource = await Resource.findById(req.params.id);
    res.status(200).json({ success: true, data: resource });
  } catch (err) {
    // TODO: Return 400 status with success: false, error: err.message
    res.status(400).json({ success: false, error: err.message });
  }
};

// Create Training Resource
exports.createResource = async (req, res) => {
  try {
    // TODO: Implement create and pass req.body
    // Return 200 status with success: true and data: your resource
    const resource = await Resource.create(req.body);
    res.status(200).json({ success: true, data: resource });
  } catch (err) {
    // TODO: Return 400 status with success: false, error: err.message
    res.status(400).json({ success: false, error: err.message });
  }
};

// Update Training Resource
exports.updateResource = async (req, res) => {
  try {
    // TODO: Implement findByIdAndUpdate and pass req.params.id & req.body
    // Set to new record and run validators
    // Return 200 status with success: true and data: your resource
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json({ success: true, data: resource });
  } catch (err) {
    // TODO: Return 400 status with success: false, error: err.message
    res.status(400).json({ success: false, error: err.message });
  }
};

// Delete Training Resource
exports.deleteResource = async (req, res) => {
  try {
    // TODO: Implement findById and then use remove to delete the resource
    // Return 200 status with success: true and data: empty
    const resource = await Resource.findByIdAndRemove(req.params.id);
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    // TODO: Return 400 status with success: false, error: err.message
    res.status(400).json({ success: false, error: err.message });
  }
};
