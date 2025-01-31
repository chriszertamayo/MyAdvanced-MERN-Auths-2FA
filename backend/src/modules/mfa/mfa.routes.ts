import { Router } from "express";
import { authenticateJWT } from "../../common/strategies/jwt.strategy";
import { mfaController } from "./mfa.module";

const mfaRoutes = Router();

mfaRoutes.get("/setup", authenticateJWT, mfaController.generateMFASetup);

export default mfaRoutes;
