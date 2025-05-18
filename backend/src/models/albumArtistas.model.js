// models/AlbumArtista.js
export default function (sequelize, DataTypes) {
  const AlbumArtista = sequelize.define('AlbumArtista', {
    album_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'albuns',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    artista_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artistas',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }, {
    tableName: 'album_artistas',
    timestamps: false
  });

  return AlbumArtista;
}