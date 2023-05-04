const Location = require('../model/location')


module.exports.newLocation = async (req, res) => {
    try {
        const exist = await Location.findOne({locationName: req.body.locationName})
        if (exist) {
            return res.status(401).json({message : 'Username already exist'});
        }
        const user = req.body;
        const newUser = new Location(user);
        await newUser.save();
        res.status(200).json({message: user});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports.get = (req, res) => {
    let posts = Location.find({}, function(err, posts) {
        if (err) {
            console.log(err);
        }else{
            res.json(posts);
        }
    })

}


