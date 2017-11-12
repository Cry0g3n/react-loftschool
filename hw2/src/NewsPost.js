import React, {Component} from 'react';
import './NewsPost.css'
import Comment from "./Comment";

let id = 0;

function getNextId() {
    id += 1;
    return id;
}

class NewsPost extends Component {
    state = {
        commentInput: '',
        comments: []
    };

    handleChange = event => {
        const value = event.target.value;
        this.setState({commentInput: value});
    };

    handleKeyDown = event => {
        const keyCode = event.keyCode;
        if (keyCode === 13) {
            const {commentInput, comments} = this.state;
            const newComment = {
                id: getNextId(),
                text: commentInput
            };

            this.setState({commentInput: '', comments: [...comments, newComment]});
        }
    };

    handleDelete = (id) => {
        this.setState(state => ({
            comments: state.comments.filter(comment => id !== comment.id)
        }));
    };

    render() {
        const {text} = this.props;
        const {comments, commentInput} = this.state;
        return (
            <div className='news-post'>
                <p>{text}</p>
                <div>
                    {comments.map(comment => (
                        <Comment
                            id={comment.id}
                            key={comment.id}
                            text={comment.text}
                            onDelete={this.handleDelete}
                        />
                    ))}
                </div>
                <input
                    className='comment-input'
                    type="text"
                    placeholder="Прокомментируем?"
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    value={commentInput}
                />
            </div>
        );
    }
}

export default NewsPost;
