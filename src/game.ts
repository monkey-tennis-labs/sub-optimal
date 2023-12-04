import * as Phaser from "phaser";

export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  preload() {}

  create() {}

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
