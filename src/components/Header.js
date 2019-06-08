import React from 'react'
import PropTypes from 'prop-types'
import profilepic from '../images/profile.jpg'

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            <span className="icon fa-code"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Matt Fazza</h1>
                <p>Software Engineer based out of Denver, CO<br />
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('aboutme') }}>About Me</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('work') }}>Work</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('career') }}>Career</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('blog') }}>Blog</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('contact') }}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
