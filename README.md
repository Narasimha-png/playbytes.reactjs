<!DOCTYPE html>
<html lang="en">
<head>
   
   
</head>
<body>
    <div>
    <h1>PlayBytes Assesment Version 1.0</h1>
    <h2>Features : </h2>
    <h2> <b>Task 1: Login Screen</b>  </h2>
    <p>Username: Must be non-empty and contain only alphabetic characters.<br>
        Password: Must meet the following criteria:<br>
        At least 8 characters.<br>
        At least one uppercase letter, one number, and one special character.</p>
        <p>Implemented Toggle of password using <b>custom</b>  icon and logic</p>
    <h2>Task 2: Questions Screen</h2>
    <p>Qustions are displayed using Dummy API data which is present in <b>src/DataBase/home.js</b> </p>
    <pre>const Data = [
        {
            "index" :0,
            "question" :"If you could have any fictional character as a roommate, who would it be and why?",
            "people":55
        },
        {
            "index" :1,
            "question" :"What's the funniest thing you've ever accidentally said to a stranger?",
            "people":23
        },
        {
            "index" :2,
            "question":"What's the silliest thing you've ever believed?" , 
            "people":18
        }
        , {
            "index" :3,
            "question":"What's the funniest thing you've ever accidentally said to a stranger?",
            "people":23
        },
        {
            "index" :4,
            "question":"What's the silliest thing you've ever believed?" , 
            "people":23
        }
        ,{
            "index" :5,
            "question":"What's the funniest thing you've ever accidentally said to a stranger?", 
            "people":18
        }
    ]</pre>
    <p>Each Question has unique id</p>
    <p>Reference for click on question is passed through url params to third page.</p>
    <h2>Task 3: Question Chat Screen</h2>
    <p>Display the question at the top using the data passed from the previous
        screen.</p>
        <p>Take a random message as input, and after clicking the "Send" button:
            Add the input as a new message on the screen.
            Clear the input field.</p>
    <h2 style="text-decoration: underline;">Message list is auto-scrolled, when new message sent it automatically scrolls to that position.</h2>
    <a  href="https://www.linkedin.com/in/slnarasimha">LinkedIn</a>
</div>
</body>
</html>
