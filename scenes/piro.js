class Piro extends Phaser.Scene {
  constructor(){
    super('Piro');
  }
  preload (){
    this.load.image('woodfloor', 'assets/wood.png');
    this.load.image('bed', 'assets/furnitures.png');
    this.load.image('out','assets/out.png')
    this.load.spritesheet('baz','assets/bazshort.png',
    {
      frameWidth: 160,
      frameHeight: 160
    });
  };

  create (){
    this.map = this.make.tilemap({ data: maps[0], tileWidth: 80, tileHeight: 80});
    this.tiles = this.map.addTilesetImage("woodfloor");
    this.layer = this.map.createDynamicLayer(0, this.tiles, 0, 0);
    this.add.image(200,350,'bed');

    this.outside = this.physics.add.sprite(1150,500, 'out');
    this.outside.body.setAllowGravity(false);
    this.player = this.physics.add.sprite(100,450, 'baz');
    this.player.body.setAllowGravity(false);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key:'left',
      frames: this.anims.generateFrameNumbers('baz', {start: 16, end:20 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key:'turn',
      frames: [ { key: 'baz', frame: 0 }],
      frameRate: 20
    });

    this.anims.create({
      key:'right',
      frames: this.anims.generateFrameNumbers('baz', { start: 6, end: 10 }),
      frameRate:10,
      repeat: -1
    });

    this.physics.add.collider(this.player, this.layer);
  //ADD CURSORS.
    this.cursors = this.input.keyboard.createCursorKeys();
  //ADD DIALOGUE.
    this.playerDialogue= this.add.text(20,200, "Hello, and welcome to BAZ.", { fontSize: '32px', fill: '000' });
    this.playerDialogue= this.add.text(20,250, "Using the arrow keys, walk right to the 'Out' sign.", { fontSize: '32px', fill: '000' });


  };

  update(){
//Create overlap
    this.physics.add.overlap(this.player, this.outside, this.leaveRoom, null, this);

    if (this.cursors.left.isDown)
    {
      this.player.setVelocityX(-160);
      this.player.anims.play('left', true);
    }
    else if (this.cursors.right.isDown)
    {
      this.player.setVelocityX(160);
      this.player.anims.play('right', true);
    }
    else
    {
      this.player.setVelocityX(0);
      this.player.anims.play('turn', true);
      }
  }

  leaveRoom(player,outside){
    this.scene.start('Port');
    this.scene.stop('Piro');
  }
};
