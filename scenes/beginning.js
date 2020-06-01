class Beginning extends Phaser.Scene {
  constructor(){
    super('Beginning');
  }
  preload (){
    this.load.spritesheet('baznner', 'assets/baz_banner.png',
      {
        frameWidth: 1280,
        frameHeight: 800
      }
    );
    this.load.image('start', 'assets/start_arrow.png',);
  }

  create (){
      var sprite = this.add.sprite(600,350, 'baznner');
      this.anims.create({
        key: 'bannerboop',
        frames: this.anims.generateFrameNumbers('baznner', {start: 0, end:1 }),
        frameRate: 10,
        repeat: -1
      });

      var button = this.add.sprite(600,650, 'start').setInteractive();
      button.on('pointerdown', function (pointer) {
        this.scene.start('Map');
      }, this);
  };

  update(){

  }
};
