<?php
$host = "askali-database.cpgna3kvvufy.ca-central-1.rds.amazonaws.com";
$user = "admin"
$password = "HackHateCanada2021!"
$dbname = "keywordsresponses"
if (isSet($_GET['selectedText'])) {
    $con = mysqli_connect($host, $user, $password, $dbname);
    ...
    $stmt = mysqli_prepare($con, 'SELECT response, hyperlink, keywords  
    FROM kwresponses  
    WHERE EXISTS (SELECT *  
        FROM STRING_SPLIT(keywords, ',')  
        WHERE value IN STRING_SPLIT(?, ',')); ');
    mysqli_stmt_bind_param($stmt, 's', $_GET['selectedText']);
    mysqli_stmt_execute($stmt);
    /* bind result variables */
    $stmt->bind_result($result);

    /* fetch value */
    $stmt->fetch();
    //mysqli_stmt_close($stmt);
    mysqli_close($con);

    printf("Response is: %s\n", $result);
}
?>