module.exports = (Sequelize, sequelize) => {
    return sequelize.define('offices', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: Sequelize.STRING,
        website: Sequelize.STRING,
        address: Sequelize.STRING
    });
};

/*
{
	"title": "office 1",
	"website": "website 1",
	"address": "address 1"
}
*/