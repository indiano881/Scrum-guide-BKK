function Staff(name, image, title, phone, email) {
    this.name=name,
    this.image=image,
    this.title=title,
    this.phone=phone,
    this.email=email
}

const Davide= new Staff(
    "Davide Baldi",
    "davide.jpg",
    "Key account manager",
    "072-123 456 789",
    "Davide@scrum.com"
)

const Bedir= new Staff(
    "Bedir Gömcez",
    "bedir.png",
    "Head of Development",
    "072-123 456 789",
    "Bedir@scrum.com"
)

const Carl= new Staff(
    "Carl Åberg",
    "carl.jpg",
    "CEO and Founder",
    "072-123 456 789",
    "Carl@scrum.com"
)

const Shada= new Staff(
    "Shada Bazger",
    "shada.jpg",
    "HR manager",
    "072-123 456 789",
    "Shada@scrum.com"
)

const staffArray= [Davide,Bedir,Shada,Carl];

export default staffArray;