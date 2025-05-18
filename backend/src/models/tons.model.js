export default function (sequelize, DataTypes) {
  const Tom = sequelize.define('Tom', {
    tom: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false
    }
  }, {
    tableName: 'tons',
    timestamps: false
  });

  Tom.associate = (models) => {
    Tom.hasMany(models.Musica, { foreignKey: 'tom_id' });
  };

  return Tom;
}