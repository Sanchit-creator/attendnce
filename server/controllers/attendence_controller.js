const Attendence = require('../model/attendence');

module.exports.date = (req, res) => {
    let posts = Attendence.find(
        {"date": {$gte:req.params['fromDate'],$lt:req.params['toDate']}, locationId: req.params['locationId']}, function(err, posts) {
        if (err) {
            console.log(err);
        }else{
            res.json(posts);
        }
    })
}

module.exports.create = async(req, res) => {
    try {
        const exist = await Attendence.findOne({userId: req.body.userId})
        if (exist) {
            return res.status(401).json({message : 'Username already exist'});
        }
        const user = req.body;
        const newUser = new Attendence(user);
        await newUser.save();
        res.status(200).json({message: user});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


