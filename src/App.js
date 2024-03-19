import './App.css';

function App() {
  return (
    <>
      <div className="main">
        <p className='resume'>Resume of</p>
        <div className="container header">
          <img src="./images/Hasan-Rahic-PNG.png" alt="" />
          <div className="text">
            <p>Hasan Rahic</p>
          </div>
        </div>
        <div className="container about">
          <h1>About</h1>
          <div className="text about-text">
            My name is Hasan, and I come from
            Bosnia and Herzegovina, a small city
            called Mostar. As a child, I developed
            a passion for computers and enjoyed
            exploring their capabilities, which
            ultimately led me to pursue studies in
            high school and continue in college.
            The ever-evolving nature of
            technology fascinates me, offering
            endless entertainment and
            opportunities for learning. I am eager
            to expand my knowledge and network
            with experienced individuals while
            sharing a few laughs along the way.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
