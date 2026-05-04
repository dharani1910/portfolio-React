import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

/* Navbar */
function Navbar() {
  return (
    <nav style={nav}>
      <h2 style={{ color: "#64ffda" }}>Dharani</h2>

      <div>
        <Link style={link} to="/home">Home</Link>
        <Link style={link} to="/about">About</Link>
        <Link style={link} to="/projects">Projects</Link>
        <Link style={link} to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

/*  Landing */
function Landing() {
  const navigate = useNavigate();

  return (
    <div style={landing}>
      <h1>Hi, I'm Dharani </h1>
      <h3>MERN Stack Developer</h3>
      <p>I build modern web applications using React, Node.js and MongoDB.</p>

      <button onClick={() => navigate("/home")} style={btn}>
        View Portfolio
      </button>
    </div>
  );
}

/*  Home */
function Home() {
  return (
    <>
      <Navbar />
      <div style={page}>
        <h1>Welcome to My Portfolio</h1>
        <p>
          I am a MERN stack developer passionate about building full stack web
          applications.
        </p>

        <h2 style={heading}>Skills</h2>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>Node.js</li>
        </ul>
      </div>
    </>
  );
}

/* 🔷 About */
function About() {
  return (
    <>
      <Navbar />
      <div style={page}>
        <h1>About </h1>
        <p>
          I'm Dharani, a MERN stack developer. I enjoy building responsive,
          scalable and user-friendly applications. Currently improving my skills
          in full stack development.
        </p>
      </div>
    </>
  );
}

/* 🔷 Projects */
function Projects() {
  const projects = [
  
  {
    name: "Portfolio Website",
    desc: "Personal portfolio built using React",
  },
  {
    name: "Drag & Drop appication",
    desc: "Interactive drag and drop UI using React (or HTML5 DnD API)",
  },
{
    name: "IT Company Website ",
    desc: "A fully responsive IT company website developed using modern web technologies to showcase services, projects, and company information. The platform includes interactive UI, contact forms, and service pages to enhance user engagement and business visibility",
  
},

  ];

  return (
    <>
      <Navbar />
      <div style={page}>
        <h1>My Projects</h1>

        <div style={grid}>
          {projects.map((p) => (
            <div key={p.name} style={card}>
              <h3 style={{ color: "#64ffda" }}>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* Contact */
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent ");
    e.target.reset();
  };

  return (
    <>
      <Navbar />
      <div style={page}>
        <h1>Contact Me</h1>

        <p>Email: dharaniganesan778@email.com</p>
        <p>GitHub: https://github.com/dharani1910</p>
        <p>LinkedIn: linkedinhttps://www.linkedin.com/in/dharani-ganesan</p>

        <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
          <input type="text" placeholder="Name" required style={input} />
          <input type="email" placeholder="Email" required style={input} />
          <textarea placeholder="Message" required style={input} />

          <button type="submit" style={btn}>Send </button>
        </form>
      </div>
    </>
  );
}

/*  App */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

/*  Styles */
const nav = {
  background: "#020c1b",
  padding: "15px 50px",
  display: "flex",
  justifyContent: "space-between",
};

const link = {
  color: "white",
  margin: "0 15px",
  textDecoration: "none",
};

const landing = {
  height: "100vh",
  background: "#0a192f",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const page = {
  minHeight: "100vh",
  background: "#0a192f",
  color: "white",
  padding: "60px",
};

const heading = {
  color: "#64ffda",
  marginTop: "40px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
  marginTop: "30px",
};

const card = {
  background: "#112240",
  padding: "20px",
  borderRadius: "10px",
};

const input = {
  width: "100%",
  margin: "10px 0",
  padding: "10px",
};

const btn = {
  padding: "10px 20px",
  background: "#64ffda",
  border: "none",
  cursor: "pointer",
};