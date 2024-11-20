module.exports=(sequelize, DataTypes)=>{

    const Student = sequelize.define('student', {
        student_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastname: {
            type: DataTypes.TEXT,
            allowNull: false,
          },

          gender: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
      });
      
  return Student
 }