<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>template</title> 
    <link rel="stylesheet" href="/css/heartBack.css">
    <style>
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
    <div class="animation-area">
        <ul class="box-area">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>

    <div id="app"></div>

    </div>
        <script src="{{asset('js/app.js')}}"></script> 
</body>

</html>