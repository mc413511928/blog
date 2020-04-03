const { User } = require('../../model/user');

module.exports = async (req, res) => {
    let _id = req.query.id;
    await User.findOneAndDelete({_id});
    res.redirect('/admin/user');
};