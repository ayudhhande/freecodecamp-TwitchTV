function twichChannels(){
var channel = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
// function online(){
channel.forEach(function(cha){
  $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/'+cha, function(d) {
    console.log(d);
  var twichContents;
    var twichContentsOnline;
    var twichContentsOffline
  var status = d.stream;
    if(status === null)
    var state = "Offline";
    else
      state = "Online";
    
$.ajax({
  url:'https://wind-bow.glitch.me/twitch-api/channels/'+cha, //+channel[3]
  type:'GET',
  datatype:'json',
  success:function(data){
    console.log(data);
    console.log(data.stream);
    var logo = data.logo;
    var display_name = data.display_name;
    var links = data.url;
    var stats = data.status;
    
    if(stats === null)
      stats = 'No Description Available'
if(state === 'Online' ){
    twichContentsOnline=  '<div class = "online grid-container"><div class = "grid-item"><img src='+ logo+'></div><div class = "grid-item"><a href = '+links+ ' target = "_blank">'+display_name+'</a></div><div class = "grid-item"><span class = "hidden-xs">'+stats+'</span></div><div class = "grid-item"><span>' +state+'</span></div></div>';
    $('#lists').append(twichContentsOnline);  
    // $('#on').append(twichContentsOnline);  
    
}
    else{
      twichContentsOffline=  '<div class = "offline grid-container"><div class = "grid-item"><img src='+ logo+'></div><div class = "grid-item"><a href = '+links+ ' target = "_blank">'+display_name+'</a></div><div class = "grid-item"><span class = "hidden-xs">'+stats+'</span></div><div class = "grid-item"><span>' +state+'</span></div></div>';
          $('#lists').append(twichContentsOffline);
          // $('#off').append(twichContentsOffline);  

    }
    // twichContents = twichContentsOnline + twichContentsOnline;
    // $('#lists').append(twichContents);
  // }
  }
});
});
});
// }
}
$(document).ready(function() {
    twichChannels();

      $("#online").on("click", function() {
        $(".online").show();
        $(".offline").hide();
      });
      $("#offline").on("click", function() {
        $(".online").hide();
        $(".offline").show();   
      $("#all").on("click", function() {
        $(".online").show();
        $(".offline").show();
      });
       // $('div').has('Offline').hide();
    });
    });