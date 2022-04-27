const Header = (props) => {
    return (
     <header>
         <h1>{ props.title }</h1>
         <span className="stats">Players: { props.totalPlayers }</span>
     </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
                {props.name}
            </span>

            <Counter />
        </div>
    );
}

class Counter extends React.Component {
    constructor(){
        super()
        this.state =  {
          score: 0   
        };
    }

    //increases score state by 1 and vice versa
    incrementScore() {
       this.setState( prevState => {
           return {
           score: this.state.score +1
           };
       });
    }

    decrementScore() {
        this.setState( prevState => {
            return {
            score: this.state.score -1
            };
        });
     }

    render(){
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>
            </div>
        );
    }
    
}

class App extends React.Component {

    state = {
       players: [
        {
            name: "Nye",
            id: 1 //providing a unique key to each player in our array of plyers
          },
          {
            name: "Treasure",
            id: 2
          },
          {
            name: "Ashley",
            id: 3
          },
          {
            name: "James",
            id: 4
          }
       ] 
    };

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter( p => p.id !== id )
            };
        });
    }

    render () {

        return (
            <div className="scoreboard">
                <Header 
                    title="Scoreboard" 
                    totalPlayers={this.state.players.length} 
                /> 
    
                {/* Players list */}
                {this.state.players.map(player =>
                    <Player 
                        name={player.name} 
                        id={player.id}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                    /> 
                )}
            </div>
        );

    }
   
}


ReactDOM.render(
 <App />,
  document.getElementById('root')
)