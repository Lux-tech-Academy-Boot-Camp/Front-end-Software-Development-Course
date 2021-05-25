const blog = [
    {
      name: "Introduction to DevOps.",
      description: "Devops is not a tool or a team, it is the process or a methodology of using various tools to solve the problems between Developers and Operations team, hence the term â€œDev-Opsâ€,It is the efficient development, deployment, testing and the operation of the highest quality software possible.",
      image: "images/dev.png"
    },
    {
      name: "Python Programming language.",
      description: "Python is a free and open source high level programming language which is interplated, which supports object oreinted, procedural oriented, functional and imperative oriented programming paradigm. python is ranked as the best programming language in 2019 and 2020 world wide.",
      image: "images/python.png"
    },
    {
      name: " Top 5 Programming Languages.",
      description: "Technology has made our lives easier with several forms of implementation that are seen in different professional fields. As most individuals began to efficiently program computers and write efficient codes. Let look at the top 5 programming langugaes in the world 2020..",
      image: "images/pro.png"
    },
    {
      name: "Python flask mysql connection",
      description: "Flask is a python microframework while MySQL is a famous realational database, in this article we are going to discuss how we can collect flask form data and record it into Mysql server use a simple Real world example Using flask as a server",
      image: "images/python_ff.png"
    },
  
  ];

  const getBlogs = () => {
    let output = "";
    blog.forEach(
      ({ name,description, image }) =>
        (output += `
                <div class="item-flex">
                  <img class="item-avatar" src=${image} />
                  <h1 class="item-title">${name}</h1>
                  <p>${description}</p>
                  <a class="item-link" href="#">Read More</a>
                </div>
                `)
    );
    container.innerHTML = output;
  };