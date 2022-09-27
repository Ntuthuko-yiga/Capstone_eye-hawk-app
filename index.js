import express from 'express';

const app = express();

app.use(express.static('public')); //folder to put files in and can be accessed.

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const PORT = process.env.PORT || 6780;

let counter = 0;

const login = {
    'Thandeka': '!LOV3God',
    'Lehlohonolo': 'Earplug$2',
    'Sibu': 'Pol35@',
    'Nomsa': 'P@nda'
}

app.get('/api/counter', function (req, res) {
    res.json({
        counter
    })
});

app.post('/api/hawkeye', function(req, res){

    console.log(req.body);

    const username = req.body.username;
    const password = req.body.password;

    if (username && !password[username]){
        password[username] = login;
    }

    res.json({
        statu : 'successful'

    })
});
/*app.get('/', function(req, res){
    res.send('Hello!')
})*/

app.get('/api/hawkeye', function (req, res) {   //define the room in my code call this function that takes two param req & response
    counter++;
    const username = req.query.username; //req.query is a way we can send data in
    const password = req.query.password;

    const log = login[password];
    const message = `${username}`;

    if (!log) {                         //error message
        res.json({
            message: `${password} too short.`
        });
    } else {
        res.json({
            message
        });
    }
});

    /*if (name && surname) {
        res.json({     //data comming out of the route.
            message: 'Hello, ' + name + " " + surname
        });
    } else {
        res.json({     //data comming out of the route.
            message: 'Hello!'
        });
    }
});*/

    app.get('/api/hawkeye/:username', function (req, res) {   //placeholder
        const username = req.params.username;
        //const surname = req.query.surname;
        res.json({     //sending json to the browser
            message: 'Welcome Back, ' + username
        });
    });

    app.listen(PORT, () => console.log(`App started on ${PORT}`));