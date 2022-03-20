const express = require("express");
const router = express.Router();
const {
  getGoals,
  deleteGoal,
  updateGoal,
  setGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoal);
// same effect above
// router.get("/", getGoals);
// router.post("/", setGoal);

router.route("/:id").put(updateGoal).delete(deleteGoal);
// same effect above
// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);

module.exports = router;
