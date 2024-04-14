import React, {Component} from "react";
import "./smiles.css";
class Smile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emojis: [
                {id: 1, simbol: "😀", count: 0 },
                {id: 2, simbol: "😉", count: 0 },
                {id: 3, simbol: "😁", count: 0 },

            ],
            showResults: false,
            winner: null,

        }
    };
    handleEmojiClick = (id) => {
        const updatedEmojis = this.state.emojis.map((emoji) => {
            if(emoji.id === id) {
                return {...emoji, count: emoji.count + 1}
            } else {
                return emoji;
            }

        });
        this.setState({emojis: updatedEmojis});
    }

    handleShowResultsClick = () => {
      let winner = this.state.emojis[0];
        for (let i = 1; i < this.state.emojis.length; i++) {
            const currentEmoji = this.state.emojis[i];
            if(currentEmoji.count > winner.count) {
                winner = currentEmoji;
            }
        }
        // this.setState({showResults: true, winner });

        const winners = this.state.emojis.filter((emoji) => {
            return emoji.count === winner.count;
        })

        if (winners.length > 1) {
            this.setState({showResults: true, winner: {simbol: "😊", count: "Перемогла дружба"}})
        } else {
            this.setState({showResults: true, winner });
        }
    };

    render() {
        return (
            <div className="wrapper">
                <h1 className="title">Лічильник смайликів</h1>
                {this.state.emojis.map((emoji) => (
                    <div key={emoji.id} onClick={() =>
                    this.handleEmojiClick(emoji.id)} className="emoji">
                        {emoji.simbol} - {emoji.count}
                    </div>

                ))}
                <button onClick={this.handleShowResultsClick} className="btn">Показати результат</button>
                {this.state.showResults && (
                    <div className="winner">
                        <h2>Переможець:</h2>
                        {this.state.winner.simbol} - {this.state.winner.count}
                    </div>
                )}
            </div>
        );

    }

}

export default Smile;