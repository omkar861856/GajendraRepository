let securityQuestions = [
    {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
    ]
    function chksecurityQuestions(securityQuestions,question, answer) {
    // your code here

    const questionObj = securityQuestions.filter((que, index, arr)=>{
        return que.question === question;
    })

    console.log(questionObj);

    if(questionObj.length >0){
        return questionObj[0].expectedAnswer === answer;
    }else{
        return console.log("no such question in securityQuestions")
    }

    // < > <= >= == ===

    return 
    } // output either true or false

    //Test case1:
    var ques = "What was your first pet’s name?";
    var ans  =  "FlufferNutter";
    var status = chksecurityQuestions(securityQuestions, ques, ans);
    console.log(status); // true
    
    //Test case2:
    var ques = "What was your first pet’s name?";
    var ans  =  "DufferNutter";
    var status = chksecurityQuestions(securityQuestions, ques, ans);
    console.log(status); // flase
    