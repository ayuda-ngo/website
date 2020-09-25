/* Change this file according to data */

/* About Us Section */

const socialMediaLinks = {
  instagram: "https://www.instagram.com/ayuda.ngo/",
  facebook: "https://www.facebook.com/ngoayuda/",
  linkedin: "https://www.linkedin.com/company/ayuda-ngo/",
  medium: "https://medium.com/@ngoayuda",
};

/* NavLinks */

const navLinks = [
  {
    name: "Our Story",
    url: "#story",
  },
  {
    name: "Our Initiatives",
    url: "#initiatives",
  },
  {
    name: "Events",
    url: "#events",
  },
  {
    name: "Blogs",
    url: "#blogs",
  },
  {
    name: "Board Members",
    url: "#members",
  },
  {
    name: "Contact",
    url: "/#contact",
  },
];

/* Blog Section */

// To be replaced by Medium's API

const blogSection = {
  title: "Blogs",
  subtitle:
    "To shed light on some important topics, we have some detailed blogs which you can go through.",
  blogs: [
    {
      id: 1,
      url:
        "https://medium.com/@ngoayuda/where-healing-comes-from-heart-4991e82ea075",
      title: "WHERE HEALING COMES FROM HEART",
      text:
        "In this current situation, the world requires a definite energy to shatter the negative forces ...",
    },
    {
      id: 2,
      url:
        "https://medium.com/@ngoayuda/drug-abuse-and-illicit-trafficking-424d4e144c45",
      title: "DRUG ABUSE AND ILLICIT TRAFFICKING",
      text:
        "International Day Against Drug Abuse and Illicit Trafficking is a United Nations International Day ...",
    },
    {
      id: 3,
      url:
        "https://medium.com/@ngoayuda/the-predicament-of-rising-population-97653858c8a",
      title: "THE PREDICAMENT OF RISING POPULATION",
      text:
        "Every year, on July 11, World Population Day is observed by the UN with the primary narrative being to promulgate ...",
    },
    {
      id: 4,
      url:
        "https://medium.com/@ngoayuda/dont-give-up-you-are-important-as-your-life-dc3aa24027c2",
      title: "DON’T GIVE UP - You are Important as your Life",
      text:
        "Every hour one student commits suicide in India, with about 28 such suicides reported every day, according to data ...",
    },
    {
      id: 5,
      url: "https://medium.com/@ngoayuda/my-journey-in-ayuda-981d2b56ae9e",
      title: "MY JOURNEY IN AYUDA PART - 1",
      text:
        "When I look back at the two and a half years I have spent in this club, I see so many memories flooding my mind. I see the ...",
    },
    {
      id: 6,
      url: "https://medium.com/@ngoayuda/my-journey-in-ayuda-2-12845c62e256",
      title: "MY JOURNEY IN AYUDA PART - 2",
      text:
        "Back in my school days, we had an annual visit to the old age home and an orphanage once a year at least. We’d go there ...",
    },
  ],
};

/* Board members Data */

