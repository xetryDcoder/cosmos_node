module.exports = (sequelize, Sequelize) => {
    const Todo = sequelize.define('todo', {
        task: {
            type: Sequelize.STRING
        }, 
    })

    return Todo
}