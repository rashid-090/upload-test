const ContactMessage = require('../models/contactmsg')
const EmailMessage = require('../models/email')
const RequirementsMessage = require('../models/requirements')


//----------------------------Contact Details------------------------------//

//---Contactpage Form from frontend  ---//
exports.getcontactMessage = async (req,res) => {
  const message = await ContactMessage.find().sort({ createdAt: "desc" });
  res.render("contact", {
    title:'Contact',
    path: "/contact",
    message: message,
  });
}


exports.postcontactMessage = async (req,res) => {
    try{
      const name = req.body.name;
      const email = req.body.email;
      const phone = req.body.phone;
      const message = req.body.message;
      console.log(req.body.name);
      const sendMsg = new ContactMessage({
        name: name,
        email: email,
        phone: phone,
        message: message
      })
      let created = await sendMsg.save();
      console.log(created);
      console.log("message sent");
      res.status(200).send("message sent")
    }catch (error) {
      res.status(400).send(error)
    }
  }
  

exports.deletecontactMessage =  async (req,res) => {
  let message
  try{
    message = await ContactMessage.findById(req.params.id)
      await message.remove()
      res.redirect('/admin/contact')
  } catch {
      if (message == null) {
          res.redirect('/admin/contact')
      }
  }
};

//----Contactpage Form from frontend End ----//


//--- Email message from frontend -----//


exports.getemailMessage = async (req,res) => {
  const message = await EmailMessage.find().sort({ createdAt: "desc" });
  res.render("email", {
    title:'Emails',
    path: "/email",
    message: message,
  });
}

exports.postemailMessage = async (req,res) => {
  try{

    const email = req.body.email;

    console.log(req.body.email);
    const sendMsg = new EmailMessage({

      email: email
 
    })
    let created = await sendMsg.save();
    console.log(created);
    console.log("message sent");
    res.status(200).send("message sent")
  }catch (error) {
    res.status(400).send(error)
  }
}

exports.deletemailMessage =  async (req,res) => {
  let message
  try{
    message = await EmailMessage.findById(req.params.id)
      await message.remove()
      res.redirect('/admin/email')
  } catch {
      if (message == null) {
          res.redirect('/admin/email')
      }
  }
};


//--- Email message from frontend End --------//


//--- Requirements message from frontend  -----//


exports.getRequirements = async (req,res) => {
  const message = await RequirementsMessage.find().sort({ createdAt: "desc" });
  res.render("requirements", {
    title:'requirements',
    path: "/requirements",
    message: message,
  });
}

exports.postRequirements = async (req,res) => {
  try{
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const start = req.body.start;
    const service = req.body.service;
    const requirement = req.body.requirement;
    const project = req.body.project;

    console.log(req.body.name);
    const sendMsg = new RequirementsMessage({
      name: name,
      email: email,
      phone: phone,
      start: start,
      service: service,
      requirement:requirement,
      project:project
    })
    let created = await sendMsg.save();
    console.log(created);
    console.log("message sent");
    res.status(200).send("message sent")
  }catch (error) {
    res.status(400).send(error)
  }
}

exports.deletRequirements =  async (req,res) => {
  let message
  try{
    message = await RequirementsMessage.findById(req.params.id)
      await message.remove()
      res.redirect('/admin/requirements')
  } catch {
      if (message == null) {
          res.redirect('/admin/requirements')
      }
  }
};


//--- Requirements message from frontend  End -----//

  
  //---------------------------- Contact Details--------------------- --------//



