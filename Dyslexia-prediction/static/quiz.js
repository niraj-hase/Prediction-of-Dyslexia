console.log("Welcome to the Quiz!")
let lang_vocab=0, memory=0, visual=0, audio=0;
let start = Date.now(), end, diff, speed_score;
let ans=[], arr=[];
for(let i=1; i<=50; i++)
    ans[i]=0;

function q1score() {
    if (document.getElementById('q1a').checked)
        ans[1] = document.getElementById('q1a').value;
        
    else if (document.getElementById('q1b').checked)
        ans[1] = document.getElementById('q1b').value;
}

function q2score() {
    if (document.getElementById('q2a').checked)
        ans[2] = document.getElementById('q2a').value;

    else if (document.getElementById('q2b').checked)
        ans[2] = document.getElementById('q2b').value;

    else if (document.getElementById('q2c').checked)
        ans[2] = document.getElementById('q2c').value;
    
        else if (document.getElementById('q2d').checked)
        ans[2] = document.getElementById('q2d').value;
}

function q3score() {
    if (document.getElementById('q3a').checked)
        ans[3] = document.getElementById('q3a').value;

    else if (document.getElementById('q3b').checked)
        ans[3] = document.getElementById('q3b').value;
}

function q4score() {
    if (document.getElementById('q4a').checked)
        ans[4] = document.getElementById('q4a').value;

    else if (document.getElementById('q4b').checked)
        ans[4] = document.getElementById('q4b').value5
}

function q5score() {
    if (document.getElementById('q5a').checked)
        ans[5] = document.getElementById('q5a').value;

    else if (document.getElementById('q5b').checked)
        ans[5] = document.getElementById('q5b').value;

    else if (document.getElementById('q5c').checked)
        ans[5] = document.getElementById('q5c').value;
}

function q6score() {
    if (document.getElementById('q6a').checked)
        ans[6] = document.getElementById('q6a').value;

    else if (document.getElementById('q6b').checked)
        ans[6] = document.getElementById('q6b').value;
}

function q7score() {
    if (document.getElementById('q7a').checked)
        ans[7] = document.getElementById('q7a').value;

    else if (document.getElementById('q7b').checked)
        ans[7] = document.getElementById('q7b').value;
}

function q8score() {
    if (document.getElementById('q8a').checked)
        ans[8] = document.getElementById('q8a').value;

    else if (document.getElementById('q8b').checked)
        ans[8] = document.getElementById('q8b').value;
}

function q9score() {
    if (document.getElementById('q9a').checked)
        ans[9] = document.getElementById('q9a').value;

    else if (document.getElementById('q9b').checked)
        ans[9] = document.getElementById('q9b').value;
}

function q10score() {
    if (document.getElementById('q10a').checked)
        ans[10] = document.getElementById('q10a').value;

    else if (document.getElementById('q10b').checked)
        ans[10] = document.getElementById('q10b').value;

    else if (document.getElementById('q10c').checked)
        ans[10] = document.get1ElementById('q10c').value;

    else if (document.getElementById('q10d').checked)
        ans[10] = document.get1ElementById('q10d').value;
}
function q11score() {
    if (document.getElementById('q11a').checked)
        ans[11] = document.getElementById('q11a').value;

    else if (document.getElementById('q11b').checked)
        ans[11] = document.getElementById('q11b').value;
}
function q12score() {
    if (document.getElementById('q12a').checked)
        ans[12] = document.getElementById('q12a').value;

    else if (document.getElementById('q12b').checked)
        ans[12] = document.getElementById('q12b').value;
}
function q13score() {
    if (document.getElementById('q13a').checked)
        ans[13] = document.getElementById('q13a').value;

    else if (document.getElementById('q13b').checked)
        ans[13] = document.getElementById('q13b').value;
}
function q14score() {
    if (document.getElementById('q14a').checked)
        ans[14] = document.getElementById('q14a').value;

    else if (document.getElementById('q14b').checked)
        ans[14] = document.getElementById('q14b').value;

   
}


