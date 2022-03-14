const waitTime = 6000;
const waitInterval = 1000;
let currentTime = 0;

console.log(`Setting a ${waitTime/1000} seconds delay`);;

const timerFinish = () =>{
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write("done");
}

setTimeout(timerFinish, waitTime);


const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting ... ${p}%`);
};
const interval = setInterval(incTime, waitInterval);
