let canvas, context, WIDTH = window.innerWidth, HEIGHT = window.innerHeight,
    maxJump = 3, initial_speed = 8, speed = initial_speed, rank, img, soundEnabled = true,

    states = {
        start: 0,
        playing: 1,
        lost: 2
    }
let gameState = {
  currentState: undefined
}

Object.defineProperty(gameState, 'currentState', {
  get: () => {
    return currentState;
  },
  set: (val) => {
    currentState = val;
    if (currentState === 2) {
      const data = JSON.stringify({
        gameId: 2,
        type: 'gameEndInvite',
        gameName: 'Chicken Run',
        gameScore: chicken.score
      });
      
      if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.todayWidgetGameCenter) {
        window.webkit.messageHandlers.todayWidgetGameCenter.postMessage(data)
      } else if (window.todayWidgetGameCenter) {
        window.todayWidgetGameCenter.postMessage(data)
      }
    }
  }
})
// if (WIDTH >= 600) {
    WIDTH = 600;
    HEIGHT = 550;
// }
