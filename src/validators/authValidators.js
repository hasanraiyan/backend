import { body } from "express-validator";

const registerValidationRules = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 8 }).withMessage("Password must be at least 6 characters"),
]

const loginValidationRules = [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").notEmpty().isLength({ min: 8 }).withMessage("Password must be at least 6 characters"),
]

export { registerValidationRules, loginValidationRules }