function erase() {
    document.getElementById("myForm").reset();
}

function trapData(){
    //alert("THis is data trapping module");

    //  GET Data from Form into variables 
    let subject = document.getElementById("subject").value;
    let test1 = document.getElementById("test1").value;
    let test2 = document.getElementById("test2").value;
    let exams = document.getElementById("examscore").value;
    let remark;
    let grade;

    /*Add TEst1, Test2 and Test3 Together with Type Casting 
    from STRING DATATYPE to FLOAT DATATYP */
    let total = parseFloat(test1) + parseFloat(test2) + parseFloat(exams);


    gradeGuage();
    remarkModule();

   //promt(" Enter input or data dynamically")

    //GRADING MODULE
    /* GRADE POINT BOUNDARY DEFINITION
        A{70 - 100 } 
        B{60 - 69 }
        C{50 - 59 }
        D{46 - 50 }
        E{40 - 45 }
        F{0 - 39 }
    */

    // GRADING MODULE IMPLEMENTAION

    function gradeGuage(){
       
        //GRADE A
        if ((total >= 70 ) && (total <= 100)){
            grade = "A";
            //alert(grade);
        }

        //GRADE B
        else if ((total >= 60 ) && (total <= 69)){
            grade = "B";
            //alert(grade);
        }

        //GRADE C
        else if ((total >= 50 ) && (total <= 59)){
            grade = "C";
            //alert(grade);
        }

        //GRADE D
        else if ((total >= 46 ) && (total <= 50)){
            grade = "D";
            //alert(grade);
        }

        //GRADE E
        else if ((total >= 40 ) && (total <= 45)){
            grade = "E";
            //alert(grade);
        }

         //GRADE F
         if ((total >= 0 ) && (total <= 39)){
            grade = "F";
           // alert(grade);
        }

        else{
            alert("Out of Range");
        }


        return grade;
    }

    //REMARK
    function remarkModule(){
        
    switch(grade){
        case "A":
            remark="EXCELLENT";
        break;

        case "B":
            remark="VERY GOOD";
            
        break;

        case "C":
            remark="GOOD";
        break;

        case "D":
            remark="FAIR";
        break;

        case "E":
            remark="POOR";
        break;

        case "F":
            remark="VERY POOR";
        break;

        default:
            remark="OUT OF RANGE";
        break;
   
    }
return remark;

}

    





    // ADD Data to RECORD UPDATE SHEET
    document.getElementById("subjectt").innerHTML = subject;
    document.getElementById("test11").innerHTML = test1;
    document.getElementById("test22").innerHTML = test2;
    document.getElementById("examss").innerHTML = exams;
    document.getElementById("totall").innerHTML = total;
    document.getElementById("gradee").innerHTML = grade;
    document.getElementById("remarkk").innerHTML = remark;

    

}