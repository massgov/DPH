<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<!-- saved from url=(0071)https://vgintake.hhs.state.ma.us/vg/ForbiddenPage_Files/eohhsDefault.js -->
<HTML><HEAD>
<META http-equiv=Content-Type content="text/html; charset=windows-1252">
<META content="MSHTML 6.00.2900.2802" name=GENERATOR></HEAD>
<BODY>/// JavaScript Document /* This file is to carry most if not all of 
JavaScript functions that might * might needed in the HTML files */ // function 
for image roll-overs function initRollovers() { if (!document.getElementById) 
return var aPreLoad = new Array(); var sTempSrc; var aImages = 
document.getElementsByTagName('img'); for (var i = 0; i &lt; aImages.length; 
i++) { if (aImages[i].className == 'imgover') { var src = 
aImages[i].getAttribute('src'); var ftype = src.substring(src.lastIndexOf('.'), 
src.length); var hsrc = src.replace(ftype, '_on' + ftype); 
aImages[i].setAttribute('hsrc', hsrc); aPreLoad[i] = new Image(); 
aPreLoad[i].src = hsrc; aImages[i].onmouseover = function() { sTempSrc = 
this.getAttribute('src'); this.setAttribute('src', this.getAttribute('hsrc')); } 
aImages[i].onmouseout = function() { if (!sTempSrc) sTempSrc = 
this.getAttribute('src').replace('_on'+ftype, ftype); this.setAttribute('src', 
sTempSrc); } } } } /* * The following functions are used to expand and retract 
the State * Government Menu specifically. */ function Toggle(item) { 
obj=document.getElementById(item); visible=(obj.style.display!="none") 
key=document.getElementById("x" + item); if (visible) { 
obj.style.display="none"; key.innerHTML="<IMG src="" border=0>"; } else { 
obj.style.display="block"; key.innerHTML="<IMG src="" border=0>"; 
HideAllElse(item); } } function ToggleExec() { 
obj=document.getElementById("executive"); visible=(obj.style.display!="none"); 
key=document.getElementById("xexecutive"); if (visible) { 
obj.style.display="none"; key.innerHTML="<IMG src="" border=0>"; } else { 
obj.style.display="block"; key.innerHTML="<IMG src="" border=0>"; } } function 
Expand() { divs=document.getElementsByTagName("DIV"); for 
(i=0;i<DIVS.LENGTH;I++) appversion="parseInt(navigator.appVersion);" && 
?Netscape? (appname="=" if var appname="navigator.appName;" ;} 
6){day_of_week="Sat" if(day_of_week_number="=" 5){day_of_week="Fri" 
4){day_of_week="Thu" 3){day_of_week="Wed" 2){day_of_week="Tues" 
1){day_of_week="Mon" 0){day_of_week="Sun" 11){month="Dec." if(month_number="=" 
10){month="Nov." 9){month="Oct." 8){month="Sept." 7){month="Aug." 
6){month="July" 5){month="June" 4){month="May" 3){month="April" 2){month="March" 
1){month="Feb." 0){month="Jan." month="" ; day_of_week="" 2000 
year="date.getYear()" the for is code This * before and 1999 100; - 
minutes_of_day="date.getMinutes();" hour_of_day="date.getHours();" 
month_number="date.getMonth();" day_of_month="date.getDate();" 
day_of_week_number="date.getDay();" Date(); date greeting display To { 
displayDate() function loading. page on invoked be should It page. space certain 
a in it displays calculates DisplayDate image arrow module functions End } 
hsrc); arrowImage.setAttribute(?src?, ftype); hsrc="src.replace(ftype," 
src.length); ftype="src.substring(src.lastIndexOf('.')," 
removedPart="src.substring(src.lastIndexOf('_on')," 
src="arrowImage.getAttribute('src');" 
arrowImage="document.getElementById(tempID);" ?Img?; + imageID="item" 
changedColumn="document.getElementById(item);" ) document.getElementById ( 
putStateImage(item) ?_on? changeStateImage(item) Module Government State For 
tempID="item" changedColumn.style.backgroundColor="#EFEFF7" else ?info? item="=" 
|| ?conductbusiness? putImage(item) changeImage(item) module. exlusively are 
putStateImage() changeStaeImage() Functions in. they level what of regardless 
modules all with use could two Those column. over rolled to next column which 
changed item: putImage(item): changeImage(item), Implementation: over. when them 
arrows change color that hyperlinks text composed headers The headers. displayed 
get Following specifications Menu here 
key.innerHTML="<img src='../Eeohhs/images/navigation/govbranch_carrot_active.gif' border='0'>" 
divs[i].id); key='document.getElementById("x"' divs[i].style.display="block" ){ 
!="divs[i].id" divs[i].id (item (i="0;i<divs.length;i++)" 
divs='document.getElementsByTagName("DIV");' HideAllElse(item) Collapse()>= 3) { 
// At this time, we want to show the date in the form: July 12, 2003. var temp = 
parseInt(year); year = temp + 1900; // var date_to_show = day_of_week + ', ' + 
month + ' ' + day_of_month + ', ' + year; var date_to_show = month + ' ' + 
day_of_month + ', ' + year; } else { // At this time, we want to show the date 
in the form: July 12, 2003. // var date_to_show = day_of_week + ', ' + month + ' 
' + day_of_month + ', ' + year; var date_to_show = month + ' ' + day_of_month + 
', ' + year; } var d = document.getElementById("DateLayer"); d.innerHTML = 
date_to_show; } //For DTA Office Location Lookup function jumpTo(optionObj) { 
window.location.href = optionObj.options[optionObj.selectedIndex].value; } 
////////////////////////// </BODY></HTML>
