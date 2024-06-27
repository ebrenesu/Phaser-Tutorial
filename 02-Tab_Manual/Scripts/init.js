const config = {
    width:  500,
    height: 400,
    parent: "container",
    type:   Phaser.AUTO,
    backgroundColor:    '#392542',
    scene: [escena1, escena2]
}

new Phaser.Game(config);
