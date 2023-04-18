import { Router } from "express";
import { submitTransferInfo } from "./form/formhandlers";


const mainRouter = Router();

mainRouter.use("/transfers", submitTransferInfo);

export default mainRouter;