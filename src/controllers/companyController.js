
module.exports = app =>{
    
    const save = async (_req, res) =>{
        return res.status(200).send('save')
    }

    const get = (req, res) => {
        app.db('company')
            .select()
            .then(company => res.json(company))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('company')
            .select()
            .where({id: req.params.id})
            .then(company => res.json(company))
            .catch(err => res.status(500).send(err))
    }

    const removeById = (req, res) => {
        return res.status(200).send('save')
    }

    return {save, get, getById, removeById}
}