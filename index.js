function generateLandingPage() {
  const htmlString = `<div class="landing div" id="land-div">
                            <h1>Hi, I'm Tyler.</h1> 
                            <div class="select div" id="home-btns">
                                <input class="btn l-btn bio-btn" type="button" id="goto-bio" value="Who I am"></input>
                                <input class="btn l-btn portfolio-btn" type="button" id="goto-portfolio" value="What I do"></input>
                                <input class="btn l-btn contact-btn" type="button" id="goto-contact" value="Get in touch"></input>
                             </div>
                        </div>
                        <div class="body div collapsed" id="body-div"></div>`;
  const getDiv = document.querySelector('#main-div');
  getDiv.innerHTML += htmlString;
}

function generateBioDiv() {
  return  `<div class="bio-div about-me">
            <h2>Passionate, Experienced Professional</h2>
            <img src="img/tylerheadshot.png" class="headshot" align="middle" alt="headshot of Tyler Sharp, smiling in a sunny, scenic Atlanta view. Birds are chirping and the nearby Braves stadium can be heard as a distant, dull roar." />
            <p>I've been a big fan of tech all my life. I built my first computer at 11 and was Captain in my Robotics Team in high school.</p>
            <p>But I'm a man of many passions, and for the last 7 years I was a theme park Operations Manager for Merlin Entertainments, where I got to work with iconic brands such as LEGOLAND and Madame Tussauds.</p> 
            <p>I traveled the world and lived in Los Angeles, San Francisco, Orlando, and England. I currently am back in my hometown of Atlanta, GA. I still love to travel and have <i>many</i> more countries to check off the list!</p>
            <p>My workplace philosophy is to keep things fun and productive. I bring a personal approach to everything that I do.</p>
            <p>I have published a <a href="http://www.triggerwarningshortfiction.com/the-box/" alt="link to horror short story">horror short story</a> and a <a href="https://www.amazon.com/Kingmaker-Gods-That-Gamble-vol-ebook/dp/B07XHTM7XB" alt="Amazon link to sci-fi novel">sci-fi novel</a> and am currently working on a fantasy title.</p>
            <p>I've recently joined Thinkful's Coding Academy. I hope to apply my previous experience, personal style, and newfound skillset to a company that is making a difference in the world.</p>
          </div>`;

}

function generatePortfolioDiv() {
  return `<div class="portfolio-div about-me">
            <h2>Portfolio</h2>
            <p>Here are some of the projects I've created during my bootcamp.</p>
            <h3>Quiz App</h3>
            <a href="https://thinkful-ei-narwhal.github.io/quiz-app-Max-Tyler/" alt="link to Quiz App"><img src="img/quizCap.png" class="portfolio-pic" alt="screenshot of Quiz App" /> </a>
            <p><i>HTML, CSS, jQuery</i></p>
            <p>This is a quiz-app that covers knowledge of Brazilian Jiu-Jitsu. The user can submit answers and get a score at the end.</p>
            </div>`;
}

function generateContactDiv() {
  return `<div class="contact-div about-me">
            <h2>Contact</h2>
            <p><a href="https://github.com/Redact0r" alt="Github link"><b>Github</b></a></p>
            <p><a href="https://www.linkedin.com/in/tyler-sharp-1346a1a7/" alt="Github link"><b>LinkedIn</b></a></p>
            <p>Feel free to contact me anytime by <a href="mailto:johntylersharp@gmail.com">Email</a></p>
            </div>`;
}

//Event Listeners
//All events generate all three Divs so users can have seemless scrolling experience.
function bioListener() {
  const getDiv = document.querySelector('#body-div');
  if (getDiv.classList.contains('collapsed')) {
    getDiv.classList.remove('collapsed');
  }
  getDiv.innerHTML = '';
  getDiv.innerHTML += generateBioDiv();
  getDiv.innerHTML += generatePortfolioDiv();
  getDiv.innerHTML += generateContactDiv();
}

function portfolioListener() {
  const getDiv = document.querySelector('#body-div');
  if (getDiv.classList.contains('collapsed')) {
    getDiv.classList.remove('collapsed');
  }
  getDiv.innerHTML = '';
  getDiv.innerHTML += generatePortfolioDiv();
  getDiv.innerHTML += generateBioDiv();
  getDiv.innerHTML += generateContactDiv();
}

function contactListener() {
  const getDiv = document.querySelector('#body-div');
  if (getDiv.classList.contains('collapsed')) {
    getDiv.classList.remove('collapsed');
  }
  getDiv.innerHTML = '';
  getDiv.innerHTML += generateContactDiv();
  getDiv.innerHTML += generateBioDiv();
  getDiv.innerHTML += generatePortfolioDiv();
}

function main() {
  generateLandingPage();
  //Event Listeners
  document.addEventListener('click', function(event) {
    if (event.target.matches('.bio-btn')) {
      bioListener();
    }
    if (event.target.matches('.portfolio-btn')) {
      portfolioListener();
    }
    if (event.target.matches('.contact-btn')) {
      contactListener();
    }
  });
}

main();