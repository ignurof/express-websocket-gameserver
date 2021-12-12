let players = [];

const get = () => {
    return players;
}

const add = (id) => {
    let player = {
        id,
        "x": 0,
        "y": 0
    };
    players.push(player);
}

module.exports = {
    get,
    add
}