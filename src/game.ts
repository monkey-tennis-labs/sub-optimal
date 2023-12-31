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
    this.anims.create({
      key: "diver-swim",
      frames: this.anims.generateFrameNames("diver", {
        start: 0,
        end: 6,
        prefix: "diver-swim-",
        suffix: ".png",
      }),
      repeat: -1,
      frameRate: 10,
    });

    const width = this.scale.width;
    const height = this.scale.height;

    const diver = this.physics.add
      .sprite(width * 0.5, height * 0.5, "diver")
      .play("diver-swim");
  }

  update() {}
}

// Default values - need to be tweaked
const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 800,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 200,
      },
    },
  },
  backgroundColor: "#125555",
  scene: Game,
};

const game = new Phaser.Game(config);
