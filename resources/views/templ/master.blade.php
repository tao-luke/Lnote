<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>template</title> 
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Neucha|Cabin+Sketch&display=swap">
    <link rel="stylesheet" href="/css/theme.css">
    <style>
    body {
        font-family: "Neucha", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
    }
    .dateContainer{
        justify-content: center;
        align-items: center;
        margin-top: 40vh;
        margin-left: 35vw;
        width: 25vw;
    }
    .dateUI{
        display: flex;
        flex-direction: column;
    }
    .content{
        color: #000000;
    }
    </style>
</head>
    
<body>
    @yield('page')
</body>

</html>