export default class escena1 extends Phaser.Scene{
    constructor(){
        super({key:"escena1"});
    }

    preload(){}

    create(){
        let graphics = this.add.graphics();
        graphics.fillStyle(0xff3300,1);
        graphics.fillRect(100,200,300,150);
        graphics.fillRect(100,100,100,100);

        this.add.text(120,110,"A", {font: "96px Courier", fill: "#000"});
    }

    update(time, delta){}
}