function q15score() {
    if (document.getElementById('q15a').checked)
        ans[15] = document.getElementById('q15a').value;

    else if (document.getElementById('q15b').checked)
        ans[15] = document.getElementById('q15b').value;

    else if (document.getElementById('q15c').checked)
        ans[15] = document.getElementById('q15c').value;
    
        else if (document.getElementById('q15d').checked)
        ans[15] = document.getElementById('q15d').value;
}
function q16score() {
    if (document.getElementById('q16a').checked)
        ans[16] = document.getElementById('q16a').value;

    else if (document.getElementById('q16b').checked)
        ans[16] = document.getElementById('q16b').value;
}
function q17score() {
    if (document.getElementById('q17a').checked)
        ans[17] = document.getElementById('q17a').value;

    else if (document.getElementById('q17b').checked)
        ans[17] = document.getElementById('q17b').value;

    else if (document.getElementById('q17c').checked)
        ans[17] = document.getElementById('q17c').value;
}
function q18score() {
    if (document.getElementById('q18a').checked)
        ans[18] = document.getElementById('q18a').value;

    else if (document.getElementById('q18b').checked)
        ans[18] = document.getElementById('q18b').value;
}
function q19score() {
    if (document.getElementById('q19a').checked)
        ans[19] = document.getElementById('q19a').value;

    else if (document.getElementById('q19b').checked)
        ans[19] = document.getElementById('q19b').value;

    else if (document.getElementById('q19c').checked)
        ans[19] = document.getElementById('q19c').value;
    
        else if (document.getElementById('q19d').checked)
        ans[19] = document.getElementById('q19d').value;
}

function q20score() {
    if (document.getElementById('q20a').checked)
        ans[20] = document.getElementById('q20a').value;

    else if (document.getElementById('q20b').checked)
        ans[20] = document.getElementById('q20b').value;

    else if (document.getElementById('q20c').checked)
        ans[20] = document.get1ElementById('q20c').value;

    else if (document.getElementById('q20d').checked)
        ans[20] = document.get1ElementById('q20d').value;
}
function q21score() {
    if (document.getElementById('q21a').checked)
        ans[21] = document.getElementById('q21a').value;

    else if (document.getElementById('q21b').checked)
        ans[21] = document.getElementById('q21b').value;

    else if (document.getElementById('q21c').checked)
        ans[21] = document.getElementById('q21c').value;
}
function q22score() {
    if (document.getElementById('q22a').checked)
        ans[22] = document.getElementById('q22a').value;

    else if (document.getElementById('q22b').checked)
        ans[22] = document.getElementById('q22b').value;
}
function q23score() {
    if (document.getElementById('q23a').checked)
        ans[23] = document.getElementById('q23a').value;

    else if (document.getElementById('q23b').checked)
        ans[23] = document.getElementById('q23b').value;
}

function q24score() {
    if (document.getElementById('q24a').checked)
        ans[24] = document.getElementById('q24a').value;

    else if (document.getElementById('q24b').checked)
        ans[24] = document.getElementById('q24b').value;

    else if (document.getElementById('q24c').checked)
        ans[24] = document.getElementById('q24c').value;
    
        else if (document.getElementById('q24d').checked)
        ans[24] = document.getElementById('q24d').value;
}
function q25score() {
    if (document.getElementById('q25a').checked)
        ans[25] = document.getElementById('q25a').value;

    else if (document.getElementById('q25b').checked)
        ans[25] = document.getElementById('q25b').value;

    else if (document.getElementById('q25c').checked)
        ans[25] = document.get1ElementById('q25c').value;

    else if (document.getElementById('q25d').checked)
        ans[25] = document.get1ElementById('q25d').value;
}
function q26score() {
    if (document.getElementById('q26a').checked)
        ans[26] = document.getElementById('q26a').value;

    else if (document.getElementById('q26b').checked)
        ans[26] = document.getElementById('q26b').value;
}

