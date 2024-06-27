class escena2 extends Phaser.Scene{
    constructor(){
        super({key:"escena2", active: true});
    }

    preload(){}

    create(){
        let graphics = this.add.graphics();
        graphics.fillStyle(0xff3399,1);
        graphics.fillRect(100,200,300,150);
        graphics.fillRect(200,100,100,100);
        this.add.text(220,110,"B", {font: "96px Courier", fill: "#000"});

        //Hacemos la carga de escena 3 al manejador de escena fuera del init.js
        this.scene.add("escena3", new escena3);
    }

    update(time, delta){}
}
