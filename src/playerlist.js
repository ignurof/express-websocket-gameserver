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
        "attacking": false,
        "hp": 100
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

const attack = (id) => {
    players.forEach(v => {
        if(v.id === id){
            v.hp -= 10;
        }
    })
}

module.exports = {
    get,
    add,
    update,
    attack
}