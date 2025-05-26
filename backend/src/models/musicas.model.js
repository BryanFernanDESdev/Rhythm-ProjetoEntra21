export default function (sequelize, DataTypes) {
  const Musica = sequelize.define('Musica', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    numero_faixa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bpm: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    compasso: {
      type: DataTypes.STRING(10),
      defaultValue: '4/4'
    },
    duracao: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cifra: {
      type: DataTypes.TEXT('long')
    },
    afinacao:{
      type:DataTypes.TEXT,
      allowNull:true,
      defaultValue:'Padrão'
    },
    tom_id: DataTypes.INTEGER,
    album_id: DataTypes.INTEGER
  }, {
    tableName: 'musicas',
    timestamps: false
  });

  Musica.associate = (models) => {
    Musica.belongsToMany(models.Playlist, {
      through: models.PlaylistMusica,
      foreignKey: 'musica_id',
      otherKey: 'playlist_id',
      onDelete: 'CASCADE'
    });
  };

  return Musica;
}