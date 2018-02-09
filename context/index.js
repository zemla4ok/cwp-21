module.exports = (Sequelize, config) => {
    const options = {
        host: config.host,
        dialect: config.dialect,
        logging: false,
        define: {
            timestamps: true,
            paranoid: true,
            defaultScope: {
                where: { deletedAt: { $eq: null }}
            }
        }
    }

    const sequelize = new Sequelize(config.name, config.user,
                                    config.password, options);

    const Agents = require('../models/agents')(Sequelize, sequelize);
    const Offices = require('../models/offices')(Sequelize, sequelize);
    const Properties = require('../models/properties')(Sequelize, sequelize);

    Properties.belongsTo(Agents);
    Agents.hasMany(Properties);

    Agents.belongsTo(Offices);
    Offices.hasMany(Agents);

    return {
        agents: Agents,
        offices: Offices,
        properties: Properties,

        sequelize,
        Sequelize,
    };
};