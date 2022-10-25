import express from 'express';


const app = express();

app.use(express.static('public')); //folder to put files in and can be accessed.

app.use(express.urlencoded({ extended: false }));
app.use(express.json());




// set port, listen for requests
const PORT = process.env.PORT || 6780;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// simple route
app.get('/api/hawkeye', function (req, res) {

    const services = req.query.services;     //takes a sentence

    if (!services) {
        res.json({
            error: 'Pleases click a service'
        })
    }



app.get('/api/hawkeye', function (req, res) {

    console.log(req.body);

    const username = req.body.username;
    const password = req.body.password;

    if (username && !password[username]) {
        password[username] = login;
    }

    res.json({
        statu: 'successful'

    })
});

app.get('/api/hawkeye/:username', function (req, res) {   //placeholder
    const username = req.params.username;
    //const surname = req.query.surname;
    res.json({     //sending json to the browser
        message: 'Welcome Back, ' + username
    });
});
})

