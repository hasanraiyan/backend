import express from "express";
import validate from "../middlewares/validateMiddleware.js";
import { registerValidationRules, loginValidationRules } from "../validators/authValidators.js";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post(
    "/register",
    registerValidationRules,
    validate,
    registerUser
)

router.post(
    "/login",
    loginValidationRules,
    validate,
    loginUser
)

export default router;