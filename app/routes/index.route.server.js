
/** 
 * index.route.server.js
 * Amin Hossein Tehrani
 * 301225212
 * October 1 2022
 * 
 * 
 */
//import the router component

import {Router} from "express"
import { displayAboutPage, 
    displayContactPage, 
    displayHomePage, 
    displayProjectsPage, 
    displayServicesPage } from "../controllers/index.controller.server.js";

// intansatize router
const router = Router();

//change app.use to router.use

//press control then space to get reference to hellowld
router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/projects', displayProjectsPage);
router.get('/services', displayServicesPage);
router.get('/contact', displayContactPage);


//export router code
export default router;



