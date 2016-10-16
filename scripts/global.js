//// 2016 Mark Licata. All rights reserved.
////
InstagramFeed = function(target){
  var feed = new Instafeed({
       target: target,
       clientId: '230bffdd335f461fbc8a88f7136250c6',
       accessToken: '13062173.230bffd.d0296aeb040a498a811293902ef20c11',
//       accessToken: '11963116.230bffd.4b288f44dd13451ba45f4c5aa3af5bc6',
       get: 'user',
       userId: '13062173',
       sortBy: 'most-recent',
       limit: '10',
       template: '<a href="{{link}}" target="_blank"><img src="{{image}}" height="{{height}}" width="{{width}}" /></a>'
 });
   feed.run();
}

GetSingleImage = function(target, tag){
  var feed = new Instafeed({
       target: target,
       clientId: '230bffdd335f461fbc8a88f7136250c6',
//       accessToken: '13062173.230bffd.d0296aeb040a498a811293902ef20c11',
       accessToken: '11963116.230bffd.4b288f44dd13451ba45f4c5aa3af5bc6',
       get: 'tagged',
       tagName: tag,
       sortBy: 'most-liked',
       resolution: 'thumbnail',
       limit: '1',
       template: '<img src="{{image}}" height="{{height}}" width="{{width}}" class="InlineImg" align="left" />'
 });
   feed.run();
}

HomePageLoader = function(){
  InstagramFeed("instafeed");
}
AboutPageLoader = function(){
  GetSingleImage("bennett", "bennysal");
  GetSingleImage("addy", "addy_mae");
}
