const User = require("../models/user");

module.exports.admin = function (req, res) {
    return res.render("student");
};

module.exports.longleave = function (req, res) {
    User.find(
        { to_show_long: true },
        function (err, user) {
            if (err) {
                console.log("Error in fetching list from db");
                return res.redirect("back");
            }
            return res.render("adminlongl", {
                student_list: user,
            });
        }
    );
};

module.exports.lateleave = function (req, res) {
    User.find(
        { to_show_late: true, },
        function (err, user) {
            if (err) {
                console.log("Error in fetching list from db");
                return res.redirect("back");
            }
            return res.render("adminlatel", {
                student_list: user,
            });
        }
    );
};

module.exports.handleLongleave = function (req, res) {
    var myquery = { sid: req.params.sid };
    var newvalues = {};
    if (req.params.val == 1) {
        newvalues = { $set: { longleave_approved: true, longleave_applied: true } }; 
        //set leave approved, leave applied, to show false after end date
        //write code to send email to parents and user


        
    } else {
        newvalues = {
            $set: { longleave_approved: false, longleave_applied: false },
        };
    }
    User.updateOne(myquery, newvalues, function (err, res) {
        console.log("Sheet updated");
    });
    return res.redirect("back");
};

module.exports.handleLateleave = function (req, res) {
    if (req.params.val == 1) {
        User.find({ sid: req.params.sid }, function (err, user) {
            if (err) {
                console.log("Error in fetching list from db");
                return res.redirect("back");
            }
            var newvalues = {lateleave_approved: true,
                 lateleave_applied: true, lateleaves_sem: user[0]["lateleaves_sem"] + 1,
                  lateleaves_month: user[0]["lateleaves_month"] + 1 };
            //set leave approved, leave applied, to show false when current day exceeds late leave date
            User.findOneAndUpdate({ sid: req.params.sid }, newvalues, function (err, res) {
                   //write code to send email to parents and user



                    console.log("Sheet updated");
                }
            );
        });
    } else {
        var newvalues = { lateleave_approved: false, lateleave_applied: false };
        User.findOneAndUpdate({ sid: req.params.sid }, newvalues, function (err, res) {
            console.log("Sheet updated");
        });
    }
    return res.redirect("back");
};