import Palas from './../gameObjects/palas.js';

/*************************************************************************************
 * @class
 * La clase Scene_Play representa la escena principal del juego.
 * @extends Phaser.Scene
 * @since 5/1/2024
 * @creator Mst. Erick Brenes
 * @Updated 5/1/2024 by eBrenes
 * @version 1.0
 *************************************************************************************/
export default class Scene_Play extends Phaser.Scene {
    /**
     * Constructor de la clase Scene_Play.
     */
    constructor() {
        super({ key: "Scene_Play" });
    }

    /*************************************************************************************
     * Método del ciclo de vida de Phaser. Se llama una vez al inicio de la escena.
     *************************************************************************************/
    create() {
        // Configuración de cuales bordes son permitidos salirse.
        this.physics.world.setBoundsCollision(false, false, true, true);

        // Controles para el jugador derecho
        this.cursors = this.input.keyboard.createCursorKeys();

        // Controles para el jugador izquierdo
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        // Valores para pintar en pantalla
        let gW = this.getOptions(1);
        let gH = this.getOptions(2);
        let mP = this.getOptions(3);

        // Creación de objetos palas
        this.izq = new Palas(this, mP, gH / 2, "izquierda");
        this.der = new Palas(this, gW - mP, gH / 2, "derecha");

        // Creación de la línea separadora
        this.add.image(gW / 2, gH / 2, "separador");

        // Creación de la bola
        this.bola = this.physics.add.image(gW / 2, gH / 2, "bola");

        this.gamePhysicsConfig();

        //puntajes
        this.puntajeDer = 0;
        this.puntajeIzq = 0;
    }

    /*************************************************************************************
     * Método del ciclo de vida de Phaser. Se llama en cada fotograma.
     *************************************************************************************/
    update() {
        let gW = this.getOptions(1);
        let gH = this.getOptions(2);
        let bReset = (this.bola.x < 0) ? 1 : ((this.bola.x > gW) ? 2 : 0);
        let puntoFinal = 3;
        
        if (bReset !== 0) {
            this.bola.setPosition(gW / 2, gH / 2);
            this.bola.setVelocityX(this.velXBall(bReset));
            this.puntajeDer += (bReset == 1 ? 1 : 0 );
            this.puntajeIzq += (bReset == 2 ? 1 : 0 );
        }

        if( this.puntajeDer === puntoFinal ||  this.puntajeIzq === puntoFinal)
            this.scene.pause();
        
        // Validación del jugador derecho.
        if (this.cursors.down.isDown)
            this.der.setVelocity(300);
        else if (this.cursors.up.isDown)
            this.der.setVelocity(-300);
        else
            this.der.setVelocity(0);

        // Validación del jugador izquierdo.
        if (this.key_S.isDown)
            this.izq.setVelocity(300);
        else if (this.key_W.isDown)
            this.izq.setVelocity(-300);
        else
            this.izq.setVelocity(0);
    }

    /*************************************************************************************
     * Determina la velocidad X de la bola según el lado al que se debe resetear.
     * @param {number} pLado - Lado para resetear la bola (1 para izquierda, 2 para derecha).
     * @returns {number} - Valor de velocidad X.
     *************************************************************************************/
    velXBall(pLado) {
        return (pLado === 1) ? 180 : -180;
    }

    /*************************************************************************************
     * Configura las propiedades de física del juego.
     *************************************************************************************/
    gamePhysicsConfig() {
        this.bola.setCollideWorldBounds(true);
        this.physics.add.collider(this.bola, this.izq, this.collitionPala, null, this);
        this.physics.add.collider(this.bola, this.der, this.collitionPala, null, this);
        this.bola.setBounce(1);
        this.bola.setVelocityX(this.velXBall(1));
    }

    /*************************************************************************************
     * Maneja la colisión entre la bola y las palas.
     *************************************************************************************/
    collitionPala() {
        let vel = Phaser.Math.Between(-120, 120);
        this.bola.setVelocityY(vel);
    }

    /*************************************************************************************
     * Obtiene varias opciones basadas en el tipo proporcionado.
     * @param {number} pType - Tipo de opción a recuperar.
     * @returns {number} - El valor de la opción solicitada.
     *************************************************************************************/
    getOptions(pType) {
        let valor;
        switch (pType) {
            case 1: // Ancho del lienzo del juego
                valor = this.sys.game.config.width;
                break;
            case 2: // Alto del lienzo del juego
                valor = this.sys.game.config.height;
                break;
            case 3: // Margen de la barra en el borde lateral
                valor = 50;
                break;
        }
        return valor;
    }
}
