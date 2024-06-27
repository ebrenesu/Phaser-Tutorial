/*****************************************************************************************
 * @class
 * La clase Bootloader representa la escena de carga del juego.
 * @extends Phaser.Scene
 * @since 5/1/2024
 * @creator Mst. Erick Brenes
 * @Updated 5/1/2024 by eBrenes
 * @version 1.0
 *************************************************************************************/

export default class Bootloader extends Phaser.Scene {
    /*************************************************************************************
     * Constructor de la clase Bootloader.
     *************************************************************************************/
    constructor() {
        super({ key: "Bootloader" });
    }

    /*************************************************************************************
     * Método del ciclo de vida de Phaser. Se llama antes de que la escena se cargue.
     * Se utiliza para precargar los recursos necesarios para el juego.
     *************************************************************************************/
    preload() {
        // Se establece un evento que se activará cuando la carga de recursos esté completa.
        this.load.on("complete", () => {
            // Inicia la escena de juego después de que se hayan cargado todos los recursos.
            this.scene.start("Scene_Play");
        });

        // Precarga de imágenes necesarias para el juego.
        this.load.image("bola", "./src/assets/principalGame/ball.png");
        this.load.image("izquierda", "./src/assets/principalGame/left_pallete.png");
        this.load.image("derecha", "./src/assets/principalGame/right_pallete.png");
        this.load.image("separador", "./src/assets/principalGame/separator.png");
    }
}
