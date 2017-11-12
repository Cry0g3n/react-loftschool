import React, {Component} from 'react';
import './App.css'
import NewsPost from "./NewsPost";

let id = 0;

function getNextId() {
    id += 1;
    return id;
}

class App extends Component {
    state = {
        newsInput: '',
        news: []
    };

    handleChange = event => {
        const value = event.target.value;
        this.setState({newsInput: value});
    };

    handleKeyDown = event => {
        const keyCode = event.keyCode;
        if (keyCode === 13) {
            const {newsInput, news} = this.state;
            const newPost = {
                id: getNextId(),
                text: newsInput
            };

            this.setState({news: [...news, newPost], newsInput: ''});
        }
    };

    render() {
        const {newsInput, news} = this.state;
        return (
            <div className="App">
                <input
                    type="text"
                    className="todo-input"
                    placeholder="Какие новости"
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    value={newsInput}
                />
                <div>
                    {news.map(post => (
                        <NewsPost
                            key={post.text}
                            text={post.text}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
