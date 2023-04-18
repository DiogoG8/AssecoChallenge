import { Router } from "express";
import { submitTransferInfo } from "./form/formhandlers";
import { validateTransfer } from "./form/formvalidators";


const mainRouter = Router();

mainRouter.use("/transfers", validateTransfer, submitTransferInfo);

export default mainRouter;