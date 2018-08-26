import React from 'react'
import {withStyles} from '@material-ui/core/styles'

class PostAuthor extends React.Component {
    render() {
        const {classes, author} = this.props
        return <span className={classes.user}>{author}</span>
    }
}

const styles = {
    user: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#f3e7b5',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline'
        }
    }
}

export default withStyles(styles)(PostAuthor)
