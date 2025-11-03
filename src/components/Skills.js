import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills & Technologies</h2>
                        <p>Here are the programming languages, frameworks, and tools I've worked with throughout my academic journey and personal projects.<br></br> Continuously expanding my skill set to tackle new challenges.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {/* Programming Languages */}
                            <div className="item">
                                <div className="skill-icon">🔤</div>
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">🐍</div>
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">💛</div>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">📜</div>
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">☕</div>
                                <h5>Kotlin</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">⚡</div>
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">🔷</div>
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">📄</div>
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">🎨</div>
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">🛢️</div>
                                <h5>SQL</h5>
                            </div>

                            {/* Frontend Technologies */}
                            <div className="item">
                                <div className="skill-icon">⚛️</div>
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">📱</div>
                                <h5>React Native</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">🚀</div>
                                <h5>Next.js</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">💎</div>
                                <h5>Vue.js</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">🎯</div>
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">✨</div>
                                <h5>Tailwind CSS</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">🅱️</div>
                                <h5>Bootstrap</h5>
                            </div>

                            {/* Backend & Databases */}
                            <div className="item">
                                <div className="skill-icon">🌐</div>
                                <h5>Spring Boot</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">🐘</div>
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">🍃</div>
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">⚡</div>
                                <h5>Express.js</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">🔥</div>
                                <h5>Firebase</h5>
                            </div>

                            {/* Tools & Platforms */}
                            <div className="item">
                                <div className="skill-icon">📦</div>
                                <h5>Git & GitHub</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">🐳</div>
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">☁️</div>
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">⚙️</div>
                                <h5>REST APIs</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">🧪</div>
                                <h5>JUnit</h5>
                            </div>
                            <div className="item">
                                <div className="skill-icon">📐</div>
                                <h5>Figma</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}