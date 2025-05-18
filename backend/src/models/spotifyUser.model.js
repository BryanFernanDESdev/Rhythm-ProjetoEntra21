export default function (sequelize, DataTypes) {
  const SpotifyUser = sequelize.define('SpotifyUser', {
    spotify_user: {
      type: DataTypes.STRING(255),
      unique: true
    },
    access_token: {
      type: DataTypes.STRING(255),
      unique: true
    },
    refresh_token: {
      type: DataTypes.STRING(255),
      unique: true
    },
    token_expires_at: DataTypes.DATE
  }, {
    tableName: 'spotify_user',
    timestamps: false
  });

  SpotifyUser.associate = (models) => {
    SpotifyUser.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
  };

  return SpotifyUser;
}