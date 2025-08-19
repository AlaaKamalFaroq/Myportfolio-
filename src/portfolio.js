/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "A'laa Farooq", // change to "A'laa Kamal" if you prefer that name publicly
  title: "Hi, I’m A’laa",
  subTitle: emoji(
    "Machine Learning Trainee | AI for Social & Environmental Impact | Data Science DEPI Participant 🚀🤖🌍"
  ),
  // Add a public link to your PDF resume (Google Drive set to 'Anyone with the link' or GitHub raw file)
  resumeLink: "https://drive.google.com/file/d/1nicGjqGm3tHro5a4-xn6vmjHpmRzi8PP/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/a-laa-kamal-3b6baa2b2/",
  github: "https://github.com/AlaaKamalFaroq", // replace with your actual GitHub username
  gmail: "alaakamal7957358@gmail.com",
  // Instagram, Twitter, and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Machine Learning & Data Science Enthusiast | Building AI Solutions for Social & Environmental Impact",
  skills: [
    emoji("⚡ Build and train machine learning models for data-driven decision making"),
    emoji("⚡ Perform data analysis, visualization, and web scraping to gather actionable insights"),
    emoji("⚡ Design tech solutions aligned with UN Sustainable Development Goals (SDGs)"),
  ],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Helwan University – Faculty of Computers and Artificial Intelligence",
      logo: require("./assets/images/helwanLogo.jpg"), // You can add your own university logo here
      subHeader: "Bachelor of Science in Computer Science & Artificial Intelligence",
      duration: "October 2024 – Present",
      desc: "Current GPA: 3.52 / 4.0 (Excellent). Actively participating in academic and extracurricular activities focused on AI, Machine Learning, and Sustainable Development.",
      descBullets: [
        "Member of FCIAI University Club, delivered a hands-on lecture on Git & GitHub during a C++ bootcamp",
        "Participating in technical projects linking AI with UN Sustainable Development Goals (SDGs)",
      ]
    },
    {
      schoolName: "Digital Egypt Pioneers Initiative (DEPI)",
      logo: require("./assets/images/depiLogo2.png"), // Add DEPI logo if available
      subHeader: "AI & Machine Learning Trainee",
      duration: "May 2025 – January 2026",
      desc: "Intensive technical training covering Python, data manipulation, visualization, and machine learning concepts.",
      descBullets: [
        "Hands-on projects in AI/ML, data analysis, and visualization",
        "Training in professional skills including freelancing, emotional intelligence, and networking",
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning & Data Science",
      progressPercentage: "65%" // Growing with DEPI training and hands-on projects
    },
    {
      Stack: "Web scraping",
      progressPercentage: "80%" // HTML, CSS, JavaScript projects (Climate Fighters, To-Do App)
    },
    {
      Stack: "Data Analysis & Visualization",
      progressPercentage: "70%" // Pandas, Matplotlib, Web Scraping
    },
    {
      Stack: "Programming Fundamentals",
      progressPercentage: "85%" // Python, C++, problem-solving
    }
  ],
  displayCodersrank: true // Keep false unless you want to add CodersRank badges
};

// Work experience section

