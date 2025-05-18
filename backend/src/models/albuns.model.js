export default function (sequelize, DataTypes) {
  const Album = sequelize.define('Album', {
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cover_url: DataTypes.STRING(255),
    lancado_em: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    artistas_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'albuns',
    timestamps: false
  });

  Album.associate = (models) => {
    Album.belongsToMany(models.Artista, {
      through: models.AlbumArtista,
      foreignKey: 'album_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };

  return Album;
}