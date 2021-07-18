
module.exports = app =>{
    
    const save = async (_req, res) =>{
        if(employee) {
            app.db('employee')
                .insert(employee)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('employee')
            .select()
            .then(employee => res.json(employee))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('employee')
            .select()
            .where({id: req.params.id})
            .then(employee => res.json(employee))
            .catch(err => res.status(500).send(err))
    }

    const removeById = (req, res) => {
        return res.status(200).send('save')
    }

    return {save, get, getById, removeById}
}