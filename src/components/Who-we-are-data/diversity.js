/* images */
import diversityImg from "../../assets/who-we-are/img/diversity.jpg"
import cultureImg from "../../assets/who-we-are/img/Boston-Tea-Party.jpg"

/* pdf */
import culturePDF from "../../assets/who-we-are/pdf/cervantes_culture.pdf"
import eeoPDF from "../../assets/who-we-are/pdf/eeo_policy.pdf"

const diversity = {
  hero: {
    title: "Diversity and Inclusion",
    intro: `Respect for the dignity of each person. Justice requires us to support and
    protect the rights of all people to fulfill their human potential. These values are
    the core of CERVANTES.`,
    bullets: [
      "Actively pursue knowledge, understanding and acceptance of our diverse employees, customers, and business relationships.",
      "Respect and honor differences.",
      "Develop systems, structures, and policies to support a diverse workforce.",
      "Demonstrate a commitment to equality of opportunity."
    ],
    image: diversityImg,              // keep in /public
    imageAlt: "Diversity"
  },

  values: {
    commitment: {
      title: "Our Commitment",
      text: `At CERVANTES we strive to reflect the communities in which we work. We have
      a commitment to promote diversity in all aspects of our organization from our
      policies and recruitment strategy, to the community and philanthropic efforts
      we take part in.`,
      cta: { label: "Learn More", href: culturePDF, }
    },
    eeo: {
      title: "EEO and Diversity Policy",
      text: `The policies of CERVANTES are designed to provide and promote equal employment
      opportunities for all applicants and employees. The Company is firmly committed to maintaining
      a workplace based on our collective values…`,
      cta: { label: "Learn More", href: eeoPDF, }
    }
  },

  culture: {
    title: "Our Culture",
    text: `Stay tuned for more information about our team, our support to our community and our
    philanthropic efforts. See more CERVANTINOS events.`,
    image: cultureImg,
    imageAlt: "Company events"
  },

  testimonials: [
    {
      quote:
        "At the Cervantes Group not only are diversity and inclusion a priority, they’re the cornerstones on which the company was built.  As a Latina owned company, we pride ourselves in not only representing the multicultural communities in which we work, but also assisting our clients in reaching their diversity goals.",
      name: "Gary Griffin",
      role: "Vice President Sales & Solutions"
    },
    {
      quote:
        "We appreciate and highlight Diversity & Inclusion at The Cervantes Group as an extremely important and motivating area of emphasis we provide for our employees and customers alike.  This has been a central stress point for us throughout our history as a company and we are fortunate to share this core value with all our customers.  To me, diversity and inclusion means respecting one another.  People come in all shapes, sizes, and backgrounds and the respect everyone within our organization and clientele have for this speaks volumes about how our culture is.  I believe our partnerships with ALPFA, Chamber of Commerce, LatinX, and other community organizations also play a big role in our D & I initiatives and help us promote an environment where differences are not only accepted but more importantly, welcomed.",
      name: "Will Stephens",
      role: "Director of Business Development"
    },
    {
      quote:
        "Our diversity is an important value of The Cervantes Group we learned from our Jesuit education at Marquette University. When the Athletic Department prepared a trip to volunteer to Puerto Rico you witness the level commitment and responsibility the team has. We try to carry those values at The Cervantes Group too.",
      name: "Joanna Bauza",
      role: "President/CO-FOUNDER"
    },
    {
      quote:
        	"The James W. Foley Legacy Foundation is aptly named because it is a unified group of people that honor the legend and life of my buddy Jimmy. Joanna and I and many friends and do The Foley Freedom Run every year. This 2020, Gary Griffin and his family met up with me, Joanna, and our daughter Sofia, and with a lot of friends as well.  We ran and walked the 5K/1K and had donuts after to celebrate. He will never be forgotten and is greatly missed. R.I.P. Jimmy.",
      name: "Tim Mullen",
      role: "CO-FOUNDER/Managing Partner"
    }
  ]
};

export default diversity;
