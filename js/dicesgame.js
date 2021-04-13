

let playersResult = [];

class Player{
    constructor(name){
        this._name = name;
        this._gameWon= 0;
    }

    get name(){
        return this._name;
    }

    get gameWon(){
        return this._gameWon;
    }

    set gameWon(win){
        if(win){
            this._gameWon ++;
        }
    }


    diceResult(){
        let dice = Math.floor(Math.random()*10 + 1); 
        return dice;
    }

    playerResult(){
        const result = {
            name: this._name,
            diceresult: this.diceResult()
        }

        playersResult.push(result);
        return result
    }

}

const player1 = new Player('David');
const player2 = new Player('Gaetan');

let play= () =>{
    playersResult = [];
    player1.playerResult();
    player2.playerResult();
    playersResult.sort((a, b) =>  a.diceresult - b.diceresult);

    if( playersResult[0].diceresult === playersResult[1].diceresult){
        return console.log('Match nul');
    }else if(playersResult[playersResult.length-1].name === player1.name){
        player2.gameWon = false;
        player1.gameWon = true;
        return console.log('Player 1 win');
    }else if(playersResult[playersResult.length-1].name === player2.name){
        player1.gameWon = false;
        player2.gameWon = true;
        return console.log('Player 2 win');
    }
    
}

play();
console.log(playersResult);
console.log(player1.gameWon);
console.log(player2.gameWon);
play();
console.log(playersResult);
console.log(player1.gameWon);
console.log(player2.gameWon);
play();
console.log(playersResult);
console.log(player1.gameWon);
console.log(player2.gameWon);
play();
console.log(playersResult);
console.log(player1.gameWon);
console.log(player2.gameWon);

play();
console.log(playersResult);
console.log(player1.gameWon);
console.log(player2.gameWon);

