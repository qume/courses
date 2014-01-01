

function goto_module(current_sid, new_sid) {
    
    $("div[sid='" + current_sid + "']").addClass('hidden');
    $("div[sid='" + new_sid + "']").css('visibility','visible').hide().fadeIn().removeClass('hidden');

}


function send_answer(sid, correct) {

    var quiz_answer = new Object();
    quiz_answer.sid = sid;
    quiz_answer.correct = correct;
    
    var post = JSON.stringify(quiz_answer);
    
}