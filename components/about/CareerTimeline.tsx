import TimelineItem from './TimelineItem';

export const EXPERIENCES = [
  {
    org: 'S&S Creation',
    url: 'https://github.com/Antot-12',
    logo: '/static/images/experiences/Spekulus.png',
    start: 'April 2024',
    end: 'Present',
    title: 'Full Stack Developer & Team Manager',
    icon: 'man-technologist',
    event: 'career-ss-creation',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Managed and led a 3-member team in developing innovative solutions, including the "Magic Mirror" project
            integrating AI and camera technology for real-time health monitoring.
          </li>
          <li>
            Built and maintained server-side logic using <strong>Node.js</strong>, ensuring smooth communication between
            AI models and the front-end interface.
          </li>
          <li>
            Developed full-stack solutions with <strong>React</strong>, <strong>Tailwind CSS</strong>, and{' '}
            <strong>Node.js</strong>, focusing on seamless user experiences and robust data management.
          </li>
        </ul>
      );
    },
  },
  {
    org: 'Technical University of Košice',
    url: 'https://tuke.sk',
    logo: '/static/images/experiences/tuke-logo.png',
    start: 'Sep 2021',
    end: 'Present',
    title: 'IT Student',
    icon: 'graduation-cap',
    event: 'career-tuke',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Studying at the <strong>Faculty of Informatics</strong>, focusing on back-end development and innovative
            technologies.
          </li>
          <li>
            Co-developed and presented projects at university tech expos, earning recognition for creative solutions and
            technical skills.
          </li>
        </ul>
      );
    },
  },
  {
    org: 'Hackathons & Competitions',
    url: 'https://linkedin.com/in/anton-shyrko',
    logo: '/static/images/experiences/hackathon-logo.png',
    start: '2023',
    end: '2024',
    title: 'Hackathon Participant & Competition Achievements',
    icon: 'trophy',
    event: 'career-hackathon',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Participated in the <strong>Erste Digital Hackathon 2023</strong>, showcasing innovative problem-solving and
            technical skills.
          </li>
          <li>
            Achieved <strong>7th place</strong> at the <strong>GymBeam Hackathon</strong>, demonstrating teamwork and
            the ability to develop solutions under time constraints.
          </li>
          <li>
            Won the <strong>EIT Digital Venture Program</strong> in 2024, recognized for creating impactful solutions.
          </li>
        </ul>
      );
    },
  },
  {
    org: 'Personal Projects',
    url: 'https://github.com/Antot-12/projects',
    logo: '/static/images/experiences/personal-projects-logo.png',
    start: 'Various',
    end: 'Present',
    title: 'Project Developer',
    icon: 'laptop-code',
    event: 'career-personal-projects',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Developed a <strong>Password Generator</strong> application in Python to create secure passwords for users.
          </li>
          <li>
            Created a <strong>Coin Flip Simulator</strong> using TypeScript, providing a virtual coin flipping
            experience.
          </li>
          <li>
            Built an <strong>Emoji Translator</strong> that converts text into corresponding emojis, enhancing
            communication fun.
          </li>
          <li>
            Developed a <strong>Chat Bot V1</strong> in Python to simulate basic conversational interactions.
          </li>
          <li>
            Created a <strong>Ping-Pong Game</strong> in Java, offering a simple yet engaging gaming experience.
          </li>
        </ul>
      );
    },
  },
];

const CareerTimeline = () => (
  <ul className="m-0 list-none p-0">
    {EXPERIENCES.map((experience, idx) => (
      <li key={experience.event} className="m-0 p-0">
        <TimelineItem exp={experience} last={idx === EXPERIENCES.length - 1} />
      </li>
    ))}
  </ul>
);

export default CareerTimeline;