const boardMembersSection = {
  title: "Our Board Members",
  faculty: {
    name: "Bijendra Singh",
    image: require("./assets/img-card.svg"),
    role: "Faculty Cordinator",
  },

  boardMembers: [
    {
      id: 1,
      name: "Vandana Mansur",
      image: require("./assets/BoardMembers/1.webp"),
      role: "President",
      instagram: "https://www.instagram.com/vandana.mansur",
      linkedin: "https://www.linkedin.com/in/vandana-mansur-9b727a188",
    },
    {
      id: 2,
      name: "Juhi Verma",
      image: require("./assets/BoardMembers/2.webp"),
      role: "Vice - President",
      instagram: "https://instagram.com/juhiii_verma",
      linkedin: "https://www.linkedin.com/in/juhi-verma-9b4278188",
    },
    {
      id: 3,
      name: "Aman Mirza",
      image: require("./assets/BoardMembers/3.webp"),
      role: "Internal Events Head",
      instagram: "https://www.instagram.com/a.m.a.n._.m.i.r.z.a",
      linkedin: "https://www.linkedin.com/in/mohammad-aman-mirza",
    },
    {
      id: 4,
      name: "Zikra Noman",
      image: require("./assets/BoardMembers/4.webp"),
      role: "Internal Events Head",
      instagram: "https://www.instagram.com/_ziiikra_",
      linkedin: "http://www.linkedin.com/in/zikra-noman-47b27a188",
    },
    {
      id: 5,
      name: "Mahanth",
      image: require("./assets/BoardMembers/5.webp"),
      role: "External Events Head",
      instagram: "https://www.instagram.com/mahanth_gates",
    },
    {
      id: 6,
      name: "Surya Salvatore",
      image: require("./assets/BoardMembers/6.webp"),
      role: "External Events Head",
      instagram: "https://instagram.com/_surya_salvatore_",
      linkedin: "https://www.linkedin.com/in/surya-sekaran-392281188",
    },
    {
      id: 7,
      name: "Rishi Vandhanaa",
      image: require("./assets/BoardMembers/7.webp"),
      role: "Editorial Head",
      instagram: "https://www.instagram.com/rishi_vandhanaa",
      linkedin: "https://www.linkedin.com/in/rishi-vandhanaa-k-2971351b3",
    },
    {
      id: 8,
      name: "Shivesh Sharan",
      image: require("./assets/BoardMembers/8.webp"),
      role: "Finance Head",
      instagram: "https://instagram.com/shivesh.sharan",
      linkedin: "https://www.linkedin.com/in/shivesh-sharan-b1b1ba113",
    },
    {
      id: 9,
      name: "Soham Gosavi",
      image: require("./assets/BoardMembers/9.webp"),
      role: "Publicity Head",
      intstagram: "https://www.instagram.com/sohamgosavi07",
      linkedin: "https://www.linkedin.com/in/soham-gosavi-b17a60195",
    },
    {
      id: 10,
      name: "Gitanjali Singh",
      image: require("./assets/BoardMembers/10.webp"),
      role: "HR",
      instagram: "https://www.instagram.com/_gitanjalisingh",
      linkedin: "https://www.linkedin.com/in/gitanjali-singh-1973161a0",
    },
    {
      id: 11,
      name: "Ayush Bhatia",
      image: require("./assets/BoardMembers/11.webp"),
      role: "Design Head",
      instagram: "https://www.instagram.com/bhatiaayush01",
    },
  ],
};

/* Story Section */

const storySection = {
  title: "Our Story",
  howWeGotStrated: {
    title: "How We Got Started",
    text:
      "Tracing back to the inception in 2013, Ayuda NGO was founded by a small group of students who not only wanted to bring a change into the world, but be the change. With this earnest thought in mind and a fierce hunger of motivation, Ayuda began its steady journey towards their aim to be the change.",
  },
  whereAreWeNow: {
    title: "Where We Are Now",
    text:
      "With a huge, loving family of more than a hundred, Ayuda has achieved great recognition due to their diligent members, commendable team spirit and our blooming projects. Be it a campaign to stop sexual violence, spending the day at a differently- abled organisation or having session on drug abuse, we have done it all!",
  },
  video: {
    title: "About Ayuda",
    src: require("./assets/About_AYUDA.webm"),
    light: require("./assets/About_AYUDA_light.jpg"),
    // require("./assets/About_AYUDA.webm")
  },
};

/* Get In Touch Section */

const getInTouchSection = {
  title: "Get in Touch. Get Involved.",
  text:
    "“A person’s most useful asset is not a head full of knowledge, but a heart full of love, an ear ready to listen and a hand willing to aid others.” Want to volunteer, donate or share ideas? We would love to get in touch with you!",
  address: "Address: VIT University, Vellore 632014",
  number: "Call: +91 8095719640",
};

/* Initiatives Section */

