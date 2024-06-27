
export class Game extends Phaser.Scene {
    constructor(){
        super({key: 'game'}); //nombre de la escena que corresponde al arreglo donde esta la configuración
    }
    
    /******************************************************************
     * Hace una carga inicial de assets para usar en el juego.
     *******************************************************************/
    preload(){
        var assetPath = 'Assets/Imagenes/'
        
        this.load.image('background', assetPath + 'background.png');
        this.load.image('gameover', assetPath + 'gameover.png');
        this.load.image('platforma', assetPath + 'CenfoPlataformaAzul.png');
        this.load.image('fireball', assetPath + 'BolaFuego.png');

    }

    /******************************************************************
     * Es la funcion que se encarga de "colocar" los assets precargados
     * en escena. Usa Ajax
     ******************************************************************/
    create(){
        this.physics.world.setBoundsCollision(true,true,true,false); //Delimitamos el mundo para que solo se pueda ir hacia abajo
       
        this.add.image(400, 250, 'background'); //Coordenadas. Usa el centro de la imagen en las coordenadas que ponemos
        this.gameoverImage = this.add.image(400,250,'gameover');
        this.gameoverImage.visible = false;

        //Agregamos la plataforma a una variable y lo hacemos por medio de fisicas, para poder hacer uso de ellas. 
        this.plataform = this.physics.add.image(400, 460, 'platforma').setImmovable();// No permite que le afecte la fisica de otro objeto 
        this.plataform.body.allowGravity = false;
        
        //trabajamos con las pulsaciones del keyboard
        this.cursors = this.input.keyboard.createCursorKeys();
        
        //Agregamos la pelota
        this.ball = this.physics.add.image(400, 30, 'fireball');
        this.physics.add.collider(this.ball, this.plataform); //Agregamos una colision entre pelota y plataforma
        this.ball.setBounce(1); //Permitimos que rebote. Primer parametro cantidad de fuerza.
        var ballVel = 100 * Phaser.Math.Between(1.3, 2);
    
        if (Phaser.Math.Between(0, 10) > 5) ballVel = 0 - ballVel;
        
        this.ball.setVelocity(ballVel,10);

        this.ball.setCollideWorldBounds(true);
        this.plataform.setCollideWorldBounds(true);

    }

    /******************************************************************
     * Función que se ejecuta cada X tiempo desde que se inicia el código
     * del juego.
     ******************************************************************/
    update(){
        var iVel = 0;
        
        if(this.cursors.left.isDown)
            iVel = -500;
        
        if(this.cursors.right.isDown)
            iVel = 500;

        this.plataform.setVelocityX(iVel);

        if(this.ball.y > 500){
            this.gameoverImage.visible = true;
            this.scene.pause();
        }

    }

    getVelocityBall(){
        var ballVel = 100 * Phaser.Math.Between(1.3, 2);
    
        if (Phaser.Math.Between(0, 10) > 5) {
          ballVel = -ballVel;
        }
    
        return ballVel;
    }
} 

