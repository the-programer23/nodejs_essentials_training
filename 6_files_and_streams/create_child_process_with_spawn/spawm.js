const cp = require('child_process');

const questionApp = cp.spawn("node", ["../../4_node_modules/use_readline_functions/questions.js"]);

questionApp.stdin.write("Fabian \n");
questionApp.stdin.write("Bucaramanga \n");
questionApp.stdin.write("Change the world \n");


questionApp.stdout.on("data", data => {
    console.log(`From the questions app: ${data}`);
});

questionApp.on("close", () => {
    console.log('questions app process exited');
});
