module.exports = app => {

    app.route('/empresa')
        .post(app.src.controllers.companyController.save)
        .get(app.src.controllers.companyController.get)
    app.route('/empresa/:id')
        .get(app.src.controllers.companyController.getById)
        .delete(app.src.controllers.companyController.removeById)

    app.route('/funcionarios')
        .post(app.src.controllers.employeeController.save)
        .get(app.src.controllers.employeeController.get)
    app.route('/funcionarios/:id')
        .get(app.src.controllers.employeeController.getById)
        .delete(app.src.controllers.employeeController.removeById)
}