import { Game } from './juego.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    scene: [Game], //arreglo de pantallas del juego, menu, play, game over...
    physics: { //tipos de fisicas que podriamos configurar
        default: 'arcade', 
        arcade: {
            gravity: {y:400},
            debug: false
        }
    }
}

var game = new Phaser.Game(config); //instancia el nuevo juego
