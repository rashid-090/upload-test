const Portfolio = require("../models/portfolio");
const PortfolioDetails = require('../models/porfolio-details')
const Service = require("../models/service");
const Blog = require("../models/blog");
const Faq = require("../models/faq");


const imageMimeTypes = ['image/jpeg', 'image/png', 'images/gif']
//--------------Portfolio ---------------//

exports.getPortfolio = async (req, res, next) => {
  const portfolio = await Portfolio.find().sort({ createdAt: "desc" });
  res.render("portfolio", {
    path: "/portfolio",
    portfolio: portfolio,
  });
};

exports.postPortfolio = async (req, res, next) => {
  const portfolio = new Portfolio({
    heading: req.body.heading,
    content: req.body.content,
    category: req.body.category
  });
  saveCoverPortfolio(portfolio, req.body.cover)

  try {
    await portfolio.save();
    res.redirect("/admin/portfolio");
  } catch (e) {
    res.render("portfolio", { path: "/portfolio" });
  }
};




exports.getEditPortfolio = async (req,res) => {
  try{
      let portfolio = await Portfolio.findById(req.params.id)
      res.render('edit-portfolio', {portfolio: portfolio})
  } catch {
      res.redirect('/admin/portfolio')
  }
};


exports.postEditPortfolio = async (req,res) => {
  let portfolio
  try {
      portfolio = await Portfolio.findById(req.params.id)
      portfolio.heading = req.body.heading
      portfolio.content = req.body.content
      await portfolio.save()
      res.redirect('/admin/portfolio')
  } catch {
      if (portfolio == null) {
          res.redirect('/admin/portfolio')
      } else {
          res.render('edit-portfolio', {
            portfolio: portfolio
          })
      }
  }
}



exports.deletePortfolio =  async (req,res) => {
  let portfolio
  try{
      portfolio = await Portfolio.findById(req.params.id)
      await portfolio.remove()
      res.redirect('/admin/portfolio')
  } catch {
      if (portfolio == null) {
          res.redirect('/admin/portfolio')
      }
  }
};



function saveCoverPortfolio(portfolio, coverEncoded) {
  if (coverEncoded == null) return
  const cover = JSON.parse(coverEncoded)
  if (cover != null && imageMimeTypes.includes(cover.type)) {
    portfolio.coverImage = new Buffer.from(cover.data, 'base64')
    portfolio.coverImageType = cover.type
  }
}

//--------------Portfolio end ---------------//

//--------------Portfolio Details page ---------------//

exports.getPortfolioDetails =async (req,res,next) => {
  const portfoliodetails = await PortfolioDetails.find().sort({ createdAt: "desc" });
  res.render('portfolio-details',{
    path: "/portfolio-details",
    portfoliodetails: portfoliodetails
  })
}



exports.postPortfolioDetails = async (req, res, next) => {
  const portfoliodetails = new PortfolioDetails({

  });
  saveCoverPortfolioDetails(portfoliodetails, req.body.cover)
  try {
    await portfoliodetails.save();
    res.redirect("/admin/portfolio-details");
  } catch (e) {
    res.render("portfolio-details", { path: "/portfolio-details" });
  }
};



exports.deletePortfolioDetails  = async (req,res) => {
  let portfoliodetails
  try{
    portfoliodetails = await PortfolioDetails.findById(req.params.id)
      await portfoliodetails.remove()
      res.redirect('/admin/portfolio-details')
  } catch {
      if (portfoliodetails == null) {
          res.redirect('/admin/portfolio-details')
      }
  }
};

function saveCoverPortfolioDetails(portfoliodetails, coverEncoded) {
  if (coverEncoded == null) return
  const cover = JSON.parse(coverEncoded)
  if (cover != null && imageMimeTypes.includes(cover.type)) {
    portfoliodetails.coverImage = new Buffer.from(cover.data, 'base64')
    portfoliodetails.coverImageType = cover.type
  }
}

//--------------Portfolio Details end ---------------//

//--------------Service ---------------//

exports.getService = async (req, res, next) => {
  const service = await Service.find().sort({ createdAt: "desc" });
  res.render("service", {
    path: "/service",
    service: service,
  });
};

exports.postService = async (req, res, next) => {
  const service = new Service({
    heading: req.body.heading,
    content: req.body.content,

  });
  saveCoverService(service, req.body.cover)
  try {
    await service.save();
    res.redirect("/admin/service");
  } catch (e) {
    res.render("service", { path: "/service" });
  }
};






