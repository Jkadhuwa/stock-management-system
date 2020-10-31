module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    job_id: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  User.associate = () => {
    // associations can be defined here
  };
  return User;
};
