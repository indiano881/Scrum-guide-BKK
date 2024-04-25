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