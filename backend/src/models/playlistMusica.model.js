// models/PlaylistMusica.js
export default function (sequelize, DataTypes) {
  const PlaylistMusica = sequelize.define('PlaylistMusica', {
    playlist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'playlists',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    musica_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'musicas',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    adicionado_em: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'playlist_musica',
    timestamps: false
  });

  return PlaylistMusica;
}