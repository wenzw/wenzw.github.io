function drawSoundControl() {
    // let soundEnabledText = !soundEnabled ? sounds.disableSounds.enableText : sounds.disableSounds.disableText;
    // context.fillStyle = "#242424";
    // context.font = "25px Arial";

    // context.fillText(soundEnabledText, 420, 35);
    // context.restore();
    if (soundEnabled) {
        weight1.draw(context, 550, 15, 30, 31);
    } else {
        weight.draw(context, 550, 15, 30, 31);
    }
    context.restore();
}
