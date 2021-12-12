let players = [];

const get = () => {
    return players;
}

const add = (id) => {
    let player = {
        id,
        "x": 30, // Startpos
        "y": 30,
        "anim": "nameHere",
        "flipH": false,
        "attacking": false
    };
    players.push(player);
}

const update = (id, nX, nY, nAnim, nFlipH, nAttacking) => {
    players.forEach(v => {
        if(v.id === id){
            v.x = nX;
            v.y = nY;
            v.anim = nAnim;
            v.flipH = nFlipH;
            v.attacking = nAttacking;
        }
    });
}

module.exports = {
    get,
    add,
    update
}