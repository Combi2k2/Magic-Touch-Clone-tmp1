//  load images of rockets
const missle_width  = game_canvas.width  * 0.05;
const missle_height = missle_width;

let rocket_images = [];
let rockets = null;

for(let i = 0 ; i < 10 ; ++i)   {
    var img = new Image();
    img.src = `images/rockets/rocket${i}.png`;
    img.onload = function() {
        if (i == 9) console.log("GAME READY");
        else        console.log(`LOADED ${i + 1} rockets`);
    }
    rocket_images.push(img);
}
console.log(rocket_images.length);

//  declare a class Rocket
class Rocket    {
    constructor(x = Math.floor(Math.random() * (game_canvas.width - 180)), y = 0)   {
        this.x = x;
        this.y = y;
        this.explosion_level = -1000;
    }
}
//  generate new Rocket
function genRocket()    {
    var R = new Rocket();
    let i = Math.floor(Math.random() * 10);

    rockets[i].push(R);
}
function display_missle(missle_position, id_missle) {
    let x = missle_position[0];
    let y = missle_position[1];

    game_ctx.drawImage(rocket_images[id_missle], x, y, missle_width, missle_height);
}