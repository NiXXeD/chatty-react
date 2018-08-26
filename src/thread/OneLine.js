import React from 'react'
import {trim} from 'lodash'
import PostAuthor from './PostAuthor'

class OneLine extends React.PureComponent {
    state = {
        oneline: ''
    }

    getSnippet(body) {
        const stripped = body.replace(/(<(?!span)(?!\/span)[^>]+>| tabindex="1")/gm, ' ')
        return this.htmlSnippet(stripped, 106)
    }

    htmlSnippet(input, maxLength) {
        let i = 0
        let len = 0
        let tag = false
        let char = false
        while (i < input.length && len < maxLength) {
            if (input[i] === '<') {
                tag = true
            } else if (input[i] === '>') {
                tag = false
            } else if (input[i] === '&') {
                char = true
            } else if (input[i] === '' && char) {
                char = false
                len++
            } else if (!tag) {
                len++
            }

            i++
        }

        let output = trim(input.slice(0, i))
        if (i < input.length || !output) {
            output += '...'
        }

        return output
    }

    componentDidMount() {
        const {post} = this.props
        const {author, body} = post
        const oneline = this.getSnippet(body)
        this.setState({author, oneline})
    }

    handleClick = () => {
        const {post, onExpandReply} = this.props
        onExpandReply(post.id)
    }

    render() {
        const {author, oneline} = this.state
        return (
            <React.Fragment>
                <span
                    className="oneline oneline9"
                    dangerouslySetInnerHTML={{__html: oneline}}
                    onClick={this.handleClick}
                />
                <span className="commentSeparator">:</span>
                <PostAuthor author={author}/>
            </React.Fragment>
        )
    }
}

export default OneLine
