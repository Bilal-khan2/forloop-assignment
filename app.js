// Q1
document.write("Question 1: - <br><br>")
var q1 = "hello World";
for (var i = 0; i < 5; i++) {
    document.write(q1 + "<br>");
}

// Q2
document.write(" <br>Question 2: - <br><br>")
for (var i = 1; i < 11; i++) {
    document.write(i + "<br>");
}

// Q2
document.write(" <br>Question 3: - <br><br>")
var num = prompt("enter number for which table is to be printed of: -")
for (var i = 1; i < 11; i++) {
    document.write(num + " * " + i + " = " + num * i + "<br>");
}

// Q3
document.write(" <br>Question 4: - <br><br>")
var num = prompt("enter how many times you want table to be printed: -")
for (var i = 1; i <= num; i++) {
    document.write("2" + " * " + i + " = " + 2 * i + "<br>");
}
// Q4
document.write(" <br>Question 5: - <br><br>")
A = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei']
for (var i = 1; i <= A.length; i++) {
    document.write(A[i] + "<br>");
}
// Q5
document.write(" <br>Question 6: - <br><br>")
fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");

}
document.write("<br>");
for (var i = 0; i < fruits.length; i++) {

    document.write(fruits[i] + " is at index " + i + "<br>");

}
// Q6
document.write(" <br>Question 6: - <br><br>")
var s = prompt("enter size of array: - ")
var u = Number(s);
var n = [];
for (var i = 0; i < u; i++) {
    var a = prompt("enter value");
    n.push(a);
}
document.write("<br>");
for (var i = 0; i < u; i++) {

    document.write(n[i] + "<br>");

}
// Q7
document.write(" <br>Question 7: - <br><br>")
document.write("Counting : -  ");
for (var i = 0; i <= 15; i++) {
    document.write(i + " ");
}
document.write("<br>");
document.write("rversing: - ");
for (var i = 15; i >= 1; i--) {
    document.write(i + " ");
}
document.write("<br>");
document.write("even: - ");
for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        document.write(i + " ");
    }
}
document.write("<br>");
document.write("Odd: - ");
for (var i = 0; i <= 15; i++) {
    if (i % 2 !== 0) {
        document.write(i + " ");
    }
}
document.write("<br>");
document.write("even: - ");
for (var i = 1; i <= 15; i++) {
    if (i % 2 === 0) {
        document.write(i + "k ");
    }
}
// Q8
document.write(" <br>Question 8: - <br><br>")
A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
for (var i = 0; i < A.length; i++) {
    document.write(A[i] + "   ");
}
var find = prompt("enter item to be found");
var notfound = false;
document.write("<br>");
for (var i = 0; i < A.length; i++) {
    if (find === A[i]) {
        document.write(A[i] + "  found at index  " + i);
        notfound = true;
    }

}
document.write("<br>");
if (notfound === false) {
    document.write("not found ");
}
document.write("<br>");
// Q9
document.write(" <br>Question 9: - <br><br>")
 var A = [24, 53, 78, 91, 12]
for (var i = 0; i < A.length - 1; i++) {
    if (A[i] < A[i + 1]) {
        var largest = A[i + 1];
    }

}
document.write("Largest element is: - " + largest);

// Q10
document.write(" <br>Question 10: - <br><br>")
A = [24, 53, 78, 91, 12]
for (var i = 0; i < A.length - 1; i++) {
    if (A[i] > A[i + 1]) {
        var smallest = A[i + 1];
    }

}
document.write("Smallest element is: - " + smallest);
// //Q12
document.write(" <br>Question 12: - <br><br>")
for(var i = 5; i <= 100; i+=5)
{
    document.write(i+", ");
}

//Q13
document.write(" <br>Question 13: - <br><br>")
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

document.write("<table border='1'><tr><th>Students</th><th>Scores</th>");
for (var i = 0; i < students.length; i++) {
    document.write("<tr><td>" + students[i] + "</td><td>" + scores[i] + "</td></tr>");
}

// Q14
document.write(" <br>Question 14: - <br><br>")
var scores = [58, 73, 89, 90];
var stopscore = prompt("Enter value to stop at")
for (var i = 0; i <= scores.length; i++) {
     document.write(scores[i]+ " , ");
    if (stopscore == scores[i]) 
    {
       break;
           
     }
    }


//Q15
document.write(" <br>Question 15: - <br><br>")
A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length; j++) {
        document.write(A[i][j] + " ")
    }
    document.write("<br>")
}

//Q16
document.write(" <br>Question 16 :- <br><br>")
var n = prompt("enter number:- ")
for (var i = n; i > 0; i -= 0.5) {
    document.write([i] + " , ");
}

//Q17
document.write(" <br>Question 17 :- <br><br>")
var n = prompt("enter end number: -")
for (var i = 0; i <= n; i++) {
    if (i % 2 === 0) {
        document.write(i + " is even")
    }
    else {
        document.write(i + " is odd")
    }
    document.write(" <br>")
}


// Q18
document.write(" <br>Question 18 :- <br><br>")
 var Product=1;
for (var i = 1; i < 8; i += 2) {
   
         Product = Product * i;
    

}
document.write("the product =" + Product);
//Q19
document.write(" <br>Question 19 :- <br><br>")
for (var i = 7; i > 0; i--) {
    for (var j = i; j > 0; j--) {
        document.write("*")
    }
    document.write("<br>");

}

//Q20
document.write(" <br>Question 20(a) :- <br><br>")
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        document.write("*")
    }
    document.write("<br>");

}
document.write(" <br>Question 20(b) :- <br><br>")
for (var i = 0; i < 5; i++) {
    for (var j = 0; j <= i; j++) {
        document.write("*")
    }
    document.write("<br>");

}

document.write(" <br>Question 20(c) :- <br><br>")
for (var i = 7; i > 0; i--) {
    for (var j = i; j > 0; j--) {
        document.write("*")
    }
    document.write("<br>");

}