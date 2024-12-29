import React from "react";
import './technologies.css'



function TechnologiesMaster() {
  // Array of technologies
const technologies = [
  {
    id: 1, name: "Node Js",logo: "https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-9294859-7578002.png"
  },
   {
    id: 2, name: "Swift",
    logo: "https://cdn3d.iconscout.com/3d/free/thumb/free-swift-9294866-7578009.png"
  },
  { id: 3, name: "Flutter", logo: "https://cdn3d.iconscout.com/3d/free/thumb/free-flutter-9294855-7577998.png" },
 

  {
    id: 4, name: "Android",
    logo: "https://cdn3d.iconscout.com/3d/free/thumb/free-android-5562358-4642762.png"
  },
  {
    id: 5, name: "React",
    logo: "https://th.bing.com/th/id/OIP.9RZJev6qmnq2-Qyr41QbjQAAAA?rs=1&pid=ImgDetMain"
  },
   {
    id: 6, name: "Java",
    logo: "https://cdn3d.iconscout.com/3d/free/thumb/free-java-9294874-7578017.png"
  },
    {
    id: 7, name: "Python",
    logo: "https://cdn3d.iconscout.com/3d/free/thumb/free-python-9294858-7578001.png"
  },
 
  { id: 8, name: "Wordpress", logo: "https://cdn3d.iconscout.com/3d/free/thumb/free-wordpress-9294850-7577993.png" },
];
  return (
    <div className="technologies-container">
      <h2>Technologies We Master</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div key={tech.id} className="technology-card">
            <img src={tech.logo} alt={tech.name} className="technology-logo" />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnologiesMaster





