/*****************************************************************************************
 * @class
 * La clase Palas representa las palas del juego.
 * @extends Phaser.GameObjects.Sprite
 * @since 5/1/2024
 * @creator Mst. Erick Brenes
 * @Updated 5/1/2024 by eBrenes
 * @version 1.0
 *************************************************************************************/

export default class Palas extends Phaser.GameObjects.Sprite {
    /*************************************************************************************
     * Constructor de la clase Palas.
     * @param {Phaser.Scene} scena - La escena a la que pertenece la pala.
     * @param {number} x - La posición X inicial de la pala.
     * @param {number} y - La posición Y inicial de la pala.
     * @param {string} type - El tipo de pala (izquierda/derecha).
     *************************************************************************************/
    constructor(scena, x, y, type) {
        super(scena, x, y, type);
        scena.add.existing(this);
        scena.physics.world.enable(this);
        this.body.immovable = true;
        this.body.setCollideWorldBounds(true);
    }

    /*************************************************************************************
     * Establece la velocidad vertical de la pala.
     * @param {number} pVel - La velocidad vertical deseada.
     *************************************************************************************/
    setVelocity(pVel) {
        this.body.setVelocityY(pVel);
    }
}
