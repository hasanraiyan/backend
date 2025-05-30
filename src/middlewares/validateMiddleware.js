import { validationResult } from "express-validator";

const validate = (req, res,next, err) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

export default validate;