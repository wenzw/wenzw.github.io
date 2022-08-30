function update() {
    if (gameState.currentState == states.playing) {
        obstacles.update();
        difficulty();
    }
    background.update();
    ground.update();
    chicken.update();
}
