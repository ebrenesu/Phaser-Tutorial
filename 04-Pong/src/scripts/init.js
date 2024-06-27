import Bootloader from './bootloader.js'
import Scene_Play from '../scenes/scene_play.js';

const config = {
    width:  640,
    height: 400,
    parent: "contenedor",
    type:   Phaser.AUTO,
    backgroundColor:    '#392542',
    scene: [Bootloader, Scene_Play],
    physics:{
        default: "arcade"
    }
}

new Phaser.Game(config);