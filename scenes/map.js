class Map extends Phaser.Scene {
  constructor(){
    super('Map');
  }
  preload (){
    this.load.image('mapmap', 'assets/mapmap.png');
    this.load.spritesheet('locations', 'assets/location.png',
      {
        frameWidth: 80,
        frameHeight: 80
      }
    );
  }

  create (){
    this.add.image(640,400, 'mapmap');

    var sprite1 = this.add.sprite(250,550, 'locations').setInteractive();
    sprite1.setFrame(0)
    sprite1.on('pointerdown', function (pointer) {
      this.scene.start('Kavia');
    }, this);

    var sprite2 = this.add.sprite(610,410, 'locations').setInteractive();
    sprite2.setFrame(1)
    sprite2.on('pointerdown', function (pointer) {
      this.scene.start('Tendro');
    }, this);


    var sprite3 = this.add.sprite(475,335, 'locations').setInteractive();
    sprite3.setFrame(2)
    sprite3.on('pointerdown', function (pointer) {
      this.scene.start('Taup');
    }, this);


    var sprite4 = this.add.sprite(390,450, 'locations').setInteractive();
    sprite4.setFrame(3)
    sprite4.on('pointerdown', function (pointer) {
      this.scene.start('Piro');
    }, this);


    var sprite5 = this.add.sprite(890,570, 'locations').setInteractive();
    sprite5.setFrame(4)
    sprite5.on('pointerdown', function (pointer) {
      this.scene.start('Rei');
    }, this);


    var sprite6 = this.add.sprite(300,310, 'locations').setInteractive();
    sprite6.setFrame(5)
    sprite6.on('pointerdown', function (pointer) {
      this.scene.start('Omo');
    }, this);


    var sprite7 = this.add.sprite(220,180, 'locations').setInteractive();
    sprite7.setFrame(6)
    sprite7.on('pointerdown', function (pointer) {
      this.scene.start('Glaion');
    }, this);

    var sprite8 = this.add.sprite(830,320, 'locations').setInteractive();
    sprite8.setFrame(7)
    sprite8.on('pointerdown', function (pointer) {
      this.scene.start('Azadeh');
    }, this);
  };


  update(){
  }
};
