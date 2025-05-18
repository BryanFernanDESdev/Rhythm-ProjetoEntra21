export default function (sequelize, DataTypes) {
  const Playlist = sequelize.define('Playlist', {
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'playlists',
    timestamps: false
  });

  Playlist.associate = (models) => {
    Playlist.belongsToMany(models.Musica, {
      through: models.PlaylistMusica,
      foreignKey: 'playlist_id',
      otherKey: 'musica_id',
      onDelete: 'CASCADE'
    });
  };

  return Playlist;
}