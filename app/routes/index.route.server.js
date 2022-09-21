//import the router component

import {Router} from "express"
import { goodbyeWorld, helloWorld } from "../controllers/index.controller.server.js";
// intansatize router
const router = Router();

//change app.use to router.use

//press control then space to get reference to hellowld
router.get('/hello', helloWorld);
router.get('/goodbye', goodbyeWorld);


//export router code
export default router;