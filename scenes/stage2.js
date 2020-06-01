class Stage2 extends Phaser.Scene {
  constructor(){
    super('Stage2');
  }
  preload (){
    this.cameras.main.backgroundColor= Phaser.Display.Color.HexStringToColor("#3498db");
  }

  create (){
    this.score = "0"
    this.scoreText = this.add.text(16, 16, 'You Win!', { fontSize: '32px', fill: '#000'});
  }

  update(){
  }
};
