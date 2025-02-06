//palindrome program

<html>
    <head></head>
<body>
    <script>
        function pallindrome(num){
            let numStr=num.toString();
            let reverse=numStr.split('').reverse()
            let numstr2=reverse.join()
            return numStr === numstr2;
        }
        console.log(pallindrome(121));
</script>
</body>


</html>


//so while doing pallindrome
//1st nned to convert the number to string as we cannot directly reverse a number
//so 1st conert num to string
//then useing split convert the string to array of characters
//as array of characters has the property to reverse not the string
//so then reverse array
//then use join , join is used to convert the array back to string

