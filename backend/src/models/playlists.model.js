export default function (sequelize, DataTypes) {
  const Playlist = sequelize.define('Playlist', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
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
    Playlist.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id'
    });

    Playlist.belongsToMany(models.Musica, {
      through: models.PlaylistMusica,
      foreignKey: 'playlist_id',
      otherKey: 'musica_id',
      onDelete: 'CASCADE'
    });
  };

  return Playlist;
}