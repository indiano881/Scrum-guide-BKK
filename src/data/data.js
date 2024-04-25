function Article(title, image, content1, content2, content3 ) {
    this.title=title,
    this.image=image,
    this.content1=content1,
    this.content2=content2,
    this.content3=content3
}

//PAR 1
const Agile= new Article (
    "What is Agile Project Metodology?",
    "INSERT_IMAGE",
    "Agile methodologies are a set of methods and approaches in software development that prioritize flexibility, collaboration, and continuous improvement.",
    "They aim to adapt to rapidly changing requirements, incorporate customer feedback effectively, and enhance the software development process.",
    "The goal of Agile is to respond better to changing requirements, evaluate customer feedback more effectively, and make the software development process more flexible and adaptable compared to traditional methods."
)

//PAR2
const Scrum= new Article (
    "What is Scrum?",
    "INSERT_IMAGE",
    "Scrum is one of the Agile software development methodologies. It's used to handle requirements flexibly, continuously evaluate customer feedback, and make teams more efficient.",
    "Scrum consists of a series of definitions, roles, meetings, and processes.",
    "Scrum is based on principles of flexibility, collaboration, and continuous feedback. It facilitates rapid project progress, encourages collaboration, and makes product development easier based on customer feedback."
)

//PAR3
const OriginScrum= new Article (
    "Origin of Scrum",
    "INSERT_IMAGE",
    "The use of the term scrum in software development came from a 1986 Harvard Business Review paper titled -The New New Product Development Game- by Hirotaka Takeuchi and Ikujiro Nonaka. Based on case studies from manufacturing firms in the automotive, photocopier, and printer industries, the authors outlined a new approach to product development for increased speed and flexibility. ",
    "They called this the rugby approach, as the process involves a single cross-functional team operating across multiple overlapping phases, in which the team tries to go the distance as a unit, passing the ball back and forth",
    "In the early 1990s, Ken Schwaber used what would become scrum at his company, Advanced Development Methods. Jeff Sutherland, John Scumniotales, and Jeff McKenna developed a similar approach at Easel Corporation, referring to the approach with the term scrum.[8] Sutherland and Schwaber later worked together to integrate their ideas into a single framework, formally known as scrum. Schwaber and Sutherland tested scrum and continually improved it, leading to the publication of a research paper in 1995,[9] and the Manifesto for Agile Software Development in 2001."
)

//PAR4
const SixPrinciple= new Article (
    "The 6 main principle",
    "INSERT_IMAGE",
    "1.Empirical Process Control - This principle emphasizes the core philosophy of Scrum based on the three main ideas of transparency, inspection, and adaptation. Empirical process control aids learning through experimentation, especially when the problem is not well defined or when there are no clear solutions",
    "2.Self-organization - This principle focuses on today’s workers, who deliver significantly greater value when self-organized, and this results in better team buy-in and shared ownership; and an innovative and creative environment which is more conducive for growth.",
    "3.Collaboration - This principle focuses on the three core dimensions related to collaborative work: awareness, articulation, and appropriation. It also advocates project delivery as a shared value-creation process with teams working and interacting together, as well as with the customer and other business stakeholders, to deliver the greatest value.",
    "Value Based Prioritization - This principle highlights the focus of Scrum to deliver maximum business value, from early in the project and continuing throughout.",
    "Time-boxing - This principle describes how time is considered a limiting constraint in Scrum and used to help effectively manage project planning and execution. Time-boxed elements in Scrum include Sprints, Daily Standup Meetings, Sprint Planning Meetings, Sprint Review Meetings, and Retrospect Sprint Meetings.",
    "Iterative Development - This principle defines iterative development and emphasizes how to better manage changes and build products that satisfy customer needs. It also delineates the Product Owner’s and organization’s responsibilities related to iterative development"
)