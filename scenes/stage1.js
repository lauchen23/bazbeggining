class Stage1 extends Phaser.Scene {
  constructor () {
    super('Stage1');
  }


  preload () {
//SET THE BACKGROUND COLOR.
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#3498db");
//LOAD YOUR CHARACTER SPRITE.
    this.load.spritesheet('alien','assets/tortle.png',
    {
      frameWidth: 64,
      frameHeight: 64
    });
//LOAD THE STAR IMAGE.
    this.load.image('star','assets/heart.png');
  }


  create () {
//ADD THE ALIEN +SOME PROPERTIES.
    this.player = this.physics.add.sprite(100,450, 'alien');
    this.player.body.setAllowGravity(false);
    this.player.setCollideWorldBounds(true);
    this.player.myData = {};
    this.player.myData.heart = false;
//ANIMATIONS FOR THE ALIEN!
    this.anims.create({
      key:'left',
      frames: this.anims.generateFrameNumbers('alien', {start: 0, end:1 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key:'turn',
      frames: [ { key: 'alien', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key:'right',
      frames: this.anims.generateFrameNumbers('alien', { start: 2, end: 3 }),
      frameRate:10,
      repeat: -1
    });

    this.anims.create({
      key:'love',
      frames: [ { key: 'alien', frame: 5 }],
      frameRate: 20
    })
//TURN ON THE CURSOR.
    this.cursors = this.input.keyboard.createCursorKeys();
  //THIS IS THE STAR GROUP.
    this.stars = this.physics.add.group({
      key: 'star',
    });
//CREATE A REPEATED, TIMED EVENT.
  this.starCreateEvent = this.time.addEvent({ delay: 500, callback: this.createStar, callbackScope: this, loop : true });
//ADD A SCORE VARIABLE.
  this.score = 0
//DISPLAY THE SCORE WITH A TEXT BOX.
  this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000'});
  }


  update(){
//CREATE AN OVERLAP.
      this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
//DEFINING CURSOR ACTIONS.
    if (this.cursors.left.isDown)
    {
      this.player.setVelocityX(-160);
      this.player.anims.play('left', true);
      this.player.myData.heart = false;
    }
    else if (this.cursors.right.isDown)
    {
      this.player.setVelocityX(160);
      this.player.anims.play('right', true);
      this.player.myData.heart = false;
    }
    else
    {
      this.player.setVelocityX(0);
      if (this.player.myData.heart){
        this.player.anims.play('love', true);
      }
      else {
        this.player.anims.play('turn', true);
        this.player.myData.heart = false;
      }
    }
  }
//CREATE THE CALLBACK FUNCTION FOR STAR.
  createStar(){
    this.stars.add(this.physics.add.sprite(Phaser.Math.Between(20, 580), 0, 'star'));
  }
//CREATE COLLECTSTAR FUNCTION.
  collectStar(player,star){
    star.destroy()
    this.player.myData.heart = true;
    //UPDATE THE SCORE.
    this.score += 1;
    this.scoreText.setText('Hearts: ' + this.score);
      if (this.score >= 5)
      {
        this.scene.start('Stage2');
      }
  }
};
