import initButtons from "./buttons";
import game, { handleUserAction } from "./gameState";

const TICK_RATE = 3000;

async function init() {
  console.log("starting game");

  initButtons(handleUserAction);

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}

init();
