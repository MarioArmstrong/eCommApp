const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

//GET all Category
router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET one Category
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id);
    if (!categoryData) {
      res.status(404).json({
        message: "no category found with this id!",
      });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE Category
router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//UPDATE Category
router.put("/:id", async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(404).json({
        message: "No category found with this id!",
      });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE Category
router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({
        message: "No category found with this id!",
      });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
