const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');
const viewController= require('../controllers/view_controller');

router.get('/',homeController.home);
router.post('/upload',homeController.upload);
router.get('/view/:name',viewController.view);
router.get('/remove/:name',homeController.remove)
module.exports =router;