function q27score() {
    if (document.getElementById('q27a').checked)
        ans[27] = document.getElementById('q27a').value;

    else if (document.getElementById('q27b').checked)
        ans[27] = document.getElementById('q27b').value;

    else if (document.getElementById('q27c').checked)
        ans[27] = document.getElementById('q27c').value;
    
        else if (document.getElementById('q27d').checked)
        ans[27] = document.getElementById('q27d').value;
}
function q28score() {
    if (document.getElementById('q28a').checked)
        ans[28] = document.getElementById('q28a').value;

    else if (document.getElementById('q28b').checked)
        ans[28] = document.getElementById('q28b').value;

  
}
function q29score() {
    if (document.getElementById('q29a').checked)
        ans[29] = document.getElementById('q29a').value;

    else if (document.getElementById('q29b').checked)
        ans[29] = document.getElementById('q29b').value;
}
function q30score() {
    if (document.getElementById('q30a').checked)
        ans[30] = document.getElementById('q30a').value;

    else if (document.getElementById('q30b').checked)
        ans[30] = document.getElementById('q30b').value;

    else if (document.getElementById('q30c').checked)
        ans[30] = document.get1ElementById('q30c').value;

    else if (document.getElementById('q30d').checked)
        ans[30] = document.get1ElementById('q30d').value;
}
function q31score() {
    if (document.getElementById('q31a').checked)
        ans[31] = document.getElementById('q31a').value;

    else if (document.getElementById('q31b').checked)
        ans[31] = document.getElementById('q31b').value;
}
function q32score() {
    if (document.getElementById('q32a').checked)
        ans[32] = document.getElementById('q32a').value;

    else if (document.getElementById('q32b').checked)
        ans[32] = document.getElementById('q32b').value;

    else if (document.getElementById('q32c').checked)
        ans[32] = document.getElementById('q32c').value;
    
        else if (document.getElementById('q32d').checked)
        ans[32] = document.getElementById('q32d').value;
}
function q33score() {
    if (document.getElementById('q33a').checked)
        ans[33] = document.getElementById('q33a').value;

    else if (document.getElementById('q33b').checked)
        ans[33] = document.getElementById('q33b').value;
}
function q34score() {
    if (document.getElementById('q34a').checked)
        ans[34] = document.getElementById('q34a').value;

    else if (document.getElementById('q34b').checked)
        ans[34] = document.getElementById('q34b').value;
}


function q35score() {
    if (document.getElementById('q35a').checked)
        ans[35] = document.getElementById('q35a').value;

    else if (document.getElementById('q35b').checked)
        ans[35] = document.getElementById('q35b').value;
}
function q36score() {
    if (document.getElementById('q36a').checked)
        ans[36] = document.getElementById('q36a').value;

    else if (document.getElementById('q36b').checked)
        ans[36] = document.getElementById('q36b').value;

    else if (document.getElementById('q36c').checked)
        ans[36] = document.getElementById('q36c').value;
}
function q37score() {
    if (document.getElementById('q37a').checked)
        ans[37] = document.getElementById('q37a').value;

    else if (document.getElementById('q37b').checked)
        ans[37] = document.getElementById('q37b').value;
}
function q38score() {
    if (document.getElementById('q38a').checked)
        ans[38] = document.getElementById('q38a').value;

    else if (document.getElementById('q38b').checked)
        ans[38] = document.getElementById('q38b').value;
}
function q39score() {
    if (document.getElementById('q39a').checked)
        ans[39] = document.getElementById('q39a').value;

    else if (document.getElementById('q39b').checked)
        ans[39] = document.getElementById('q39b').value;

    else if (document.getElementById('q39c').checked)
        ans[39] = document.getElementById('q39c').value;
    
        else if (document.getElementById('q39d').checked)
        ans[39] = document.getElementById('q39d').value;
}
function q40score() {
    if (document.getElementById('q40a').checked)
        ans[40] = document.getElementById('q40a').value;

    else if (document.getElementById('q40b').checked)
        ans[40] = document.getElementById('q40b').value;

    else if (document.getElementById('q40c').checked)
        ans[40] = document.get1ElementById('q40c').value;

    else if (document.getElementById('q40d').checked)
        ans[40] = document.get1ElementById('q40d').value;
}
function q41score() {
    if (document.getElementById('q41a').checked)
        ans[41] = document.getElementById('q41a').value;

    else if (document.getElementById('q41b').checked)
        ans[41] = document.getElementById('q41b').value;
}
function q42score() {
    if (document.getElementById('q42a').checked)
        ans[42] = document.getElementById('q42a').value;

    else if (document.getElementById('q42b').checked)
        ans[42] = document.getElementById('q42b').value;

    else if (document.getElementById('q42c').checked)
        ans[42] = document.getElementById('q42c').value;
    
        else if (document.getElementById('q42d').checked)
        ans[42] = document.getElementById('q42d').value;
}
function q43score() {
    if (document.getElementById('q43a').checked)
        ans[43] = document.getElementById('q43a').value;

    else if (document.getElementById('q43b').checked)
        ans[43] = document.getElementById('q43b').value;
}
function q44score() {
    if (document.getElementById('q44a').checked)
        ans[44] = document.getElementById('q44a').value;

    else if (document.getElementById('q44b').checked)
        ans[44] = document.getElementById('q44b').value;
}

