function isLoggedOut(req,res,next) {
    if (!req.isAuthenticated()) return next();
    res.redirect('/admin/faq')
}



module.exports = isLoggedOut;