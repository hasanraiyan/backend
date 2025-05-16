import express from "express";
import validate from "../middlewares/validateMiddleware";
import { registerValidationRules, loginValidationRules } from "../validators/authValidators";
import { registerUser, loginUser } from "../controllers/authController";

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