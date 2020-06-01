class Port extends Phaser.Scene {
  constructor(){
    super('Port');
  }
  preload (){
    this.load.image('porttile', 'assets/portfloortile.png');
    this.load.image('inn', 'assets/inn.png');
    this.load.image('tree', 'assets/tree.png');
    this.load.spritesheet('baz','assets/bazshort.png',
    {
      frameWidth: 160,
      frameHeight: 160
    });
    //IMPORT SPRITESHEET OF ANCHORS
    this.load.spritesheet('tania','assets/tania.png',
      { frameWidth: 160, frameHeight: 160}
    );
    this.load.spritesheet('fish', 'assets/fishmarket.png',
      { frameWidth: 95, frameHeight: 95 }
    );
    this.load.spritesheet('taniatalk', 'assets/taniatalk.png',
      { frameWidth: 1440, frameHeight: 900 }
    );
    this.load.spritesheet('anchor', 'assets/anchors.png',
      { frameWidth: 80, frameHeight: 80 }
    );
  };

  create (){
    this.portmap = this.make.tilemap({ data: portmaps[0], tileWidth: 40, tileHeight: 40});
    this.tiles = this.portmap.addTilesetImage("porttile");
    this.layer = this.portmap.createDynamicLayer(0, this.tiles, 0, 0);
    // this.portmap.setCollision([2,3]);
    // this.physics.add.collider(this.player, this.layer);

    this.add.image(900,300, 'inn');
    this.add.image(170,80, 'tree');
    this.add.image(200,370, 'tania');

    //these are the anchors
    var anchor1 = this.add.sprite(535,640, 'anchor');
    anchor1.setFrame(0)
    var anchor2 = this.add.sprite(735,640, 'anchor');
    anchor2.setFrame(1)
    //this is the big boi
    var sprite1 = this.add.sprite(340,200, 'fish');
    sprite1.setFrame(0)
    //these are the verticals
    var sprite2 = this.add.sprite(400,280, 'fish');
    sprite2.setFrame(1)
    var sprite3 = this.add.sprite(400,330, 'fish');
    sprite3.setFrame(3)
    var sprite4 = this.add.sprite(400,380, 'fish');
    sprite4.setFrame(2)
    var sprite8 = this.add.sprite(340,280, 'fish');
    sprite8.setFrame(3)
    var sprite9 = this.add.sprite(340,330, 'fish');
    sprite9.setFrame(2)
    var sprite10 = this.add.sprite(340,380, 'fish');
    sprite10.setFrame(4)
    //these are the horizontals
    var sprite5 = this.add.sprite(270,220, 'fish');
    sprite5.setFrame(2)
    var sprite6 = this.add.sprite(215,220, 'fish');
    sprite6.setFrame(3)
    var sprite7 = this.add.sprite(160,220, 'fish');
    sprite7.setFrame(1)
    //these are the hanging fishies
    var sprite11 = this.add.sprite(190,500, 'fish');
    sprite11.setFrame(6)
    var sprite12 = this.add.sprite(100,500, 'fish');
    sprite12.setFrame(7)

    this.player = this.physics.add.sprite(1150,450, 'baz');
    this.player.body.setAllowGravity(false);
    this.player.setCollideWorldBounds(true);
    //animations
    this.anims.create({
      key:'left',
      frames: this.anims.generateFrameNumbers('baz', {start: 15, end:19 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key:'up',
      frames: this.anims.generateFrameNumbers('baz', { start: 10, end: 14 }),
      frameRate:10,
      repeat: -1
    });

    this.anims.create({
      key:'turn',
      frames: [ { key: 'baz', frame: 0 }],
      frameRate: 20
    });

    this.anims.create({
      key:'right',
      frames: this.anims.generateFrameNumbers('baz', { start: 5, end: 9 }),
      frameRate:10,
      repeat: -1
    });

    this.anims.create({
      key:'down',
      frames: this.anims.generateFrameNumbers('baz', {start: 0, end:4 }),
      frameRate: 10,
      repeat: -1
    });

    this.cursors = this.input.keyboard.createCursorKeys();
  };


  update(){
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
};
