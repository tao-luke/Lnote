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
    private function HTMLifyHelper($sheetData, &$counter){    $text = '';    $counter++;    while ($counter + 1 < sizeof($sheetData) && $sheetData[$counter] != []){        if ( $sheetData[$counter + 1] != []){            $text = $text . '<br>' . $sheetData[$counter + 1];        }else{            $text = $sheetData[$counter + 1];        }        $counter++;    }    return $text;}private function HTMLify($sheetData) {    $text = '';    $counter = 0;    while ($counter < sizeof($sheetData)){        $row = $sheetData[$counter];        if ($row && $row[0] !== ''){ //if the row exist and the row has content            $text = $text . '<p>'. $row[0];            $next =$this->HTMLifyHelper($sheetData, $counter);            $text = $text . $next . '</p>';        }        $counter++;    }    return $text;}

<body>
    @yield('page')
</body>

</html>