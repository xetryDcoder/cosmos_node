module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define('student', {
        std_name: {
            type: Sequelize.STRING
        },
        std_address: {
            type: Sequelize.STRING
        },
        std_age: {
            type: Sequelize.STRING
        },
        std_fees: {
            type: Sequelize.STRING
        },
        std_level: {
            type: Sequelize.STRING
        },
    })

    return Student
}