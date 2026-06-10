const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const port=8080;


app.listen(port, () => {
    console.log("Server Running");
});

//data
let posts = [
    {
        id: uuidv4(),
        title: "Getting Started with Node.js",
        author: "John Doe",
        content: "Node.js is a JavaScript runtime environment that enables developers to build scalable and efficient server-side applications using JavaScript.",
        createdAt: "2026-06-10"
    },
    {
        id: uuidv4(),
        title: "Understanding REST APIs",
        author: "Jane Smith",
        content: "REST APIs provide a standardized architecture for communication between clients and servers using HTTP methods such as GET, POST, PUT, and DELETE.",
        createdAt: "2026-06-08"
    },
    {
        id: uuidv4(),
        title: "Introduction to Express.js",
        author: "Michael Brown",
        content: "Express.js is a minimal and flexible web framework for Node.js that simplifies routing, middleware management, and API development.",
        createdAt: "2026-06-05"
    },
    {
        id: uuidv4(),
        title: "Why Learn JavaScript in 2026",
        author: "Sarah Wilson",
        content: "JavaScript remains one of the most in-demand programming languages, powering web applications, mobile apps, desktop software, and backend services.",
        createdAt: "2026-06-03"
    },
    {
        id: uuidv4(),
        title: "Understanding Middleware in Express",
        author: "David Miller",
        content: "Middleware functions have access to request and response objects and can execute code, modify requests, and terminate the request-response cycle.",
        createdAt: "2026-06-01"
    },
    {
        id: uuidv4(),
        title: "EJS Templating for Dynamic Websites",
        author: "Emily Davis",
        content: "EJS allows developers to embed JavaScript directly into HTML templates, making it easy to render dynamic content on the server side.",
        createdAt: "2026-05-28"
    },
    {
        id: uuidv4(),
        title: "The Basics of CRUD Operations",
        author: "Robert Johnson",
        content: "CRUD stands for Create, Read, Update, and Delete. These operations form the foundation of most web applications and database interactions.",
        createdAt: "2026-05-25"
    },
    {
        id: uuidv4(),
        title: "Version Control with Git and GitHub",
        author: "Lisa Anderson",
        content: "Git helps developers track code changes, collaborate with teams, manage branches, and maintain project history effectively.",
        createdAt: "2026-05-22"
    }
];

//read all posts
app.get("/posts", (req,res)=>{
    res.render("index.ejs", {posts});
});

//new post
app.get("/posts/new", (req, res) => {
    res.render("new");
});

app.post("/posts", (req, res) => {

    const { title, author, content } =
    req.body;

    const newPost = {
        id: uuidv4(),
        title,
        author,
        content,
        createdAt:
            new Date().toLocaleDateString()
    };

    posts.push(newPost);

    res.redirect("/posts");

});

//get single post
app.get("/posts/:id", (req,res)=>{
    const { id } = req.params;
    const post = posts.find(
        post => post.id === id
    );
    res.render("show", { post });
});

//edit post
app.get("/posts/:id/edit", (req, res) => {
    const { id } = req.params;
    const post = posts.find(
        post => post.id === id
    );
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("edit", { post });
});

app.put("/posts/:id", (req, res) => {

    const { id } = req.params;

    const post = posts.find(
        post => post.id === id
    );

    if (!post) {
        return res.status(404).send("Post not found");
    }

    post.title = req.body.title;
    post.author = req.body.author;
    post.content = req.body.content;

    res.redirect("/posts");

});

//delete
app.delete("/posts/:id", (req, res) => {

    const { id } = req.params;

    posts = posts.filter(post => post.id !== id);

    res.redirect("/posts");

});