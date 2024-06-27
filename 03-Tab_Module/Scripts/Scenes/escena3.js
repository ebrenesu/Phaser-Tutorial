class escena3 extends Phaser.Scene{
    constructor(){
        super({key:"escena3", active: true});
    }

    preload(){ }

    create(){
        let graphics = this.add.graphics();
        graphics.fillStyle(0xff9999,1);
        graphics.fillRect(100,200,300,150);
        graphics.fillRect(300,100,100,100);

        this.add.text(320,110,"C", {font: "96px Courier", fill: "#000"});
    }

    update(time, delta){  }
}

export default escena3;