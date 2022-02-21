import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
			<img className="logo" src="./images/Logo.svg" alt="sapious logo" />
			<div className="card">
				<div className="profile">
					<img src="./images/profile.jpg" alt="my img" />
					<div className="contact">
						<div>Contact:</div>
						<div className="social">
							<a href="https://www.facebook.com/anas.atallah.18/" target="_blank">
								<img src="./images/Facebook.svg" alt="Facebook" />
							</a>
							<a href="https://github.com/psychosocial112" target="_blank">
								<img src="./images/Github.svg" alt="Github" />
							</a>
							<a href="https://www.linkedin.com/in/anas-atallah/" target="_blank">
								<img src="./images/LinkedIn.svg" alt="LinkedIn" />
							</a>
						</div>
					</div>
				</div>
				<div className="summary">
					<h1>Anas Atallah</h1>
					<h3>Web Devoloper</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis et
						magnam aliquam sapiente veniam molestiae explicabo tempora,
						perferendis commodi ad repellat tenetur velit maxime voluptates
						pariatur nostrum vero. Soluta, dicta.
					</p>
				</div>
			</div>
			<div className="blocks">
				<div className="column">
					<div className="block">
						<h3>Education</h3>
						<p>Higher Institute of Computer
							Science and Management
							Kairouan (ISIGK)
							2019-2022
						</p>
					</div>
					<div className="block">
						<h3>Language</h3>
						<ul>
							<li>English</li>
							<li>Arabic</li>
							<li>French</li>
						</ul>  
					</div>
					<div className="block">
						<h3>Certificates</h3>
						<p><span>Certificate of Appreciation</span> <br />
							From the University of Kairouan for
							organizing 48Design (a 48-hour
							Hackathon)
						</p>
						<p><span>Certificate of Achievement</span> <br />
							From WeStart organization for
							achieving the full entrepreneurship
							training WeStand.
						</p>
						<p><span>Certificate of Appreciation</span> <br />
							For organizing Ideathon (a Regional
							hackathon by AV club ISIGK, Google
							club ISIGK, ATAST IPEIK and
							MentorNations IPEIK)
						</p>
					</div>
				</div>
				<div className="column">
					<div className="block">
						<h3>Technical Skills</h3>
						<dl>
							<dt>Markup and Styling Languages :</dt>
								<dd>- HTML</dd>
								<dd>- CSS</dd>
								<dd>- XML</dd>
							<dt>Programming Languages :</dt>
								<dd>- Javascript</dd>
								<dd>- Java</dd>
								<dd>- Python</dd>
								<dd>- C</dd>
								<dd>- SQL</dd>
							<dt>Computer Maintenance</dt>
								<dd>- Troubleshooting software/Hardware</dd>
						</dl>
					</div>
					<div className="block">
						<h3>Other Skills</h3>
						<ul>
							<li>Musician</li>
							<li>Teamwork</li>
							<li>Organization</li>
							<li>Problem-Solving</li>
							<li>Flexibility</li>
							<li>Interpersonal</li>
							<li>Multi-Tasking</li>
						</ul>  
					</div>
				</div>
			</div>
		</div>
    </div>
  );
}

export default App;
