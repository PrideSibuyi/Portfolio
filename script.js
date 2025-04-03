// Firebase Config 
const firebaseConfig = {

    apiKey: "AIzaSyBWPWE-BzNj5yqc54OrU-6jbsiKnDgEygY",
    authDomain: "my-portfolio-a54e8.firebaseapp.com",
    databaseURL: "https://my-portfolio-a54e8-default-rtdb.firebaseio.com",
    projectId: "my-portfolio-a54e8",
    storageBucket: "my-portfolio-a54e8.firebasestorage.app",
    messagingSenderId: "792785847596",
    appId: "1:792785847596:web:4019fdf73518d79cbb9889",
    measurementId: "G-YWSL7G5K4Q"
  };
  // Initialize Firebase
  firebaseConfig.initializeApp(firebaseConfig);
  const database = firebase.database();

  // Project Data
  const projects = [{
    tittle: "Project 1 ",
    description: "A web app for X" ,
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "#"
  },
];

// Display Projects
function displayProjects() {
    const container = documents.getElementByid('projects-container');
  projects.forEach(project => {
    container.innerHTML += `
    <div class="project">
    <h3>${project.tittle}</h3>
    <p>${project.description}</p>
    <p>Technologies: ${project.technologies.join(', ')}</p>
    <a href="${project.link}" target="_blank">View Project</a>
    </div>
    `;
    });
    }

    // Contact Form Submission
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target('0').value;
        const email = e.target('1').value;
        const message = e.target('2').value;
        
        // Save to Firebase
        database.ref('messages').push({
            name: name,
            email: email,
            message: message
        }).then(() => {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }).catch(error => {
            console.error('Error sending message:', error);
        });
    });