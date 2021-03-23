import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby';

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
          <p>Hi, I'm Matt, my pronouns are they/them, and I'm a software engineer based out of Seattle, WA.  I started writing code in college in 2013 and since then, I've been helping companies and costumers with my problem solving skills.  I'm known for riding Vespas and making the best tofu scramble.</p>
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
          <p>A full fledged API toolkit to retrieve words, anagrams, and statistics about them.  I wrote the Node server with Express routes, and set up the MongoDB instance with Atlas.  I also wrote the documentation, posted the issues, and created the trello board. The tests in Mocha/Chai were also written by me.  I've decided to make this into an open-source project.  </p>


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
            <a href="https://iltempo.herokuapp.com" className="icon fa-external link" target="_blank"></a>
            <a href="https://github.com/mattfazza/Weather" className="icon fa-github" target="_blank"></a>
            {' '}
            <a href="https://iltempo.herokuapp.com/" className="icon fa-external-link" target="_blank"></a>

          </h1>
          <p>This is one of my first complete web apps built with React.  It's a simple weather app that calls an API to inform the weather conditions on the location seached.</p>

          <h1>
            To-do {' '}
            <a href="#" className="icon fa-external link" target="_blank"></a>
            <a href="https://github.com/mattfazza/Weather" className="icon fa-github" target="_blank"></a>
            {' '}
            <a href="https://practical-carson-154b7f.netlify.com/" className="icon fa-external-link" target="_blank"></a>

          </h1>
          <p>I built this little to-do list app while learning React states.  It's simple, but it allowed me to grow a lot.</p>

          <h1>
            Ethereum Vault {' '}
            <a href="https://github.com/mattfazza/Code/tree/master/Vault" className="icon fa-github" target="_blank"></a>
          </h1>
          <p>An ethereum wallet that transfers all your ether to another wallet if it gets breached.  After that, it destroys itself.</p>

          <h1>
            Personal Website {' '}
            <a href="#" className="icon fa-external link" target="_blank"></a>
            <a href="https://github.com/mattfazza/Mobile-First" className="icon fa-github" target="_blank"></a>
            {' '}
            <a href="https://jolly-brown-c5e00f.netlify.com/" className="icon fa-external-link" target="_blank"></a>
          </h1>
          <p>While this website uses Gatsby, the previous version of this website is completely made with React, Bootstrap, and React-Material</p>




          <h1>
            Daisy Skill {' '}
            <a href="https://github.com/mattfazza/DaisySkill" className="icon fa-github" target="_blank"></a>
          </h1>
          <p>This is my first Amazon Alexa App.  It's rather simple, but it lead me to build a second one I actually use. Important to note here: this was a Node.js built with test-driven development</p>
          {close}
        </article>

        <article id="career" className={`${this.props.article === 'career' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Career</h2>
          {/* <p>You can download my most recent resume <a href="https://github.com/mattfazza/Gatsby-Personal/raw/master/src/images/resume%5BMattFazza%5D.docx" target="_blank">here</a>.</p> */}

          <p>I have:
            <ul>
              <li>Been the lead engineer in multiple end-to-end solutions involving data work, backend work, and infra-structure work.</li>
              <li>Written, deployed, and debugged serverless APIs build with AWS Lambda/Serverless/Cloudformation.</li>
              <li>Generated many analysis using SQL/DynamoDB, Python/Pandas, and AWS Quicksight.</li>
              <li>Helped architect a platform rebuild from an infra-structure and data perspective.</li>
              <li>Lead a data engineering team, conducting code reviews, making high-level architectural decisions, and interfacing QA and the Engineering team.</li>
              <li>Created several APIs using Node.js, including a lot of asynchronous logic between servers and databases.</li>
              <li>Proven the use of blockchain as a feasible business route for supply chain.</li>
              <li>Written good quality documentation (an example can be seen <a href="https://github.com/mattfazza/anagramma/blob/master/README.md" target="_blank">here</a>).</li>
            </ul>
          </p>

          <p>I want to:
            <ul>
              <li>Learn more about architecture patterns in regards to systems and data</li>
              <li>Tackle complex problems (coding, mathematics, and architecture)</li>
              <li>Help other developers learn and bring them the same joy I get from technology.</li>
              <li>Work with diverse teams, and learn a lot from them.</li>
            </ul>
          </p>

          <h1>Career Bio</h1>
          <p>By the time I finished my Software Engineering degree at UT Dallas, I was already working in the industry.  My career started with Blockchain where I implemented a decentralized supply chain application on the Ethereum blockchain in partnership with a consulting firm; when that work was over, I joined Fidelity investments where I worked with full stack web, lead a data engineering team, and worked a bit with DevOps and automation.   When I left my position at Fidelity Investments, I started working at Apostrophe creating the health plan that can save America.  At Apostrophe I worked as a Data/Backend Engineer, but also wore many other hats.  I left Apostrophe in November 2020 to join Sage Bionetworks as a Data Engineer.  I currently work as part of their Systems Biology Infrastructure team with data infrastructure related tasks.</p>

          <p>I have dealt with a lot of different tech throughout the years.  Despite my preferences, I like to remain tech agnostic.  As long as the project/product is interesting, I'm in.  Lately, I'm putting some time into AWS Glue, Athena, and Quicksight.</p>

          <p>I have also found that I'm good at working remotely.  Distance is not a big deal for me, and I can always create inclusive spaces that foster collaboration even if we're not face-to-face.</p>



          {close}
        </article>

        {/* <article id="blog" className={`${this.props.article === 'blog' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">blog</h2>
          <p>
            <Link to="/blog1">Welcome to Denver</Link> - a simple reflection on how my experience trying to find a position in Denver has been.
          </p>
          {close}
        </article> */}

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <p>The best way to contact me is through email.  Feel free to email me at matthewfazza@yahoo.com.  I'm also on the links below!</p>
          <ul className="icons">
            {/* <li><a href="https://twitter.com/matthewfazza" className="icon fa-twitter" target="_blank"><span className="label" >Twitter</span></a></li> */}
            <li><a href="https://www.linkedin.com/in/mattfazza" className="icon fa-linkedin" target="_blank"><span className="label" >LinkedIn</span></a></li>
            {/* <li><a href="https://www.instagram.com/matthewfazza" className="icon fa-instagram" target="_blank"><span className="label" >Instagram</span></a></li> */}
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