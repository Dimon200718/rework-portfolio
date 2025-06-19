let angle = 0
function change_theme(){
    angle += 180
    let txt_wt = document.querySelectorAll('.txt_white')
    let txt_wt2 = document.querySelectorAll('.txt_white2')
    let txt_ltbl = document.querySelectorAll('.txt_lightblue')
    let bl_wt = document.querySelectorAll('.bl_white')
    if(angle == 360){
        angle = 0
        txt_wt.forEach((text) =>{
            text.style.color = '#696984'
        })
        txt_wt2.forEach((text) =>{
            text.style.color = 'black'
        })
        txt_ltbl.forEach((text) =>{
            text.style.color = '#2F327D'
        })
        bl_wt.forEach((text) =>{
            text.style.color = 'black'
        })
        document.querySelector('.box').style.background = 'white'
    }
    document.querySelector('.nav_img').style.transform = `rotate(${angle}deg)`
    if(angle == 180){
        document.querySelector('.box').style.background = 'rgb(31, 31, 31)'
        
        txt_wt.forEach((text) =>{
            text.style.color = 'white'
        })
        txt_wt2.forEach((text) =>{
            text.style.color = 'white'
        })
        txt_ltbl.forEach((text) =>{
            text.style.color = '#24afdd'
        })
        bl_wt.forEach((text) =>{
            text.style.color = 'white'
        })
    }
    

}

//

let selectedButton = 'test_btn_sel1';

function selection(buttonId) {
    if (selectedButton) {
        document.getElementById(selectedButton).classList.remove('selected');
    }
    selectedButton = buttonId;
    document.getElementById(buttonId).classList.add('selected');
}

document.getElementById('ques_bl1').style.display = 'flex'

function obj_quiz(){
    document.getElementById('knowlage_ps').innerHTML = 'Write under the image what is it object.'
    document.getElementById('ques_bl1').style.display = 'flex'
    document.getElementById('ques_bl2').style.display = 'none'
    document.getElementById('ques_bl3').style.display = 'none'
    document.getElementById('ques_bl4').style.display = 'none'
}

function translate1(){
    document.getElementById('knowlage_ps').innerHTML = 'Write translation of the words written below.'
    document.getElementById('ques_bl1').style.display = 'none'
    document.getElementById('ques_bl2').style.display = 'flex'
    document.getElementById('ques_bl3').style.display = 'none'
    document.getElementById('ques_bl4').style.display = 'none'
}

function listening(){
    document.getElementById('knowlage_ps').innerHTML = 'listen and write down what you heard'
    document.getElementById('ques_bl1').style.display = 'none'
    document.getElementById('ques_bl2').style.display = 'none'
    document.getElementById('ques_bl4').style.display = 'none'
    document.getElementById('ques_bl3').style.display = 'flex'
}
function reading(){
    document.getElementById('knowlage_ps').innerHTML = 'Read the text then answer the questions'
    document.getElementById('ques_bl1').style.display = 'none'
    document.getElementById('ques_bl2').style.display = 'none'
    document.getElementById('ques_bl3').style.display = 'none'
    document.getElementById('ques_bl4').style.display = 'flex'
}

function check_answers(){
    if(document.getElementById('ques_bl1').style.display == 'flex'){
        var score1 = 0
        var correctAnswers1 = ['apple','fridge','dog','car','cake','human','orange','russia','keyboard','chess','salt'];
        for(var i_1 = 1; i_1 <= 11; i_1++) {
            var input1 = document.getElementById(`input${i_1}`); 
            var userAnswer1 = input1.value.trim().toLowerCase(); 

            if(userAnswer1 == correctAnswers1[i_1-1]) { 
                score1 += 1;
            }
        }
        var finalScore1 = Math.round(score1/1);
        Swal.fire({
            title: "Good job!",
            text: 'Your final score: ' + finalScore1 + '/11',
            icon: "success"
          });
    }
    if(document.getElementById('ques_bl2').style.display == 'flex'){
        var score2 = 0
        var correctAnswers2 = ['apple','human','world','work','cow','fridge','speed','tv','painter','army','sun','water','scissors','book','teacher'];
        for(var i_2 = 12; i_2 <= 26; i_2++) {
            var input2 = document.getElementById(`input${i_2}`); 
            var userAnswer2 = input2.value.trim().toLowerCase(); 

            if(userAnswer2 == correctAnswers2[i_2-12]) { 
                score2 += 1;
            }
        }
        var finalScore2 = Math.round(score2/1);
        Swal.fire({
            title: "Good job!",
            text: 'Your final score: ' + finalScore2 + '/15',
            icon: "success"
          });
    }
    if(document.getElementById('ques_bl3').style.display == 'flex' ){
        let score3 = 0
        let correctAnswers3 = ["nigga", "banana", "it", "channel", "pasta", "fringe", "jumper", "mobile", "garage", "underground"]
        for(i_3 = 27; i_3 <= 36; i_3++){
            let input3 = document.getElementById(`input${i_3}`)
            let userAnswer3 = input3.value.trim().toLowerCase()

            if(userAnswer3 == correctAnswers3[i_3-27]){
                score3 += 1
            }
        }
        Swal.fire({
            title: "Good job!",
            text: 'Your final score: ' + score3 + '/10',
            icon: "success"
          });
    }
    if(document.getElementById('ques_bl4').style.display == 'flex' ){
        let score4 = 0
        for(let i_4 = 1; i_4 <= 16; i_4++){
            if(document.getElementById(`radio${i_4}`).checked && document.getElementById(`radio${i_4}`).value == 1){
                score4++
            }
        }
        Swal.fire({
            title: "Good job!",
            text: 'Your final score: ' + score4 + '/4',
            icon: "success"
          });
    }
}

