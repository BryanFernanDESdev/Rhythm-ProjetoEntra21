export default function (sequelize, DataTypes) {
  const Artista = sequelize.define('Artista', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    foto_url: DataTypes.STRING
  }, {
    tableName: 'artistas',
    timestamps: false
  });

  Artista.associate = (models) => {
    Artista.belongsToMany(models.Album, {
      through: models.AlbumArtista,
      foreignKey: 'artista_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };

  return Artista;
}