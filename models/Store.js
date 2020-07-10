const Store = (sequelize, DataTypes) => {
  const Store = sequelize.define("Store", // name of Model file name in case sensitive
    {
      // fields
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, notEmpty: true },
      active: { type: DataTypes.INTEGER }
    },
    {
      tableName: 'stores',
      timestamps: false
    }
  );
  return Store;
};

module.exports = Store;

