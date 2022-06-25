function b(){
    x=localStorage.getItem("pls");
    c=localStorage.getItem("pls1");
    s1=0;
    s2=0;
    document.getElementById("player1_name").innerHTML=x+":";
    document.getElementById("player2_name").innerHTML=c+":";
    document.getElementById("player1_score").innerHTML=s1;
    document.getElementById("player2_score").innerHTML=s2;
    document.getElementById("q").innerHTML="Question turn - "+x;
    document.getElementById("qt").innerHTML="Answer turn - "+c;
    }
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    question_number="<h4>"+number1+" X "+number2+"</h4>";
    input_box="<br>Answer : <input type='text'id='input_check_box'>";
    check_button="<br><br><button class='btn btn-primary' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(answer_turn == actual_answer){
        if(answer_turn == "player1"){
                    update_player1_score +1;
        document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else{
            update_player2_score +1;
            document.getElementById("player2_score").innerHTML = update_player2_score;    
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2"
        document.getElementById("q").innerHTML = "Question Turn - " + player2_name ;
    }
    else{
        question_turn = "player1"
        document.getElementById("qt").innerHTML = "Question Turn - " + player1_name ;
    }
}