const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Hospitality' },
    { name: 'Residential' },
    { name: 'Health' },
    { name: 'Commercial' },
    { name: 'Sports & Events' },
    { name: 'BIM' },
    { name: 'Tools' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Omni Center Hotel',
      description:
        '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'hosp1.jpg',
      category: categories[0]._id,
      price:   1000.00,
      quantity: 1
    },
    {
      name: 'JW Marriot Austin',
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'hosp2.jpg',
      category: categories[0]._id,
      price:   2000.00,
      quantity: 1
    },
    {
      name: 'Hotel Indigo Nanjing',
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'hosp3.jpg',
      category: categories[0]._id,
      price:   3000.00,
      quantity: 1
    },
    {
      name: 'The Ocean Club Four Seasons Resort',
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'hosp4.jpg',
      category: categories[0]._id,
      price:   4000.00,
      quantity: 1
    },
    {
      name: 'Building Tower Millenium',
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'hosp5.jpg',
      category: categories[0]._id,
      price:    5000.00,
      quantity: 1
    },
    {
      name: 'Burj Khalifa ',
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'hosp6.jpg',
      category: categories[0]._id,
      price:   6000.00,
      quantity: 1
    },
    {
      name: 'NewYork Hudson Stairs Center',
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'hosp7.jpg',
      category: categories[0]._id,
      price:   7000.00,
      quantity: 1
    },
    {
      name: 'Garden and Relaxing Campus',
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'hosp8.jpg',
      category: categories[0]._id,
      price: 8000.00,
      quantity: 1
    },
    {
      name: 'Candlestick Point Block',
      category: categories[1]._id,
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'resi1.jpg',
      price: 1200.00,
      quantity: 1
    },
    {
      name: 'The Village Living',
      category: categories[1]._id,
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'resi2.jpg',
      price: 800.00,
      quantity: 1
    },
    {
      name: 'Distric Jasper Residential ',
      category: categories[1]._id,
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'resi3.jpg',
      price: 4500.00,
      quantity: 1
    },
    {
      name: 'NoMa Center',
      category: categories[1]._id,
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'resi4.jpg',
      price: 2600.00,
      quantity: 1
    },
    {
      name: 'Walter Reed Medical Center',
      category: categories[2]._id,
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'health1.jpg',
      price: 21000.00,
      quantity: 1
    },
    {
      name: 'Medical Science Complex',
      category: categories[2]._id,
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'health2.jpg',
      price: 22000.00,
      quantity: 1
    },
    {
      name: 'Health & Life Center',
      category: categories[2]._id,
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'health3.jpg',
      price: 2300.00,
      quantity: 1
    }, 
    {
      name: 'Life Science Laboratory',
      category: categories[2]._id,
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'health4.jpg',
      price: 24000.00,
      quantity: 1
    },    {
      name: 'UpVillage Distric',
      category: categories[3]._id,
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'comm1.jpg',
      price: 31000.00,
      quantity: 1
    },    {
      name: 'The Union',
      category: categories[3]._id,
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'comm2.jpg',
      price: 32000.00,
      quantity: 1
    },    {
      name: 'New Platinum Center',
      category: categories[3]._id,
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'comm3.jpg',
      price: 33000.00,
      quantity: 1
    },    {
      name: 'Innova Office Park',
      category: categories[3]._id,
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'comm4.jpg',
      price: 34000.00,
      quantity: 1
    },    {
      name: 'Dallas AT&T Stadium',
      category: categories[4]._id,
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.',
      image: 'sports1.jpg',
      price: 41000.00,
      quantity: 1
    },    {
      name: 'SoFi Stadium',
      category: categories[4]._id,
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'sports2.jpg',
      price: 42000.00,
      quantity: 1
    },    {
      name: 'New York Sports Arena',
      category: categories[4]._id,
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'sports3.jpg',
      price: 43000.00,
      quantity: 1
    },    {
      name: 'George & Dolores Theater',
      category: categories[4]._id,
      description:
      '- Pre-agreement Phase, - Schematic Design Phase, - Design Development Phase , Construction Documents Phase, Bidding and Negotiation Phase, Contract Administration Phase, Post-construction Services.', 
      image: 'sports4.jpg',
      price: 44000.00,
      quantity: 1
    },
    {
      name: 'BIM - Building Information Model, 3D Digital Simulation  ',
      category: categories[5]._id,
      description:
      'The fastest way to transfer the BIM 3D model to reality, Easily lay out corners, edges and surfaces using one of the most intuitive digital solutions', 
      image: 'bim1.jpg',
      price: 5100.00,
      quantity: 1
    },
    {
      name: 'BIM - Engineering Solutions ',
      category: categories[5]._id,
      description:
      'The fastest way to transfer the BIM 3D model to reality, Easily lay out corners, edges and surfaces using one of the most intuitive digital solutions',
      image: 'bim2.jpg',
      price: 5200.00,
      quantity: 1
    },
    {
      name: 'BIM - Coding & Approvals ',
      category: categories[5]._id,
      description:
      'The fastest way to transfer the BIM 3D model to reality, Easily lay out corners, edges and surfaces using one of the most intuitive digital solutions',
      image: 'bim3.jpg',
      price: 5300.00,
      quantity: 1
    },
    {
      name: 'BIM - Building Structure & Fire Protection ',
      category: categories[5]._id,
      description:
      'The fastest way to transfer the BIM 3D model to reality, Easily lay out corners, edges and surfaces using one of the most intuitive digital solutions',
      image: 'bim4.jpg',
      price: 5400.00,
      quantity: 1
    },
    {
      name: 'TE 6-CL Rotary Hammer',
      category: categories[6]._id,
      description:
      'New cordless battery platform delivering more power and flexibility. Get ready for the future with the 22V Nuron platform the latest addition to our existing cordless tool portfolios. Finally perform your corded and gas-powered applications on a single cordless platform. ', 
      image: 'tool1.jpg',
      price: 610.00,
      quantity: 20
    },
    {
      name: 'TE 30-AVR Rotary Hammer ',
      category: categories[6]._id,
      description:
      'New cordless battery platform delivering more power and flexibility. Get ready for the future with the 22V Nuron platform the latest addition to our existing cordless tool portfolios. Finally perform your corded and gas-powered applications on a single cordless platform. ',
      image: 'tool2.jpg',
      price: 6200.00,
      quantity: 22
    },
    {
      name: 'DSH 600-22 Cut off saw',
      category: categories[6]._id,
      description:
      'New cordless battery platform delivering more power and flexibility. Get ready for the future with the 22V Nuron platform the latest addition to our existing cordless tool portfolios. Finally perform your corded and gas-powered applications on a single cordless platform. ',
      image: 'tool3.jpg',
      price: 6300.00,
      quantity: 23
    },
    {
      name: 'DD 250 Core Drill ',
      category: categories[6]._id,
      description:
      'New cordless battery platform delivering more power and flexibility. Get ready for the future with the 22V Nuron platform the latest addition to our existing cordless tool portfolios. Finally perform your corded and gas-powered applications on a single cordless platform. ',
      image: 'tool4.jpg',
      price: 6400.00,
      quantity: 24
    },
    {
      name: 'DD 500 and Stand Core Drill',
      category: categories[6]._id,
      description:
      'New cordless battery platform delivering more power and flexibility. Get ready for the future with the 22V Nuron platform the latest addition to our existing cordless tool portfolios. Finally perform your corded and gas-powered applications on a single cordless platform. ',
      image: 'tool5.jpg',
      price: 610.00,
      quantity: 20
    },
    {
      name: 'DD 700 Core Drill ',
      category: categories[6]._id,
      description:
      'New cordless battery platform delivering more power and flexibility. Get ready for the future with the 22V Nuron platform the latest addition to our existing cordless tool portfolios. Finally perform your corded and gas-powered applications on a single cordless platform. ',
      image: 'tool6.jpg',
      price: 6200.00,
      quantity: 32
    },
    {
      name: 'PR 30-HVS Rotating Laser ',
      category: categories[6]._id,
      description:
      'New cordless battery platform delivering more power and flexibility. Get ready for the future with the 22V Nuron platform the latest addition to our existing cordless tool portfolios. Finally perform your corded and gas-powered applications on a single cordless platform. ',
      image: 'tool7.jpg',
      price: 6300.00,
      quantity: 13
    },
    {
      name: 'BX 3-ME Concrete Fastening ',
      category: categories[6]._id,
      description:
      'New cordless battery platform delivering more power and flexibility. Get ready for the future with the 22V Nuron platform the latest addition to our existing cordless tool portfolios. Finally perform your corded and gas-powered applications on a single cordless platform. ',
      image: 'tool8.jpg',
      price: 6400.00,
      quantity: 14
    },
  
  ]);
  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bobs@gmail.com',
    password: 'password62707',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Brenda',
    lastName: 'White',
    email: 'brendaw@gmail.com',
    password: 'password62707'
    // orders: [
    //   {
    //     products: [products[0]._id, products[0]._id, products[1]._id]
    //   }
    // ]  
  });

  console.log('users seeded');

  process.exit();
});