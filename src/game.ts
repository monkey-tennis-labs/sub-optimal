import * as Phaser from "phaser";

export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  preload() {
    this.load.atlas(
      "diver",
      "assets/sprites/hero/diver-swim.png",
      "assets/sprites/hero/diver-swim.json",
    );
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    this.add.sprite(width * 0.5, height * 0.5, "diver");
  }

  update() {}
}

// Default values - need to be tweaked
const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 800,
  backgroundColor: "#125555",
  scene: Game,
};

const game = new Phaser.Game(config);
