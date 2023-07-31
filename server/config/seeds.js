const db = require("./connection");
const { User, Project, Category, Firm } = require("../models");

db.once("open", async () => {
    await Category.deleteMany();
    

    const categories = await Category.insertMany([
        { name: "Hospitality" },
        { name: "Residential" },
        { name: "Health" },
        { name: "commercial" },
        { name: "Hospital" },
        { name: "Sports & Events" },
    ]);

    console.log("categories seeded");

    await User.deleteMany();

    const users = await User.create([

    {
        username: "John Weston Jr",
        email: "seller1@email.com",
        password: "password12345",
        account: "seller",
      },
      {
        username: "Robert Longo",
        email: "seller2@email.com",
        password: "password12345",
        account: "seller",
      },
      {
        username: "Jaffrey York",
        email: "seller3@email.com",
        password: "password12345",
        account: "seller",
      },
      {
        username: "Brenda Gates",
        email: "buyer1@email.com",
        password: "password12345",
        account: "buyer",
      },
      {
        username: "Elian Musk",
        email: "buyer2@email.com",
        password: "password12345",
        account: "buyer",
      },
      {
        username: "Bob Bezos",
        email: "buyer3@gmail.com",
        password: "password12345",
        account: "buyer",
      },
    
    ]);
    
    console.log("users seeded");

    await Project.deleteMany();

    const projects = await Project.insertMany([

        {
            name: "Project 1",
            price: 2,
            description: "PROJECT 1 DESCRIPTION",
            quantity: 25,
            image: "project1.jpg",
            category: categories[1]._id,
          },
          {
            name: "Project 2",
            price: 1,
            description: "PROJECT 2 DESCRIPTION",
            quantity: 10,
            image: "project3.jpg",
            category: categories[0]._id,
          },
          {
            name: "Project 3",
            price: 15,
            description: "PROJECT 3 DESCRIPTION",
            quantity: 5,
            image: "project3.jpg",
            category: categories[2]._id,
          },
          {
            name: "Project 4",
            price: 5,
            description: "PROJECT 4 DESCRIPTION",
            quantity: 10,
            image: "project4.jpg",
            category: categories[3]._id,
          },
          {
            name: "Project 5",
            price: 3,
            description: "PROJECT 5 DESCRIPTION",
            quantity: 12,
            image: "project5.jpg",
            category: categories[4]._id,
          },
          {
            name: "Project 6",
            price: 3,
            description: "PROJECT 6 DESCRIPTION",
            quantity: 50,
            image: "project6.jpg",
            category: categories[1]._id,
          },
          {
            name: "Project 7",
            price: 1,
            description: "PROJECT 7 DESCRIPTION",
            quantity: 28,
            image: "project7.jpg",
            category: categories[0]._id,
          },
          {
            name: "Project 8",
            price: 25,
            description: "PROJECT 8 DESCRIPTION",
            quantity: 5,
            image: "project8.jpg",
            category: categories[2]._id,
          },
          {
            name: "Project 9",
            price: 12,
            description: "PROJECT 9 DESCRIPTION",
            quantity: 8,
            image: "project9.jpg",
            category: categories[3]._id,
          },
          {
            name: "Project 10",
            price: 4,
            description: "PROJECT 10 DESCRIPTION",
            quantity: 7,
            image: "project10.jpg",
            category: categories[4]._id,
          },

    ]);

    console.log("projects seeded");

    await firms = await Firm.insertMany([

        {
            firmName: "Firm1",
            firmOwner: users[0]._id,
            projects: [projects[0]._id, projects[1]._id, projects[2]._id],
          },
          {
            firmName: "Firm2",
            firmOwner: users[1]._id,
            projects: [projects[3]._id, projects[4]._id, projects[5]._id],
          },
          {
            firmName: "Firm3",
            firmOwner: users[2]._id,
            projects: [
              projects[6]._id,
              projects[7]._id,
              projects[8]._id,
              projects[9]._id,
            ],
          },
    ]);

    console.log("firms seeded")

    ProcessingInstruction.exit();
});