const initiativesSection = {
  title: "Our Initiatives",
  subtitle:
    "Keeping our mission in mind, “To bring out the change in society by spreading hands to help out the underprivileged children and other backward social communities”, we have 5 successful ongoing projects.",
  initiatives: [
    {
      id: 1,
      title: "PROJECT GO GREEN",
      text:
        "This is an initiative to augment the green cover in the areas where the vegetation is less. In times of increasing urban expansion and drastic decline in foliage, this project provides a way to restore the flora of surrounding areas.",
      image: require("./assets/images/go-green.png"),
      link: "https://medium.com/series/46e8ab47fa44",
    },
    {
      id: 2,
      title: "PROJECT GYAAN",
      text:
        "Our student volunteers go to schools in Vellore and teach students using creative methods. We provide more resources for their academic and holistic development. The resources usually includes fun games with an academic approach, group discussions and much more.",
      image: require("./assets/images/gyaan.png"),
      link: "https://medium.com/series/40893625143b",
    },
    {
      id: 3,
      title: "PROJECT MUSKAAN",
      text:
        "As cultural and extra-curricular activities are a crucial part of a person’s life, we organise sporting events, dance and music competitions, dress-up games, and story-telling sessions for the orphans and the old age crowd as a means to do something out of the ordinary.",
      image: require("./assets/images/muskaan.png"),
      link: "https://medium.com/series/48c090b2a22f",
    },
    {
      id: 4,
      title: "PROJECT NIRMAAN",
      text:
        "This is an ongoing effort made to provide for the needy by effective means. We collect old clothes, unused stationery items and other daily essential items from our students itself, by setting up donation boxes in our hostels where people can drop item.",
      image: require("./assets/images/nirman.png"),
      link: "https://medium.com/series/fb1492a32180",
    },
    {
      id: 5,
      title: "PROJECT SUDHAAR",
      text:
        "Here we conduct medical health camps for the underprivileged community like patients with intellectual disabilities, orphans or the elderly crowd. This is inclusive of eye check-up drives and overall physical check-ups to ensure a healthy and a safe lifestyle.",
      image: require("./assets/images/sudhaar.png"),
      link: "https://medium.com/series/ccf401c07ae",
    },
  ],
};

/* Events Section */

const eventsSection = {
  title: "Events",
  events: [
    {
      id: 1,
      name: "Event 1",
      heading: "Peace Carnival",
      text:
        "Ayuda conducts a fun event to make a Sunday evening exciting by putting up plays on spreading humanity, organising a polaroid booth, a photo booth, and games such as: spin-the-wheel, musical chairs, and much more.",
      image: require("./assets/events/peace.jpg"),
    },
    {
      id: 2,
      name: "Event 2",
      heading: "Social Entrepreneurship",
      text:
        "Ayuda’s flagship event that encourages students to pitch their start-up idea along with a budget plan. The start-up idea focuses on the social impact on people in any part of India.",
      image: require("./assets/events/social.jpg"),
    },
    {
      id: 3,
      name: "Event 3",
      heading: "Christmas",
      text:
        "We often visit a care-taking facility for needy children named Nambikai Illam. Christmas'19 we had a drawing competition for the kids and also fun with Santa giving away candies and gifts. We learned the importance of life’s little things we take for granted from these children, whenever we'd receive a smile from these children, it fills our hearts with happiness.",
      image: require("./assets/events/christmas.jpg"),
    },
    {
      id: 4,
      name: "Event 4",
      heading: "Mind Talk",
      text:
        'Sometimes all you need is for someone to just be there which can make all the difference. A live session "Mind talk" with Ann Zachariah, a counsellor, created an awareness amongst us leaving a major takeaway that all of us will remember and encorporate in our lives.',
      image: require("./assets/events/mind-talks.jpg"),
    },
    {
      id: 5,
      name: "Event 5",
      heading: "Craftsmen",
      text:
        "Students had the opportunity to showcase their talent, concern and creativity regarding various topics in the form of paintings, sketches, photographs, poems, shayari and digital art.",
      image: require("./assets/events/craftsman.jpg"),
    },
  ],
};

export {
  navLinks,
  socialMediaLinks,
  blogSection,
  boardMembersSection,
  storySection,
  getInTouchSection,
  initiativesSection,
  eventsSection,
};
