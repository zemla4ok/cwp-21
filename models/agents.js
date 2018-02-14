module.exports = (Sequelize, sequelize) => {
    return sequelize.define('agents', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        tel: Sequelize.STRING
    });
};

/*
{
	"name": "agent5",
	"email": "em1@q.q",
	"tel": "123242",
	"officeId": 2
}
*/