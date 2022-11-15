//English
$(function() {
    $(".en").click(function() {
        $("#hello").text("Hello,Voter!");

        $("#title").text("How does VoteMe works?");
        $(".small").text("by");
        // $(".small p:nth-child(1) a").text("Sri Lanka Institute of Information Technology");
        $("#date").text("Posted on July 17, 2022");   
        
    });
});


//Sinhala
$(function() {
    $(".sl").click(function() {

        $("#title").text("VoteMe භාවිතා කරන්නෙ කෙසේද?");
        $("#hello").text("ආයුබෝවන්, ඡන්දදායකයා!");
        $(".small").text("මඟින් ");
        // $(".small p:nth-child(1) a").text("Sri Lanka Institute of Information Technology");
        $("#date").text("17 ජූලි 2022 පළ කරන ලදී"); 
    });
});


//Tamil
$(function() {
    $(".tm").click(function() {

        $("#title").text("VoteMe எப்படி வேலை செய்கிறது?");
        $(".small").text("මඟින් ");
        // $(".small p:nth-child(1) a").text("Sri Lanka Institute of Information Technology");
        $("#date").text("17 ஜூலை 2022 அன்று வெளியிடப்பட்டது"); 
    });
});