//


//

let show_block1 = document.querySelector("#hidden_first")
let show_block2 = document.querySelector("#hidden_second")
let show_block3 = document.querySelector("#hidden_third")
let show_btn = document.querySelector("#show_btn")
let show_count = 0

function show_blocks(){
    show_count++

    if(show_count == 1){
        show_block1.style.display = "block"
        show_block2.style.display = "block"
        show_block3.style.display = "block"
        show_btn.innerHTML = "CLOSE"
    }
    if(show_count == 2){
        show_count = 0
        show_block1.style.display = "none"
        show_block2.style.display = "none"
        show_block3.style.display = "none"
        show_btn.innerHTML = "SHOW ALL"
    }
}

//
let rotate_count = 0;
let rotate_count2 = 0;
let rotate_count3 = 0;
let rotate_count4 = 0;
let rotate_count5 = 0;

let revstik = document.querySelector("#revstick");
let method_text1 = document.querySelector("#method_text1");
let metod_headline1 = document.querySelector("#metod_headline1");
let revstik2 = document.querySelector("#revstick2");
let method_text2 = document.querySelector("#method_text2");
let metod_headline2 = document.querySelector("#metod_headline2");
let revstik3 = document.querySelector("#revstick3");
let method_text3 = document.querySelector("#method_text3");
let metod_headline3 = document.querySelector("#metod_headline3");
let revstik4 = document.querySelector("#revstick4");
let method_text4 = document.querySelector("#method_text4");
let metod_headline4 = document.querySelector("#metod_headline4");
let revstik5 = document.querySelector("#revstick5");
let method_text5 = document.querySelector("#method_text5");
let metod_headline5 = document.querySelector("#metod_headline5");

function closeAllExcept(except) {
    if (except !== 1) {
        rotate_count = 0;
        revstick.style.rotate = "90deg";
        method_text1.innerHTML = "";
        metod_headline1.innerHTML = "Latest Methods";
    }
    if (except !== 2) {
        rotate_count2 = 0;
        revstik2.style.rotate = "90deg";
        method_text2.innerHTML = "";
        metod_headline2.innerHTML = "Latest Methods";
    }
    if (except !== 3) {
        rotate_count3 = 0;
        revstik3.style.rotate = "90deg";
        method_text3.innerHTML = "";
        metod_headline3.innerHTML = "Latest Methods";
    }
    if (except !== 4) {
        rotate_count4 = 0;
        revstik4.style.rotate = "90deg";
        method_text4.innerHTML = "";
        metod_headline4.innerHTML = "Latest Methods";
    }
    if (except !== 5) {
        rotate_count5 = 0;
        revstik5.style.rotate = "90deg";
        method_text5.innerHTML = "";
        metod_headline5.innerHTML = "Latest Methods";
    }
}

function metod1() {
    closeAllExcept(1);
    rotate_count++;
    if (rotate_count == 1) {
        revstick.style.rotate = "0deg";
        method_text1.innerHTML = "Programming requires highly qualified professionals who possess both technical expertise and problem-solving skills.";
        metod_headline1.innerHTML = "Highly Qualified";
    } else {
        rotate_count = 0;
        revstick.style.rotate = "90deg";
        method_text1.innerHTML = "";
        metod_headline1.innerHTML = "Latest Methods";
    }
}

function metod2() {
    closeAllExcept(2);
    rotate_count2++;
    if (rotate_count2 == 1) {
        revstick2.style.rotate = "0deg";
        method_text2.innerHTML = "Collaboration is key in programming, as developers often work in teams to create robust software.";
        metod_headline2.innerHTML = "Collaboration";
    } else {
        rotate_count2 = 0;
        revstick2.style.rotate = "90deg";
        method_text2.innerHTML = "";
        metod_headline2.innerHTML = "Latest Methods";
    }
}

function metod3() {
    closeAllExcept(3);
    rotate_count3++;
    if (rotate_count3 == 1) {
        revstick3.style.rotate = "0deg";
        method_text3.innerHTML = "It enhances logical thinking by breaking down complex tasks into simpler, manageable parts.";
        metod_headline3.innerHTML = "Logic";
    } else {
        rotate_count3 = 0;
        revstick3.style.rotate = "90deg";
        method_text3.innerHTML = "";
        metod_headline3.innerHTML = "Latest Methods";
    }
}

function metod4() {
    closeAllExcept(4);
    rotate_count4++;
    if (rotate_count4 == 1) {
        revstick4.style.rotate = "0deg";
        method_text4.innerHTML = "Innovative solutions and cutting-edge technologies often stem from effective programming.";
        metod_headline4.innerHTML = "Innovation";
    } else {
        rotate_count4 = 0;
        revstick4.style.rotate = "90deg";
        method_text4.innerHTML = "";
        metod_headline4.innerHTML = "Latest Methods";
    }
}

function metod5() {
    closeAllExcept(5);
    rotate_count5++;
    if (rotate_count5 == 1) {
        revstick5.style.rotate = "0deg";
        method_text5.innerHTML = "The field of programming requires continuous learning to keep up with ever-evolving technologies and methodologies.";
        metod_headline5.innerHTML = "Learning";
    } else {
        rotate_count5 = 0;
        revstick5.style.rotate = "90deg";
        method_text5.innerHTML = "";
        metod_headline5.innerHTML = "Latest Methods";
    }
}