exports.getEditService = async (req,res) => {
  try{
      let service = await Service.findById(req.params.id)
      res.render('edit-service', {service: service})
  } catch {
      res.redirect('/admin/service')
  }
};


exports.postEditService = async (req,res) => {
  let service
  try {
      service = await Service.findById(req.params.id)
      service.heading = req.body.heading
      service.content = req.body.content
      await service.save()
      res.redirect('/admin/service')
  } catch {
      if (service == null) {
          res.redirect('/admin/service')
      } else {
          res.render('edit-service', {
            service: service
          })
      }
  }
}


exports.deleteService = async (req,res) => {
  let service
  try{
    service = await Service.findById(req.params.id)
      await service.remove()
      res.redirect('/admin/service')
  } catch {
      if (service == null) {
          res.redirect('/admin/service')
      }
  }
};




function saveCoverService(service, coverEncoded) {
  if (coverEncoded == null) return
  const cover = JSON.parse(coverEncoded)
  if (cover != null && imageMimeTypes.includes(cover.type)) {
    service.coverImage = new Buffer.from(cover.data, 'base64')
    service.coverImageType = cover.type
  }
}
//--------------Service end---------------//

//--------------Blog ---------------//

exports.getBlog = async (req, res, next) => {
  const blog = await Blog.find().sort({ createdAt: "desc" });
  res.render("blog", {
    path: "/blog",
    blog: blog,
  });
};

exports.postBlog = async (req, res, next) => {
  const blog = new Blog({
    name: req.body.name,
    heading: req.body.heading,
    content: req.body.content,

  });
  saveCoverBlog(blog, req.body.cover)
  try {
    await blog.save();
    res.redirect("/admin/blog");
  } catch (e) {
    res.render("blog", { path: "/blog" });
  }
};


exports.getEditBlog = async (req,res) => {
  try{
      let blog = await Blog.findById(req.params.id)
      res.render('edit-blog', {blog: blog})
  } catch {
      res.redirect('/admin/blog')
  }
};


exports.postEditBlog = async (req,res) => { 
  let blog
  try {
      blog = await Blog.findById(req.params.id)
      blog.name = req.body.name
      blog.heading = req.body.heading
      blog.content = req.body.content
      await blog.save()
      res.redirect('/admin/blog')
  } catch {
      if (blog == null) {
          res.redirect('/admin/blog')
      } else {
          res.render('edit-blog', {
              blog: blog
          })
      }
  }
}



exports.deleteBlog = async (req,res) => {
  let blog
  try{
    blog = await Blog.findById(req.params.id)
      await blog.remove()
      res.redirect('/admin/blog')
  } catch {
      if (blog == null) {
          res.redirect('/admin/blog')
      }
  }
};


function saveCoverBlog(blog, coverEncoded) {
  if (coverEncoded == null) return
  const cover = JSON.parse(coverEncoded)
  if (cover != null && imageMimeTypes.includes(cover.type)) {
    blog.coverImage = new Buffer.from(cover.data, 'base64')
    blog.coverImageType = cover.type
  }
}
//--------------Blog end---------------//

//--------------Faq ---------------//

exports.getFaq = async (req, res, next) => {
  const faq = await Faq.find().sort({ createdAt: "desc" });
  res.render("faq", {
    path: "/faq",
    faq: faq,
  });
};

exports.postFaq = async (req, res, next) => {
  const faq = new Faq({
    heading: req.body.heading,
    question: req.body.question,
    answer: req.body.answer,
  });
  try {
    await faq.save();
    res.redirect("/admin/faq");
  } catch (e) {
    res.render("faq", { path: "/faq" });
  }
};



exports.getEditFaq = async (req,res) => {
  try{
      let faq = await Faq.findById(req.params.id)
      res.render('edit-faq', {faq: faq})
  } catch {
      res.redirect('/admin/faq')
  }
};


exports.postEditFaq = async (req,res) => {
  let faq
  try {
      faq = await Faq.findById(req.params.id)
      faq.heading = req.body.heading
      faq.question = req.body.question
      faq.answer = req.body.answer
      await faq.save()
      res.redirect('/admin/faq')
  } catch {
      if (faq == null) {
          res.redirect('/admin/faq')
      } else {
          res.render('edit-faq', {
              faq: faq
          })
      }
  }
}


exports.deleteFaq = async (req,res) => {
  let faq
  try{
    faq = await Faq.findById(req.params.id)
      await faq.remove()
      res.redirect('/admin/faq')
  } catch {
      if (faq == null) {
          res.redirect('/admin/faq')
      }
  }
};
//--------------Faq end---------------//






