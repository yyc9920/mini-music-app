import './about.scss'

const About = () => {
    return <div className="about">
        <div className="about__desc">
            <h1>This sample music webapp is made by Yechan Yun.</h1>
            <br/>
            <br/>
            <h2>Korea Polytechnic University</h2>
            <br/>
            <h3>Electronic Engineering</h3>
            <br/>
            <h3>2015.03 - 2021.02</h3>
            <br/>
            <br/>
            <h2>ThunderSoft Korea</h2>
            <br/>
            <h3>Software Engineer</h3>
            <br/>
            <h3>2020.10 ~ Now</h3>
            <br/>
            <br/>
            <h2>Projects</h2>
            <br/>
            <h3>Camera App Test Application</h3>
            <br/>
            <ul style={{paddingLeft: 2 + "em"}}>
                <li>Python</li>
                <li>PyQt5</li>
                <li>UI Automator 2</li>
            </ul>
            <br/>
            <h3>CI System Management</h3>
            <br/>
            <ul style={{paddingLeft: 2 + "em"}}>
                <li>Jenkins</li>
                <li>QuickBuild</li>
                <li>Coverity (Static Code Analysis)</li>
                <li>Python</li>
                <li>Groovy</li>
                <li>Shell Script</li>
            </ul>
            <br/>
            <br/>
            <h2>Contacts</h2>
            <br/>
            <a href="mailto:yyc837021@gmail.com" target="_blank"><i className='bx bxl-gmail' ></i></a>
            <a href="https://www.linkedin.com/in/yechan-yun/" target="_blank"><i className='bx bxl-linkedin-square'></i></a>
            <a href="https://github.com/yyc9920/" target="_blank"><i className='bx bxl-github'></i></a>
            <a href="https://yyc9920.github.io/yechan.github.io/" target="_blank"><i className='bx bxs-home' ></i></a>
        </div>
        <img
            className="about__profile"
            src="https://github.com/yyc9920/yechan.github.io/blob/master/images/profile.jpg?raw=true"
        ></img>
    </div>;
};

export default About;
