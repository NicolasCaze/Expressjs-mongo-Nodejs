const Thing = require('../models/things');


exports.createThing = (req, res) => {
    const { title, description, imageUrl } = req.body;

    const newThing = new Thing({
        title,
        description,
        imageUrl,
    });

    newThing.save()
        .then(() => {
            console.log('Objet enregistré avec succès');
            res.redirect('/api/things');  
        })
        .catch(error => {
            console.error('Erreur lors de l\'enregistrement de l\'objet :', error);
            res.status(400).json({ error });
        });
};


exports.OneThing = (req, res) => {
    const id = req.params.id;

    Thing.findOne({_id: id})
    .then(thing => { res.render('../views/unobjet', {thing});
})
    .catch(error => res.status(400).json({ error }));
};

exports.AllThing = (req, res) => {
    Thing.find()
    .then(things => {
        res.render('../views/list', { things });
    })
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