const faker = require("faker");

const db = require("../config/connection");
const { Project } = require("../models");

db.once("open", async () => {
    await Project.deleteMany({});

    // creat eproject data
    const projectData = [];

    for (let i = 0; i < 10; i += 1) {
        const name = faker.internet.domainWord();
        const price = Math.floor(Math.random() * (200 - 5) + 5 / 100);
        const seller = faker.internet.email();
        const description = faker.internet.userName();
    
        projectData.push({ name, price, seller, description });
    }

    const createdProjects = await Project.collection.insertMany(projectData);

    console.log("all done!");
    process.exit(0);
  });