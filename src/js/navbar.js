
let nav = document.querySelector("#navbar-custom");

nav.innerHTML = `

<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="/">
  <img src="./img/csne.png" width="150px" loading="lazy"/>
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<!--<div class="language-button-container">
  <button type="button" class="ant-btn ant-btn-default active" ant-click-animating-without-extra-node="false">
    <span>English</span>
    </button>
  <button type="button" class="ant-btn ant-btn-default" ant-click-animating-without-extra-node="false">
    <span>සිංහල</span>
    </button>
  <button type="button" class="ant-btn ant-btn-default" ant-click-animating-without-extra-node="false">
    <span>தமிழ்</span>
    </button>
    
</div> -->





<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./how-it-works.html">How it Works</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./vote.html">Cast Vote</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./voteme-card.html">My VoteMe Card</a>
    </li>
    <li>
      <select class="form-select" id="lang_select">
        <option class="en">Sinhala</option>
        <option class="sl" selected>English</option>
        <option class="tm">Tamil</option>
      </select>
    </li>
    <li>
    <div class="dropdown">
        <span>Select Language</span>
        <div class="dropdown-content">
            <ul>
                <li><a href="#" class="en">English</a></li>
                <li><a href="#" class="sl">Sinhala</a></li>
                <li><a href="#" class="tm">Tamil</a></li>
            </ul>
        </div>
    </div>
    </li>
  </ul>
</div>
</nav>`


// function changeAction(){
//   var x = document.getElementById("lang_select").value;
//   document.getElementById("demo").innerHTML = "You selected: " + x;
// }

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
       $(".small p:nth-child(1) a").text("Sri Lanka Institute of Information Technology");
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