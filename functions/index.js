const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine and views directory for Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (stylesheets, scripts, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// GET route for rendering the Welcome view
app.get('/', (req, res) => {
    res.render('Welcome');
});

// GET route for rendering the SignIn view
app.get('/signin', (req, res) => {
    res.render('SignIn');
});
// GET route for rendering the SignUp view
app.get('/signup', (req, res) => {
    res.render('SignUp');
});

// POST route for handling sign-in form submission
app.post('/signin', async (req, res) => {
    // Handle sign-in form submission here
    // Example: Check credentials and redirect to appropriate page
    const name = req.body.name;
    const password = req.body.password;

    if (name === 'validUsername' && password === 'validPassword') {
        res.redirect('/dashboard'); // Redirect to dashboard if credentials are valid
    } else {
        res.render('SignIn', { error: 'Invalid username or password' });
    }
});

// POST route for handling sign-up form submission
app.post('/signup', async (req, res) => {
    // Handle sign-up form submission here
    // Example: Create a new user in the database
    const name = req.body.name;
    const password = req.body.password;

    // Your sign-up logic here

    // Redirect to sign-in page after sign-up
    res.redirect('/signin');
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
