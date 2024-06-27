import escena1 from './Scenes/escena1.js';
import escena2 from './Scenes/escena2.js';

const config = {
    width:  500,
    height: 400,
    parent: "container",
    type:   Phaser.AUTO,
    backgroundColor:    '#392542',
    scene: [escena1, escena2]
}

new Phaser.Game(config);