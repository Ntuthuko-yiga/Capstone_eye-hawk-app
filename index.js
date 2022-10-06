import express from 'express';
import LogRocket from 'logrocket';
LogRocket.init('kh7eu2/hawk-eye');

const app = express();

app.use(express.static('public')); //folder to put files in and can be accessed.

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// simple route
app.get('/api/hawkeye', (req, res) => {
    res.json({ message: "Welcome to Hawk Eye application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 6780;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});



app.post('/api/hawkeye', function (req, res) {

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

    //app.listen(PORT, () => console.log(`App started on ${PORT}`));