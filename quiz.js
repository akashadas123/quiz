function check(){
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var result=document.getElementById("result");
    var quiz=document.getElementById("quiz");
    
    if(q1=="2") {c++}
    if(q2=="3") {c++}
    if(q3=="2") {c++}
    if(q4=="3") {c++}
    if(q5=="4") {c++}
    
    quiz.style.display="none";
    
    if (c<=3) {
    	result.textContent="Your result is ${c}. It is not so good. Please try to improve.";
    } else {
    	result.textContent="Your result is ${c}. IT is awesome. Keep it up!.";
    }

}