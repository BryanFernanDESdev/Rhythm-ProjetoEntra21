export default function (sequelize, DataTypes) {
  const Usuario = sequelize.define('Usuario', {
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    criado_em: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'usuarios',
    timestamps: false
  });

  Usuario.associate = (models) => {
    Usuario.hasMany(models.Playlist, { foreignKey: 'usuario_id' });
    Usuario.hasOne(models.SpotifyUser, { foreignKey: 'usuario_id' });
  };

  return Usuario;
}