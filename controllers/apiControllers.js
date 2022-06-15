const Portfolio = require("../models/portfolio");
const Service = require("../models/service");
const Blog = require("../models/blog");
const Faq = require("../models/faq");

// ------------------------------------------------------- api calling to frondend---------------------------------------------------- //
// ---- portfolio---- //
exports.getApiPortfolio = async (req, res, next) => {
    Portfolio.find({}, function (err, docs) {
      if (err) {
        res.status(200).json({ result: err });
      } else if (docs.length > 0) {
        res.status(200).json({ status: 200, result: docs });
      }
    });
  };
  

// ---- Faq---- //
exports.getApiFaq = async (req, res, next) => {
    Faq.find({}, function (err, docs) {
      if (err) {
        res.status(200).json({ result: err });
      } else if (docs.length > 0) {
        res.status(200).json({ status: 200, result: docs });
      }
    });
  };
  
// ---- Blog---- //
exports.getApiBlog = async (req, res, next) => {
    Blog.find({}, function (err, docs) {
      if (err) {
        res.status(200).json({ result: err });
      } else if (docs.length > 0) {
        res.status(200).json({ status: 200, result: docs });
      }
    });
  };
    


// ---- Blog---- //  

exports.getApiService = async (req, res, next) => {
  Service.find({}, function (err, docs) {
    if (err) {
      res.status(200).json({ result: err });
    } else if (docs.length > 0) {
      res.status(200).json({ status: 200, result: docs });
    }
  });
};
  