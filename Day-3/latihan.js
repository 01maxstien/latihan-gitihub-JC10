
for (var i=1;i<=5;i++){
    for (var j=i;j<=5;j++){
        document.write("_");
    }
    for (var k=1;k<=i;k++){
        document.write("*");
    }
    for (var l=1;l<=i-1;l++){
        document.write("*");
    }
    document.write("<br>");
}