/*console.log(''). What you write inside the parenthesis will be displayed in the console of your browser, when you execute this bit of JavaScript. Tell your console “app is alive”, to find out if your JavaScript works!*/

console.log('app is live');

/*#channels#switcher switchChannel() writes new channel name & location, as a link, to app bar and logs changes.

*/

function switchChannel(channelName) {
    /*1 Pt. New channel name is logged to console.
     */
    console.log('Tuning into channel', channelName);
    /*1 Pt. Clicking channel name in list, sets same channel name in app bar.
     */
    document.getElementById('appbarchannelname').innerHTML = channelName;
    /*Upgrade the function to also change the app bar’s #location. After clicking on a channel the location should change to ‘upgrading.never.helps’ . . Make sure the location is a hyperlink and someone who clicks on the new location is directed to the corresponding w3w site. */
    document.getElementById('appbarchannelloclink').innerHTML = 'upgrading.never.helps';
    document.getElementById('appbarchannelloclink').href = 'https://map.what3words.com/upgrading.never.helps';

}

/*Star in app bar turns to ‘star-o’ when channel changes and when star is clicked.*/
/*
1 Pt. Clicking channel sets star in app bar to star-o.
using jquery*/
function changeStar() {

    $("#channelbarimage").attr("src", "http://ip.lfe.mw.tum.de/sections/star-o.png");
}
/*1 Pt. Clicking star in app bar, sets it to filled star using jquery
 */
function fillStar() {
    $("#channelbarimage").attr("src", "http://ip.lfe.mw.tum.de/sections/star.png");

}
/*Jquery removes highlighting from tabs and highlights clicked tab*/
function selectTab(tabId) {
    /*1 Pt. Clicking tab removes highlighting from all (other) tabs.
     */
    $("li").removeClass("selected");
    /*1 Pt. Clicking tab adds highlighting to that tab. 
     */
    $(tabId).addClass("selected");
    /*1 Pt. Clicked tab is logged to console.*/

    console.log('Changing to tab', tabId);

}
/*The menu should not only appear onclick, but also vanish onclick again. It should #toggle when a user clicks the button. Again jQuery is a great solution here.*/
function showorhideemojis() {

    $("#emojis").toggle();

}