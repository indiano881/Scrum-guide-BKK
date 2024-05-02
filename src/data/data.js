function Article(
  title,
  image,
  linkText,
  content1,
  content2,
  content3,
  content4,
  content5,
  content6
) {
  (this.title = title), (this.image = image), (this.linkText = linkText);
  (this.content1 = content1),
    (this.content2 = content2),
    (this.content3 = content3),
    (this.content4 = content4),
    (this.content5 = content5),
    (this.content6 = content6);
}

//PAR 1
const Agile = new Article(
  "What is Agile Project Metodology?",
  "INSERT_IMAGE",
  "agile",
  "Agile methodologies are a set of methods and approaches in software development that prioritize flexibility, collaboration, and continuous improvement.",
  "They aim to adapt to rapidly changing requirements, incorporate customer feedback effectively, and enhance the software development process.",
  "The goal of Agile is to respond better to changing requirements, evaluate customer feedback more effectively, and make the software development process more flexible and adaptable compared to traditional methods."
);

//PAR2
const Scrum = new Article(
  "What is Scrum?",
  "INSERT_IMAGE",
  "scrum",
  "Scrum is one of the Agile software development methodologies. It's used to handle requirements flexibly, continuously evaluate customer feedback, and make teams more efficient.",
  "Scrum consists of a series of definitions, roles, meetings, and processes.",
  "Scrum is based on principles of flexibility, collaboration, and continuous feedback. It facilitates rapid project progress, encourages collaboration, and makes product development easier based on customer feedback."
);

//PAR3
const OriginScrum = new Article(
  "Origin of Scrum",
  "INSERT_IMAGE",
  "originScrum",
  "The use of the term scrum in software development came from a 1986 Harvard Business Review paper titled -The New New Product Development Game- by Hirotaka Takeuchi and Ikujiro Nonaka. Based on case studies from manufacturing firms in the automotive, photocopier, and printer industries, the authors outlined a new approach to product development for increased speed and flexibility. ",
  "They called this the rugby approach, as the process involves a single cross-functional team operating across multiple overlapping phases, in which the team tries to go the distance as a unit, passing the ball back and forth",
  "In the early 1990s, Ken Schwaber used what would become scrum at his company, Advanced Development Methods. Jeff Sutherland, John Scumniotales, and Jeff McKenna developed a similar approach at Easel Corporation, referring to the approach with the term scrum.[8] Sutherland and Schwaber later worked together to integrate their ideas into a single framework, formally known as scrum. Schwaber and Sutherland tested scrum and continually improved it, leading to the publication of a research paper in 1995,[9] and the Manifesto for Agile Software Development in 2001."
);

//PAR4
const SixPrinciple = new Article(
  "The 6 main principle",
  "INSERT_IMAGE",
  "six-principle",
  "1.Empirical Process Control - This principle emphasizes the core philosophy of Scrum based on the three main ideas of transparency, inspection, and adaptation. Empirical process control aids learning through experimentation, especially when the problem is not well defined or when there are no clear solutions",
  "2.Self-organization - This principle focuses on today’s workers, who deliver significantly greater value when self-organized, and this results in better team buy-in and shared ownership; and an innovative and creative environment which is more conducive for growth.",
  "3.Collaboration - This principle focuses on the three core dimensions related to collaborative work: awareness, articulation, and appropriation. It also advocates project delivery as a shared value-creation process with teams working and interacting together, as well as with the customer and other business stakeholders, to deliver the greatest value.",
  "4.Value Based Prioritization - This principle highlights the focus of Scrum to deliver maximum business value, from early in the project and continuing throughout.",
  "5.Time-boxing - This principle describes how time is considered a limiting constraint in Scrum and used to help effectively manage project planning and execution. Time-boxed elements in Scrum include Sprints, Daily Standup Meetings, Sprint Planning Meetings, Sprint Review Meetings, and Retrospect Sprint Meetings.",
  "6.Iterative Development - This principle defines iterative development and emphasizes how to better manage changes and build products that satisfy customer needs. It also delineates the Product Owner’s and organization’s responsibilities related to iterative development"
);

//PAR5
const TheoryScrum = new Article(
  "Theory behind the Scrum Team",
  "INSERT_IMAGE",
  "theoryScrum",
  "The Scrum Team commits to achieving its goals and to supporting each other. Their primary focus is on the work of the Sprint to make the best possible progress toward these goals",
  "Scrum Team is the fundamental unit of Scrum is a small team of people, a Scrum Team. The Scrum Team consists of one Scrum Master, one Product Owner, and Developers. Within a Scrum Team, there are no sub-teams or hierarchies. It is a cohesive unit of professionals focused on one objective at a time, the Product Goal. Scrum Teams are cross-functional, meaning the members have all the skills necessary to create value each Sprint.",
  "They are also self-managing, meaning they internally decide who does what, when, and how."
);

//PAR6
const Roles = new Article(
  "Team roles",
  "INSERT_IMAGE",
  "roles",
  "Scrum consists of a series of definitions, roles, meetings, and processes. Its key components include:",
  "1. Product Owner: The product owner defines project requirements and collaborates with teams during the product development process.",
  "2. Scrum Master: The Scrum master ensures that teams apply Scrum principles and processes correctly and provides support to remove obstacles.",
  "3. Development Team: The development team creates and delivers the product. They complete a set of tasks during each Sprint (a specific period)"
);

//PAR7
const Events = new Article(
  "Scrum events",
  "INSERT_IMAGE",
  "events",
  "Scrum consists of a series of definitions, roles, meetings, and processes. Its key components include:",
  "1. Sprint- A Sprint is a cycle of work performed over a specific period. Typically lasting 2-4 weeks, a Sprint focuses on developing a new functionality of the product.",
  "2. Sprint Planning - The Sprint starts with a planning session in which the Developers plan the work they intend to do in the Sprint. This plan creates a shared understanding and alignment among the team.",
  "3. Daily Scrum - The Developers meet daily to inspect their progress toward the Sprint Goal, discuss any challenges they’ve run into and tweak their plan for the next day as needed. ",
  "4. Sprint Review- At the end of the Sprint, the Sprint Team meets with stakeholders to show what they have accomplished and get feedback.",
  "5. Sprint Retrospective - Finally, the Scrum Team gets together to discuss how the Sprint went and if there are things they could do differently and improve in the next Sprint."
);

//PAR8
const SprintEvents = new Article(
  "The role of the sprint event",
  "INSERT_IMAGE",
  "sprintEvents",
  "As described in the Scrum Guide, Sprints are the heartbeat of Scrum, where ideas are turned into value",
  "The Sprint is the Scrum event that encompasses all of the other Scrum events.",
  "They are fixed length periods of work that last one month or less to create consistency and ensure short iterations for feedback in order to inspect and adapt both how work is done and what is being worked on. If cycles are longer, then the spirit of frequent feedback cycles can be lost",
  "Longer Sprint may also get too complex and may increase risk. A new Sprint starts immediately after the conclusion of the previous Sprint. All the work necessary to achieve the Product Goal, including Sprint Planning, Daily Scrums, Sprint Review, and Sprint Retrospective, happen within Sprints."
);

const paragraphArray = [
  Agile,
  Scrum,
  OriginScrum,
  SixPrinciple,
  TheoryScrum,
  Roles,
  Events,
  SprintEvents,
];
export default paragraphArray;
