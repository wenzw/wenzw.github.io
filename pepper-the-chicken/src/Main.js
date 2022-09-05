function main() {
    context = canvasCreator;
    context.id = 'main';
    context = context.create();
    context.canvas.style.zoom = window.innerWidth / 600

    groundContext = canvasCreator;
    groundContext.id = 'ground';
    groundContext = groundContext.create();
    context.canvas.style.zoom = window.innerWidth / 600

    backgroundContext = canvasCreator;
    backgroundContext.id = 'background';
    backgroundContext = backgroundContext.create();
    context.canvas.style.zoom = window.innerWidth / 600

    document.addEventListener("mousedown", click);
    document.addEventListener("keydown", keyDown);
    document.addEventListener("touchstart", touch, false);

    gameState.currentState = states.start;
    rank = localStorage.getItem("rank");

    if (rank == null) {
        rank = 0;
    }
    if (soundEnabled) {
        sounds.openingTheme(true);
        sounds.mainTheme();
    }
    run();
}
