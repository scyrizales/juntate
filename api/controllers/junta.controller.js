exports.findByUsuario = (req, res) =>{
    res.json({"message": "Find by usuario "+req.params.id});
}

exports.findOne = (req, res) =>{
    res.json({"message": "Find one "+req.params.id});
}

exports.create = (req, res) =>{
    res.json({"message": "Create"});
}

exports.findAll = (req, res) => {
    res.json({'message': 'find all'});
};