function q45score() {
    if (document.getElementById('q45a').checked)
        ans[45] = document.getElementById('q45a').value;

    else if (document.getElementById('q45b').checked)
        ans[45] = document.getElementById('q45b').value;

    else if (document.getElementById('q45c').checked)
        ans[45] = document.getElementById('q45c').value;
}
function q46score() {
    if (document.getElementById('q46a').checked)
        ans[46] = document.getElementById('q46a').value;

    else if (document.getElementById('q46b').checked)
        ans[46] = document.getElementById('q46b').value;
}
function q47score() {
    if (document.getElementById('q47a').checked)
        ans[47] = document.getElementById('q47a').value;

    else if (document.getElementById('q47b').checked)
        ans[47] = document.getElementById('q47b').value;
}
function q49score() {
    if (document.getElementById('q49a').checked)
        ans[49] = document.getElementById('q49a').value;

    else if (document.getElementById('q49b').checked)
        ans[49] = document.getElementById('q49b').value;

    else if (document.getElementById('q49c').checked)
        ans[49] = document.getElementById('q49c').value;
    
        else if (document.getElementById('q49d').checked)
        ans[49] = document.getElementById('q49d').value;
}


function q50score() {
    if (document.getElementById('q50a').checked)
        ans[50] = document.getElementById('q50a').value;

    else if (document.getElementById('q50b').checked)
        ans[50] = document.getElementById('q50b').value;
}

function submitscore() {

    diff=0;
    speed_score=0;
    end = Date.now();
    diff =(end - start)/1000;
    
    if(diff>40 && diff<=60)
        speed_score=1;
    else if(diff>60 && diff<=70)
        speed_score=0.9;
    else if(diff>70 && diff<=80)
        speed_score=0.8;
    else if(diff>80 && diff<=90)
        speed_score=0.7;
    else if(diff>90 && diff<=100)
        speed_score=0.6;
    else if(diff>100 && diff<=110)
        speed_score=0.5;
    else if(diff>110 && diff<=120)
        speed_score=0.4;
    else if(diff>120 && diff<=150)
        speed_score=0.3;
    else if(diff>150 && diff<=180)
        speed_score=0.2;
    else if(diff>180 && diff<=200)
        speed_score=0.1;
    
    for(var i=0; i<=50; i++)
        arr[i]=Number(ans[i]);

    lang_vocab = (arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[8]+arr[11]+arr[12]
        +arr[13]+arr[15]+arr[16]+arr[17]+arr[18]+arr[19]+arr[21]+arr[32]+arr[23]
        +arr[24]+arr[26]+arr[27]+arr[29]+arr[31]+arr[32]+arr[34]+arr[35]+arr[36]+arr[37]
        +arr[38]+arr[39]+arr[41]+arr[42]+arr[44]+arr[45]+arr[46]+arr[49]+arr[50])/148;

    memory = (arr[2]+arr[9]+arr[12]+arr[15]+arr[16]+arr[19]+arr[22]+arr[23]+arr[24]+arr[27]
              +arr[31]+arr[32]+arr[34]+arr[39]+arr[41]+arr[42]+arr[46]+arr[49])/72;
    visual = (arr[1]+arr[3]+arr[4]+arr[6]+arr[11]+arr[13]+arr[18]+arr[26]+arr[29]+arr[35]+arr[37]+
              arr[38]+arr[44]+arr[50])/56;
    audio = (arr[7]+arr[10]+arr[14]+arr[20]+arr[25]+arr[28]+arr[30]+arr[33]+arr[40]+arr[43]+arr[47])/44;
    
     alert(` Time Taken = ${diff} seconds \n Speed Score = ${speed_score} \nLanguage Vocabulary Score = ${lang_vocab.toFixed(1)} \n Memory Score = ${memory.toFixed(1)}\nVisual Discrimination Score = ${visual.toFixed(1)}\n Audio Discrimination Score = ${audio.toFixed(1)}`)
}