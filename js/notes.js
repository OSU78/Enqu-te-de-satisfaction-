function page1Verif(){

    var total=0;
    var form=document.forms["page1"].elements;

    //Condition
    var question1=(form['eval'].value==4 || form['eval'].value==3) ? 2 
                 :(form['eval'].value==2 || form['eval'].value==1) ? 1 
                 :(form['eval'].value==0) ? 0 : 0 ;
               
    var question2=(form['selectNbrTemps'].selectedIndex==4 || form['selectNbrTemps'].selectedIndex==3) ? 2
                :(form['selectNbrTemps'].selectedIndex==2 || form['selectNbrTemps'].selectedIndex==1) ? 1
                :(form['selectNbrTemps'].selectedIndex==0) ? 0 : 0 ;
    
    var question3=(form['nonpass4'].checked ==true || form['nonpass3'].checked==true) ? 2
                :(form['nonpass2'].checked==true || form['nonpass1'].checked==true) ? 1
                :(form['pass'].checked==true) ? 0 : 0 ;

        
    var question4=(form['selectNbrSceance'].selectedIndex==3 || form['selectNbrSceance'].selectedIndex==2) ? 2
                :(form['selectNbrSceance'].selectedIndex==1) ? 1
                :(form['selectNbrSceance'].selectedIndex==0) ? 0 : 0 ;
                
                total=question1+question2+question3+question4;

                if(total==0){
                    total="0"
                }
              console.log("note question 1 : "+question1);
                console.log("Page 1 ->note question 2 : "+question2);
                console.log("Page 1 ->note question 3 : "+question3);
                console.log("Page 1 ->note question 4 : "+question4);

               createCookie("Note",total,5);
                
    


}


function page2Verif(){
    var note1 = parseInt(lireCookie("Note"));
    var form=document.forms["page2"].elements;
    var note2=0;
    var point=0;

    var question1=(form['freq'].selectedIndex==0 || form['freq'].selectedIndex==1) ? 2
                :(form['freq'].selectedIndex==2 || form['freq'].selectedIndex==3) ? 1
                :(form['freq'].selectedIndex==4) ? 0 : 0 ;

    var question2=(form['qualite'].checked ==true && form['ergonomie'].checked==true && form['design'].checked==true) ? 2
                :(form['qualite'].checked==true || form['ergonomie'].checked==true || form['design'].checked==true) ? 1
                :(form['qualite'].checked ==false && form['ergonomie'].checked==false && form['design'].checked==false) ? 0 : 0 ;

    var question3=(form['eval'].value==4 || form['eval'].value==3) ? 2 
                 :(form['eval'].value==2 || form['eval'].value==1) ? 1 
                 :(form['eval'].value==0) ? 0 : 0 ;

    var question4=(form['oui'].checked ==true) ? 2
                :(form['moyen'].checked==true) ? 1
                :(form['non'].checked==true) ? 0 : 0 ;

    var question5=(form['visite'].value==4 || form['visite'].value==3) ? 2 
                 :(form['visite'].value==2 || form['visite'].value==1) ? 1 
                 :(form['visite'].value==0) ? 0 : 0 ;

    note2= note1 +question1+question2+question3+question4+question5 ;

    console.log("PAGE 2 ->note question 1 : "+question1);
    console.log("PAGE 2 ->note question 2 : "+question2);
    console.log("PAGE 2 ->note question 3 : "+question3);
    console.log("PAGE 2 ->note question 4 : "+question4);
    console.log("PAGE 2 ->note question 5 : "+question5);
    deleteCookie("Note");
    createCookie("Note", note2, 5);
}



function page3Verif(){
    var note1 = parseInt(lireCookie("Note"));
    var note2;
    var textarea = document.querySelector("#textarea").value;
    var point;
    if(textarea.length < 34 ){
        point=2 ;
    }
    else if(textarea.length >= 34 && textarea.length <=150 ){
        point=1;
    }
    else if(textarea.length >150){
        point=0;
    }
    console.log("Note1 ="+note1)
    note2= note1 + point ;	
    console.log("Note2 final ="+note2)
	deleteCookie("Note");
	createCookie("Note", note2, 5);

}