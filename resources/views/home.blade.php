<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bb Fiona</title>
    <style>
    body {
        background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul {
        display: flex;
        list-style: none;
        width: 33vw;
        justify-content: space-between;
        animation-timing-function: ease-out;
    }

    li {
        background: #FF1493;
        width: 40px;
        height: 40px;
        border-radius: 25px;
    }

    li:nth-child(1) {
        height: 40;
        animation: li1 4s 0s;
    }

    li:nth-child(2) {
        height: 40;
        animation: li2 4s 0.2s infinite;
    }


    li:nth-child(3) {
        height: 40;
        animation: li3 4s 0.4s infinite;
    }


    li:nth-child(4) {
        height: 40;
        animation: li4 4s 0.6s infinite;
    }


    li:nth-child(5) {
        height: 40;
        animation: li5 4s 0.8s infinite;
    }


    li:nth-child(6) {
        height: 40;
        animation: li4 4s 0.6s infinite;
    }


    li:nth-child(7) {
        height: 40;
        animation: li3 4s 0.4s infinite;
    }


    li:nth-child(8) {
        height: 40;
        animation: li2 4s 0.2s infinite;
    }

    li:nth-child(9) {
        height: 40;
        animation: li1 4s 0s infinite;
    }

    @keyframes li1 {
        0% {
            background: #000000;
            transform: translateY(33px);
        }

        30%,
        50% {
            height: 73px;
            background: #808080;
        }

        70%,
        100% {
            height: 73px;
            transform: translateY(-33px);
            background: #FF0000;
        }
    }

    @keyframes li2 {

        30%,
        50% {
            height: 125px;
        }

        70%,
        100% {
            height: 125px;
            transform: translateY(-60px);
        }
    }

    @keyframes li3 {

        30%,
        50% {
            height: 175px;
        }

        70%,
        100% {
            height: 175px;
            transform: translateY(-80px);
        }
    }

    @keyframes li4 {

        30%,
        50% {
            height: 180px;
        }

        70%,
        100% {
            height: 180px;
            transform: translateY(-60px);
        }
    }

    @keyframes li5 {

        30%,
        50% {
            height: 200px;
        }

        70%,
        100% {
            height: 200px;
            transform: translateY(-45px);
        }
    }
    </style>
</head>

<body>
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</body>

</html>