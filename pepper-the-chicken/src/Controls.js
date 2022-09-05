function jump(event) {
    if (gameState.currentState == states.start) {
        gameState.currentState = states.playing;
        if (soundEnabled) {
            sounds.start.play();
            sounds.openingTheme(false);
            sounds.mainTheme(true);
        }
    }
    else if (gameState.currentState == states.playing) {
        chicken.jump();

        if (soundEnabled) {
            sounds.jumpSound();
        }
    }
    else if (gameState.currentState == states.lost && chicken.y >= 2 * HEIGHT) {
        sounds.openingTheme(true);
        sounds.mainTheme(false);
        gameState.currentState = states.start;
        obstacles.clean();
        chicken.reset();
    }
}

function keyDown(event) {
    if (event.keyCode == 38 || event.keyCode == 32 || event.keyCode == 87) {
        jump();
    }
}

function click(event) {
    if ((event.clientX > window.innerWidth - 200 && event.clientX < window.innerWidth) && event.clientY < 70) {
        sounds.toggleSounds();
    } else {
        jump();
    }


}

function touch() {
    jump();
}
