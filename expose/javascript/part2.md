Question 1: Line 12 will print 3 because prices has three elements <br> 
Question 2: Line 13 will print 150 <br> 
Question 3: Line 14 will print 150 <br>
Question 4: The function returns a list of the prices with the discount applied to it <br>
Question 5: Since the variable i is declared with "let" in the for loop, we get a "ReferenceError" <br>
Question 6: Similar to question 5, we get a "ReferenceError" because we are out of scope <br>
Question 7: Line 13 prints 150 because finalPrice is still in scope of the function <br>
Question 8: Similar to question 4, the function returns a list of the prices with the discount applied to it <br>
Question 9: We get a ReferenceError because the variable i is out of scope <br>
Question 10: Line 11 prints "3" because length is equal to the three elemnts in 'prices' <br>
Question 11: The function returns a list of the prices with the discount applied to it <br>
Question 12A: To access the value of the name property "student.name;" <br>
Question 12B: To access the value of the Grad Year property "student['Grad Year'];" <br>
Question 12C: To call the function for the greeting property "student.greeting();" <br>
Question 12D: To access the name property "student['Favorite Teacher'].name;" <br>
Question 12E: To access index zero in the array of the courseLoad property "student.courseLoad[0];" <br>
Question 13A. '3' + 2 will output "32". because the + operator when used with a string will perform string concatenation <br>
Question 13B. '3' - 2 will output 1. It converts the string "3" to a number when using the - operator because it doesn't make sense to subtract in the context of strings. <br>
Question 13C. 3 + null will output 3. In arithmetic operations JavaScript treats null as 0. <br>
Question 13D. '3' + null will output "3null". JavaScript performs string concatenation, converting null to the string "null". <br>
Question 13E. true + 3 will output 4. JavaScript treats true as 1 in arithmetic operations. <br>
Question 13F. false + null will output 0. JavaScript treats both false and null as 0 in arithmetic operations <br>
Question 13G. '3' + undefined will output "3undefined". When adding undefined to a string, undefined gets converted to the string "undefined" and the operation becomes a string concatenation. <br>
Question 13H. '3' - undefined will output NaN. Subtracting undefined from anything results in NaN (Not-a-Number), since undefined can't be treated as a valid number  <br>
Question 14A. '2' > 1 will output true. JavaScript converts the string '2' to a number before comparison. <br>
Question 14B. '2' < '12' will output false. When comparing strings, JavaScript compares character codes and '2' has a higher character code than '1'. <br>
Question 14C. 2 == '2' will output true. The == operator performs type coercion and converts both operands to the same type before comparison. <br>
Question 14D. 2 === '2' will output false. The === operator checks for both value and type, which are not the same in this case. <br>
Question 14E. true == 2 will output false. true is converted to 1 during type coercion, and 1 is not equal to 2. <br>
Question 14F. true === Boolean(2) will output true. Boolean(2) is true, and since both are booleans, the === operator confirms they're the same. <br>
Question 15: The "==" operator will perform type coercion if the types of the two operands are not the same; it compares only the values after attempting to convert both sides to a common type. <br>
Question 15: The "===" operator does not perform type coercion; it compares both the value and the type of the two operands, which means that if the operands are of different types, it will always evaluate to false. <br>
Question 17:  <br>
1. modifyArray is called with an array [1,2,3] and a callback function doSomething. <br>
2. Inside modifyArray, a new empty array newArr is initialized. <br>
3. A for loop is set up to iterate over each element of the input array [1,2,3]. <br>
4. Inside the loop, the callback function (doSomething) is called with the current element of the array (array[i]), and the result is pushed into newArr. <br>
5. The doSomething function takes a number as an argument and returns that number multiplied by 2. <br>
6. Therefore, for each element in the input array [1,2,3], doSomething will return 2, 4, and 6 respectively. <br>
7. These returned values are pushed into newArr, so after the loop, newArr will contain [2, 4, 6]. <br>
8. Finally, newArr is returned from the modifyArray function. <br>
The final result of modifyArray([1,2,3], doSomething) is [2, 4, 6]. <br>
Question 19: The output console output would be as follows:  '1 4 3 2' because of the timeouts 
