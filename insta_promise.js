let puppeteer=require("puppeteer");
let id="hicihac695@awinceo.com";
let pw="abcd@123";
let search="bts.bighitofficial";
let tab;
let browserOpenPromise=puppeteer.launch({
    headless: false,
    defaultViewport:null,
    args: ["--start-maximized"],
});
browserOpenPromise
.then(function(browserInstance){
    let PagesPromise=browserInstance.pages();
    return PagesPromise;
})
.then(function(pages){
    let page=pages[0];
    tab=page;
    let gotoPromise=tab.goto("https://www.instagram.com/accounts/login/");
    return gotoPromise;
})
.then(function(){
    return tab.waitForSelector('input[name="username"]');
})

.then(function() {
   let idtype= tab.type('[name="username"]',id);
   return idtype;
   
})
.then(function(){
    let pwtype= tab.type('[name="password"]',pw);
    return pwtype;
    
 })
 .then(function(){
    console.log("successfully logged in");
     return tab.click(".sqdOP.L3NKy.y3zKF");
     
 })
 .then(function(){
    return tab.waitForSelector(".cmbtv");
})
 .then(function(){
   let clickpromise= tab.click(".cmbtv");
   return clickpromise;
})
.then(function(){
    return tab.waitForSelector(".aOOlW.HoLwm");
})
.then(function(){
    let noticlickpromise= tab.click(".aOOlW.HoLwm ");
    return noticlickpromise;
 })
 .then(function(){
    return tab.waitForSelector('.XTCLo.x3qfX');
})
 .then(function(){
     let clickSearchpromise = tab.click('.XTCLo.x3qfX');
     return clickSearchpromise;
 })
 .then(function(){
     let typeSearchPromise= tab.type('.XTCLo.x3qfX',search);
 })
 .then(function(){
    return tab.waitForSelector(".-qQT3[href='/bts.bighitofficial/']");
 })   

 .then(function(){
    let waitAndClicksearchPromise = tab.click(".-qQT3[href='/bts.bighitofficial/']");
    return waitAndClicksearchPromise;
 })
 .then(function(){
    return tab.waitForSelector("[href='/p/CQA8aobBrAx/']");
 })   

 .then(function(){
    let clickPostspromise= tab.click("[href='/p/CQA8aobBrAx/']");
    return clickPostspromise;
 })
 .then(function(){
    return tab.waitForSelector(".fr66n");
 })   

 .then(function(){
    let clicklikepromise= tab.click(".fr66n");
    console.log("liked succcessfully");
    return clicklikepromise;
 })
 .then(function () {
    let waitPromise = tab.waitForTimeout(5000);
    return waitPromise;
  })   

 .then(function(){
    let clicknextpromise= tab.click("._65Bje.coreSpriteRightPaginationArrow");
    
    return clicknextpromise;
 })
.catch(function(err){
    console.log("inside catch");
})

