const Thing = require('../models/things');

exports.createThing = (req, res) => {
    const newThing = new Thing(req.body);
    newThing.save()
    .then(() => res.status(201).json({newThing}))
    .catch(error => res.status(400).json({ error }));
};

exports.OneThing = (req, res) => {
    const id = req.params.id;

    Thing.findOne({_id: id})
    .then((Thing) => res.status(201).json({Thing}))
    .catch(error => res.status(400).json({ error }));
};

exports.AllThing = (req, res) => {
    Thing.find()
    .then((Thing) => res.status(201).json({Thing}))
    .catch(error => res.status(400).json({ error }));
};

exports.EditThing = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        const thing = await  Thing.findById(id);
        if (!thing) {
            return res.status(404).json({error : 'Thing not Found'});
        }
        thing.set(data);
       await thing.save();
       return res.json(thing);
    } catch(error) {
        res.status(400).json({ error: error.message });
    } 
    };

    exports.Delete = async (req, res) => {
        const id = req.params.id;

        try {
           const deletedThing =  await Thing.findByIdAndDelete(id);
           if (!deletedThing) {
            return res.status(404).json({ error: 'Thing not found' });
        }

        res.json({ msg: 'DELETE_SUCCESS', data: deletedThing });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};