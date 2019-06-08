import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import profilepic from '../images/profile.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="aboutme" className={`${this.props.article === 'aboutme' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">About Me</h2>
          <span className="image main"><img src={profilepic} /></span>
          <p>Hi, I'm Matt and I'm a software engineer based out of Denver, CO.  I started writing code in college in 2013 and since then, I've been helping companies and costumers with my problem solving skills. </p>

          <p>When I'm not writing code or crunching numbers, I'm focused on my health, both mental and physical.  I usually find balance between all the hours I spend on my computer by running with my dog, Daisy; reading books, playing music, cooking and eating vegan food, or advocating for mental health, LGBTQ rights, and public transportation.  I'm a proponent of remote work, avocados, and positive ways to use technology!  Go to <a href='/page-2'>Second Page</a></p>
          {close}
        </article>

        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Projects</h2>
          <p>These are just a small sample of my work.  There are 20+ projects on my <a href="https://www.github.com/mattfazza" target="_blank">Github</a> so please feel free to poke around there!</p>
          <h1>
            Anagramma {' '}
            <a href="https://github.com/mattfazza/Anagramma" className="icon fa-github" target="_blank"></a>
            {' '}
            <a href="https://anagramma.herokuapp.com" className="icon fa-external-link" target="_blank"></a>
          </h1>
          <p>A full fledged API toolkit to retrieve words, anagrams, and statistics about them.  I wrote the Node server with Express routes, and set up the MongoDB instance with Atlas.  I also wrote the documentation, posted the issues, and created the trello board. The tests in Mocha/Chai were also written by me.  I'm in the process of creating the React front-end with D3.js presentations, and I've decided to make this into an open-source project.  </p>


          <h1>
            Fratellanza {' '}
            <a href="https://github.com/mattfazza/Fratellanza" className="icon fa-github" target="_blank"></a>
          </h1>
          <p>This is a simple API used for integrating the POS system iFood with a script that collects sales at the end of the night.  My dad owns a pizza place and I automated his end of the day process. I cannot expose the code I wrote for him, so I made this "light" version with a mock api to document the work.  Written in Node.js and Express</p>

          <h1>
            MERN eConnex {' '}
            <a href="https://github.com/mattfazza/mern-eConnex" className="icon fa-github" target="_blank"></a>
          </h1>
          <p>This was my first attempt at building a social network using the MERN stack.  The backend is complete, but the front-end needs work.</p>

          <h1>
            Weather {' '}
            <a href="#" className="icon fa-external link" target="_blank"></a>
            <a href="https://github.com/mattfazza/Weather" className="icon fa-github" target="_blank"></a>
            {' '}
            <a href="https://iltempo.herokuapp.com/" className="icon fa-external-link" target="_blank"></a>

          </h1>
          <p>This is one of my first complete web apps built with React.  It's a simple weather app that calls an API to inform the weather conditions on the location seached.</p>

          <h1>
            Ethereum Vault {' '}
            <a href="https://github.com/mattfazza/Code/tree/master/Vault" className="icon fa-github" target="_blank"></a>
          </h1>
          <p>An ethereum wallet that transfers all your ether to another wallet if it gets breached.  After that, it destroys itself.</p>

          <h1>
            Personal Website {' '}
            <a href="#" className="icon fa-external link" target="_blank"></a>
            <a href="https://github.com/mattfazza/" className="icon fa-github" target="_blank"></a>
          </h1>
          <p>While this website uses Gatsby (which is built on top of React), the previous version of this website is completely made with React, Bootstrap, and React-Material</p>




          <h1>
            Daisy Skill {' '}
            <a href="https://github.com/mattfazza/DaisySkill" className="icon fa-github" target="_blank"></a>
          </h1>
          <p>This is my first Amazon Alexa App.  It's rather simple, but it lead me to build a second one I actually use. Important to note here: this was a Node.js built with test-driven development</p>
          {close}
        </article>

        <article id="career" className={`${this.props.article === 'career' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Career</h2>
          <p>My most recent resume can be found <a href="" target="_blank">here</a>.</p>

          <p>I have:
            <ul>
              <li>Written many React Front-ends and apps, a few portfolios, and a mobile-first website.</li>
              <li>Lead a data engineering team, conducting code reviews, making high-level architectural decisions, and interfacing QA and the Engineering team.</li>
              <li>Created several APIs using Node.js, including a lot of asynchronous logic between servers and databases.</li>
              <li>Proven the use of blockchain as a feasible business route for supply chain.</li>
              <li>Written good quality documentation (an example can be seen <a href="https://github.com/mattfazza/anagramma/blob/master/README.md" target="_blank">here</a>).</li>
            </ul>
          </p>

          <p>I want to:
            <ul>
              <li>Master full stack web</li>
              <li>Present at conferences</li>
              <li>Learn more about and work more with data to create beautiful data-driven applications</li>
              <li>Help other developers learn and bring them the same joy I get from technology.</li>
              <li>Work with diverse teams, and learn a lot from them.</li>
            </ul>
          </p>

          <h1>Career Bio</h1>
          <p>By the time I finished my Software Engineering degree at UT Dallas, I was already working in the industry.  My career started with Blockchain where I implemented a decentralized supply chain application on the Ethereum blockchain in partnership with a consulting firm; when that work was over, I joined Fidelity investments where I worked with full stack web, lead a data engineering team, and worked a bit with DevOps and automation.   Since leaving my position at Fidelity Investments, I've been focused on contributing to open-source software and asserting myself as a full stack engineer.  I am the creator of the API toolkit Anagramma, and a contributor to reactdenver.com.</p>

          <p>I have dealt with a lot of different tech throughout the years.  My favorite languages are JavaScript, and Python.  MERN is my favorite stack, and I'm a huge MongoDB nerd.  Despite my preferences, I like to remain tech agnostic.  As long as the project/product is interesting, I'm in.  Lately, I'm putting some time into D3 and Svelte.</p>

          <p>I have also found that I enjoy working remotely.  Distance is not a big deal for me, and I can always create inclusive spaces that foster collaboration even if we're not face-to-face.</p>



          {close}
        </article>

        <article id="blog" className={`${this.props.article === 'blog' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">blog</h2>
          <p>I've been wating to blog for a while and this is where I'm going to write.  I'm working on a presentation for my local Node.js meetup, and a blog post will be up soon! </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <p>The best way to contact me is through email.  Feel free to email me at matthewfazza@yahoo.com.  I'm also on social media, feel free to contact in any of the links below!</p>
          <ul className="icons">
            <li><a href="https://twitter.com/matthewfazza" className="icon fa-twitter" target="_blank"><span className="label" >Twitter</span></a></li>
            <li><a href="https://www.linkedin.com/in/mattfazza" className="icon fa-linkedin" target="_blank"><span className="label" >LinkedIn</span></a></li>
            <li><a href="https://www.instagram.com/matthewfazza" className="icon fa-instagram" target="_blank"><span className="label" >Instagram</span></a></li>
            <li><a href="https://www.github.com/mattfazza" className="icon fa-github" target="_blank"><span className="label" >GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main