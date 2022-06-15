const express = require("express");
const router = express.Router();

// --TEST--- //


const adminController = require('../controllers/adminControllers')
const apiController = require('../controllers/apiControllers')
const DataController = require('../controllers/dataControllers')














//--------------------- FRONTEND API ROUTES --------------------//
router.get('/get/api/portfolio',apiController.getApiPortfolio);
router.get("/get/api/service",apiController.getApiService);
router.get('/get/api/blog',apiController.getApiBlog);
router.get('/get/api/faq', apiController.getApiFaq);





//--------------------- GET ROUTES --------------------//
router.get("/portfolio",adminController.getPortfolio);
router.get('/portfolio-details',adminController.getPortfolioDetails)
router.get("/service",adminController.getService);
router.get("/blog",adminController.getBlog);
router.get("/faq",adminController.getFaq);

//--------------------- MESSAGE GET ROUTE --------------------//
router.get('/contact',DataController.getcontactMessage)
router.get('/email',DataController.getemailMessage)
router.get('/requirements',DataController.getRequirements)


// 


//--------------------- EDITING ROUTES --------------------//
router.get('/edit-portfolio/:id',adminController.getEditPortfolio);
router.get('/edit-service/:id',adminController.getEditService);
router.get('/edit-blog/:id',adminController.getEditBlog);
router.get('/edit-faq/:id',adminController.getEditFaq);



//--------------------- EDITING ROUTES --------------------//

router.put('/:id/portfolio',adminController.postEditPortfolio);
router.put('/:id/service',adminController.postEditService);
router.put('/:id/blog',adminController.postEditBlog);
router.put('/:id/faq',adminController.postEditFaq)






//--------------------- POSTING ROUTES --------------------//
router.post("/portfolio",adminController.postPortfolio);
router.post("/portfolio-details",adminController.postPortfolioDetails);
router.post("/service",adminController.postService);
router.post("/blog",adminController.postBlog);
router.post("/faq", adminController.postFaq);



//--------------------- MESSAGE POST ROUTE --------------------//
router.post("/contact/message",DataController.postcontactMessage)
router.post("/email/message",DataController.postemailMessage)
router.post("/requirement/message",DataController.postRequirements)




//--------------------- DELETE ROUTES --------------------//
router.delete("/portfolio/:id", adminController.deletePortfolio);
router.delete("/service/:id", adminController.deleteService);
router.delete("/blog/:id", adminController.deleteBlog);
router.delete("/faq/:id", adminController.deleteFaq);
router.delete("/portfolio-details/:id", adminController.deletePortfolioDetails);

//--------------------- MESSAGE POST ROUTE --------------------//
router.delete("/contact/:id",DataController.deletecontactMessage)
router.delete("/email/:id",DataController.deletemailMessage)
router.delete("/requirements/:id",DataController.deletRequirements)


module.exports = router;
