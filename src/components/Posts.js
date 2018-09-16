import React, { Component } from 'react'
import PropTypes from 'prop-types'
var title = {
	color:'blue',
	fontWeight:'bold',
	textDecoration: 'none'
};
var maindiv = {
	border: '1px solid grey',
	marginBottom: '20px',
	padding: '10px'
}
export default class Posts extends Component {
    render() {
        return (
            <div>
                {this.props.posts.map((post, i) => <div style={maindiv}><a style={title} href={post.url} key={i}>{post.title}
                </a><p>{post.selftext}</p></div>)}
            </div>
        )
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired
}