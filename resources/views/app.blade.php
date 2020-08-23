<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title> <3 Fiona</title> 
    <link rel="stylesheet" href="/css/heartBack.css">
    <style>
    .dateContainer1{
        position: absolute;
        width: 20vw;
        left:40vw;
        top:40vh;
    }
    .dateContainer2{
        position: absolute;
        width: 20vw;
        left:40vw;
        top:10vh;
    }
    .dateUI{
        display: flex;
        justify-content: center;
        align-items: center;
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
            <li></li>
            <li></li>
        </ul>

    <div id="app"></div>
        <script src="{{asset('js/app.js')}}"></script> 
    </div>

</body>

</html>