const workExperiences = {
  display: true, // Show Work Experiences Section
  experience: [
    {
      role: "AI & Machine Learning Trainee",
      company: "Ministry of Communications and Information Technology (MCIT) – DEPI",
      companylogo: require("./assets/images/depiLogo2.png"), // Add DEPI or MCIT logo here
      date: "May 2025 – Jan 2026",
      desc: "Participating in intensive technical sessions covering Python, data manipulation, visualization, and machine learning concepts.",
      descBullets: [
        "Engaging in hands-on AI/ML projects, assignments, and collaborative learning",
        "Attending professional development sessions in freelancing, emotional intelligence, and networking"
      ]
    },
    {
      role: "Participant – Star Girls Africa (SGA)",
      company: "Remote / International Team",
      companylogo: require("./assets/images/sgaLogo2.png"), // Add SGA logo here
      date: "Aug 2024 – Sep 2024",
      desc: "Collaborated with an international team to design and develop a climate awareness website using HTML, CSS, and JavaScript.",
      descBullets: [
        "Contributed to responsive front-end design and functionality",
        "Applied sustainability knowledge to deliver impactful environmental awareness content"
      ]
    },
    {
      role: "Student Technical Assistant (Volunteer)",
      company: "Octocode",
      companylogo: require("./assets/images/octocodeLogo.jpg"), // Add Octocode logo here
      date: "Oct 2023 – Oct 2024",
      desc: "Supported programming education through lesson summaries and content preparation.",
      descBullets: [
        "Summarized 50+ programming lessons (Python, C++, HTML)",
        "Improved clarity and structure of educational content for beginner learners"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "Personal and collaborative projects that showcase my skills in web development, data scraping, and AI applications.",
  projects: [
    {
      image: require("./assets/images/image.png"), // 👉 add your project logo/screenshot in assets/images
      projectName: "Climate Fighters – Awareness Project",
      projectDesc: "Built a web-based project to raise awareness about climate change using HTML, CSS, and JavaScript.",
      footerLink: [
        {
          name: "View Project",
          url: "https://climate-fighters.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/.png"), // 👉 add screenshot/logo
      projectName: "Football Match Scraper",
      projectDesc: "Created a Python tool to scrape football match data from YallaKora, handle missing data, and export clean CSV files.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/AlaaKamalFaroq/football-match-scraper.git"
        }
      ]
    },
  ],
  display: true // Show this section
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Programs, certifications, and impactful projects that highlight my skills and community-focused work.",

  achievementsCards: [
    {
         title: "IBM Python for Data Science",
      subtitle:
        "Earned IBM certification in Python programming, data handling, and libraries like Pandas and NumPy for data analysis.",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://coursera.org/share/50c6ff8479c723b48c0c85a5ef2bac3e"
        }
      ]
    },
    {
      title: "AI Career Essentials",
      subtitle:
        "Gained foundational knowledge in Artificial Intelligence, task automation, and real-world AI applications in healthcare and low-resource settings.",
      image: require("./assets/images/aiCareerLogo.jpg"), // Add relevant logo
      imageAlt: "AI Career Essentials Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/166Rejc2zQH2UNAnEQq2lOVZ9MVL4uCEC/view?usp=sharing"
        }
      ]
    },
    {
      title: "Introduction to UX/UI Design – Google",
      subtitle:
        "Completed an introductory course on wireframing, prototyping, usability principles, and accessibility best practices.",
      image: require("./assets/images/googleUXUILogo.png"), // Add Google logo
      imageAlt: "Google UX/UI Design Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://coursera.org/share/c8baf27f671b6df256acd9e70bf2991f"
        }
      ]
    },
    {
      title: "Learn How to Learn – Coursera",
      subtitle:
        "Mastered science-based learning strategies like spaced repetition, chunking, and overcoming procrastination.",
      image: require("./assets/images/coursreraLogo.jpg"), // Add Coursera logo
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/WEGZUA78CSBW"
        }
        
      ]
    },
    {
  title: "Star Girls Africa – Climate Change Project",
  subtitle:
    "Worked on raising awareness about climate change in Africa using web technologies (HTML, CSS, JavaScript).",
  image: require("./assets/images/sgaLogo.jpeg"), // 👈 put your SGA logo/certificate image in assets/images
  imageAlt: "Star Girls Africa Logo",
  footerLink: [
    {
      name: "View Certification",
      url: "https://www.linkedin.com/posts/a-laa-kamal-3b6baa2b2_stargirlsafrica-alainitiative-techforgood-activity-7353503385343463425-FXrw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEtIk7oB-4-CHJD7NoG1HFtrX3pf9McRCtM" // 👈 replace with the actual certificate link if available
    }
  ]
}

  ],
  display: true // Show this section
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks & Workshops",
  subtitle: emoji(
    "I enjoy sharing knowledge on programming, AI, and development tools with students and peers."
  ),

  talks: [
    {
      title: "Introduction to Git & GitHub",
      subtitle: "Hands-on workshop during C++ Bootcamp at FCIAI University Club",
      slides_url: "", // Add if you have slides link
      event_url: "https://youtu.be/31gi2kTmUZU?si=RdQJnJZOY8xM57_2"
    }
  ],
  display: true
};


// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume to learn more about my background, skills, and projects.",
  resumeLink: "https://drive.google.com/file/d/your-resume-id/view?usp=sharing", // Make sure your resume is public
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in collaborating on AI, Data Science, or SDG-focused projects? Or just want to connect — my inbox is always open.",
  number: "+20 111 384 4729",
  email_address: "alaakamal7957358@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
