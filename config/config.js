let config =  {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1280,
  height: 800,
  physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {y: 300}
        }
    },
//LOADING UP DIFFERENT SCENES.
  // scene:[Beginning, Map, Kavia, Taup, Tendro, Piro, Port, Rei, Omo, Glaion, Azadeh]
  scene:[Port]
};
