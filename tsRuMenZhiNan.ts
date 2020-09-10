/*
Basic data type
*/
//~~~~~~~~
// let isMan:boolean = false
// // console.log(isMan)
//~~~~~~~~
// let duckNum:number = 20
// // console.log(duckNum)
//~~~~~~~~
// let myWord:string = "i say"
// // console.log(myWord)
//~~~~~~~~
// let numberArray:number[] = [1,2,3]
// let numberArray1:Array<number> = [1,2,3,4]
// // console.log(numberArray)
// // console.log(numberArray1)
//~~~~~~~~
// enum Color{Red,Green,Yellow}
// let c1:Color = Color.Red
// // console.log(c1)
// enum Color1{Red = 1,Green = 2,Yellow = 3}
// let c2:Color1 = Color1.Red
// // console.log(c2)
// enum Color2{Red = 1,Green,Blue}
// let c3:string = Color2[2]
// // console.log(c3)
//~~~~~~~~
// let idontKnow:any = 4
// idontKnow = 'you do not know me'
// // console.log(idontKnow)
//~~~~~~~~
// let manyThingArry:any[] = [1,'jj',false]
// // console.log(manyThingArry)
//~~~~~~~~
// function noReturnFunction():void{
//   console.log("i am no return")
// }
// // noReturnFunction()


/*
interface
*/
// //~~~~~~~~
// interface UserInfo{
//     age?:any;
//     name:string;
// }
// function getUserInfo(user:UserInfo){
//     return user.age + "====" + user.name
// }
// let jobsUserInfo = {name:'jobs'}
// // console.log(getUserInfo(jobsUserInfo))
//~~~~~~~~
// interface SConfig{
//     color?:string;
//     width?:number;
// }
// function caculateSqure(config:SConfig):{color:string;area:number}{
//    let newS = {color:'white',area:80};
//    if(config.color){
//        newS.color = config.color;
//    }
//    if(config.width){
//        newS.area = config.width*newS.area;
//    }
//    return newS
// }
// //console.log(caculateSqure({color:'black',width:100}))
// //console.log(caculateSqure({}))
//~~~~~~~~
// interface searchFunt{
//     (source:string,substring:string):boolean
// }
// var mySearch :searchFunt;
// mySearch = function(source:string,subString:string){
//     var result = source.search(subString)
//     if(result == -1){
//         return false
//     }
//     else{
//         return true
//     }
// }
// function test(){
//     var source:string = "this is OK";
//     var subString1:string = 'OK'
//     var substring2:string = 'not'
//     // var result:boolean;
//     var result1 = mySearch(source,subString1)
//     var result2 = mySearch(source,substring2)
//     // console.log(result1)
//     // console.log(result2)
// }
// // test()
//~~~~~~~~
// interface stringArray{
//     [index:number]:string;
// }
// var myArray :stringArray
// myArray = ['Bob','Fred']
// function test(){
//     myArray.forEach((key,val) => {
//        //不支持es6暂时无法输出 
//         console.log(val)
//     });
// }
// interface IClock{
//     currentTime:Date;
//     setTime(d:Date);
// }
// class Clock implements IClock{
//     currentTime:Date;
//     constructor(h:number,m:number){}
//     setTime(d:Date){
//         this.currentTime = d;
//     }
// }
// interface IClock1{
//     new (hour:number,minute:number);
// }
// class Clock1{
//     currentTime:Date;
//     constructor(h:number,m:number){}
// }
// var cs:IClock1 = Clock1;
// var newClock = new cs(7,30);
// // console.log(newClock);
//~~~~~~~~
//接口继承接口，类实现多接口
// interface InterfaceOne {
//     //
//     sports():void;
// }
// interface InterfaceTwo {
//     //
//     swimming():void
// }
// // 接口集成接口
// interface InterfaceThree extends InterfaceOne,InterfaceTwo {
//     //
//     coding():void;
// }

// class ParentCls {
//     name:string;
//     constructor(name:string){
//         this.name = name
//     }
//     //
//     ktv(){
//         console.log(this.name + '唱歌');
//     }
// }
// // 继承父类实现多接口
// class SubCls extends ParentCls implements InterfaceTwo, InterfaceOne {

//     // 实现接口
//     sports(){
//         console.log(this.name + '运动')
//     }

//     swimming(){
//         console.log(this.name + '游泳')
//     }
// }
// let subCls = new SubCls('小明');
// subCls.sports()
// subCls.swimming();
// subCls.ktv()

// //
// class SubCls2 extends ParentCls implements InterfaceThree {
//     //
//     coding(){
//         console.log(this.name + '写代码');
//     }
//     sports(){
//         console.log(this.name + '运动');
//     }
//     swimming(){
//         console.log(this.name + '游泳')
//     }
// }
// let subCls2 = new SubCls2('小王');
// subCls2.coding();
// subCls2.sports();
// subCls2.ktv();
// subCls.swimming();
// //接口继承接口，类实现多接口 结束
//~~~~~~~~
// interface Counter{
//     (start:number):string;
//     interval:number;
//     reset():void;
// }
// var c:Counter;
// c(10);
// c.interval = 5.0;
// c.reset();


/*
class
*/
//~~~~~~~~
// class Employee { 
//     fullName: string;
//     constructor(fullName:string){
//         this.fullName = fullName
//     }
// }
// var employee = new Employee("Long long");
// if (employee.fullName) { 
//     //  console.log(employee.fullName);
// }
//~~~~~~~~
// class Person{
//     userName:string;
//     constructor(paramVal:string){
//         this.userName = paramVal
//     }
//     getPersonInfo(age:number):string{
//         return this.userName+"\n"+age
//     }
// }
// class student1 extends Person{
//     constructor(username:string){
//         super(username)
//     }
//     getUserInfo(age=100){
//         var superMsg = super.getPersonInfo(age);
//         return this.userName+"\n"+age+'岁'+'\n\t\t'+'默认信息：'+superMsg;
//     }
// }
// class student2 extends Person{
//     constructor(username:string){
//         super(username)
//     }
//     getUserInfo(age=120){
//         var superMsg = super.getPersonInfo(age);
//         return this.userName+"\n"+age+'岁'+'\n\t\t'+'默认信息：'+superMsg;
//     }
// }
// var stu1 =new student1("周伯通")
// var stu2 =new student2("老毒物")
// var stuMsg1 =  stu1.getPersonInfo(40)
// var stuMsg2 =  stu2.getUserInfo(80)
// // console.log(stuMsg1)
// // console.log(stuMsg2)
//~~~~~~~~
// class MyAnimal {
//     private name:string;
//     constructor(private theName:string){
//         this.name = theName;
//     }
//     getMsg(name:string):string{
//         return this.name = name
//     }
// }
// class Rhino extends MyAnimal {
//     constructor(){
//         super('犀牛')
//     }
//     getMsg(name:string):string{
//         return name
//     }
// }
// class Employees{
//     private name:string;
//     constructor(theName:string){
//         this.name = theName
//     }
// }
// var animal = new MyAnimal('山羊')
// var retMsg1  = animal.getMsg("鹿")
// var rhino = new Rhino()
// var employee  = new Employees('洪七公')
// // animal = rhino
// // console.log(retMsg1)
//~~~~~~~~
// class Greeter{
//     static standardGreeting = "Hello ,there";
//     greeting:string;
//     greet(){
//         if(this.greeting){
//             return "Hello,"+this.greeting
//         }
//         else{
//             return Greeter.standardGreeting
//         }
//     }
// }
// var greeter1:Greeter;
// greeter1 = new Greeter()
// // console.log(greeter1.greet())
// var greeterMaker:typeof Greeter = Greeter
// greeterMaker.standardGreeting = 'Hello there!'
// var greeter2.Greeter  =new greeterMaker()
// // console.log(greeter2.greet())
//~~~~~~~~


/*
module 未完待续
*/
// //~~~~~~~~
// //validation.ts
// module Validation {
//     export interface StringValidator {
//         isAcceptables(s: string): boolean;
//     }
// }
// //ZipCodeValidator.ts
// module Validation {
//     var numberRegexp = /^[0-9]+$/
//     export class ZipCodeValidator implements StringValidator {
//         isAcceptable(s: string) {
//             return s.length === 5 && numberRegexp.test(s)
//         }
//     }
// }
// //lettersOnlyValidator.ts
// module Validation {
//     var letterRegexp = /^[A-Za-z]+$/
//     export class LetterOnlyValidator implements StringValidator {
//         isAcceptable(s: string) {
//             return letterRegexp.test(s)
//         }
//     }
// }
// //test-1.ts
// /// <reference path="../plugins/typescript/typings/jquery.d.ts" /> 
// /// <reference path="test1/Validation.ts" />
// /// <reference path="test1/LettersOnlyValidator.ts" /> 
// /// <reference path="test1/ZipCodeValidator.ts" /> 
// var strings = ['Hello', '98052', '101']
// var validators: { [s: string]: Validation.StringValidator; } = {};
// validators['Zip Code'] = new Validation.ZipCodeValidator();
// validators['letters only'] = new Validation.LetterOnlyValidator();
// function showMsg(): void {
//     strings.forEach(s => {
//         for (var name in validators) {
//             console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name); $("#msg1").html('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
//         }
//     })
// }
// showMsg()
// //~~~~~~~~


/*
function 
*/
// //~~~~~~~~
// function add(x:number,y:number):number{
//     return x+y;
// }
// var myAdd1 = function(x:number,y:number):number{
//     return x+y;
// }
// var myAdd2:(x:number,y:number)=>number=function(x:number,y:number):number{
//     return x+y
// }
// //~~~~~~~~
// function buildName1(firsetName:string,lastName:string){
//     return firsetName + " " + lastName
// }
// function buildName2(firstName:string,lastName?:string){
//     if(lastName){
//         return firstName + " " + lastName;
//     }
//     else
//         return firstName;
// }
// var resule1 = buildName2("Bob")
// function buildName3(firstName:string,...restOfName:string[]){
//     return firstName + " " + restOfName.join(" ")
// }
// var employeeName = buildName3('tom','sam','shi','mac')
// function buildName4(firstName:string,...restOfName:string[]){
//     return firstName + ' ' + restOfName.join(" ")
// }
// var buildNameFun:(fname:string,...rest:string[])=>string=buildName4
// //~~~~~~~~
// function getMeMsg1():void{
//     var suits1 = ['hearts','spades','clubs','diamonds']
//     var deck1 = {
//         suits:suits1,
//         cards:Array(52),
//         createCardPicker:function(){
//             return function(){
//                 var pickedCard = Math.floor(Math.random() * 52)
//                 var pickedSuit = Math.floor(pickedCard / 13)
//                 return {suit: deck1.suits[pickedSuit],card:pickedCard % 13};
//             }
//         }
//     }
//     var cardPicker1 = deck1.createCardPicker()
//     var pickedCard1 =  cardPicker1()
//     console.log('card1:'+pickedCard1.card + " of " + pickedCard1.suit)
// }
// getMeMsg1()
// function getMeMsg2():void{
//     var deck2  = {
//         suits:['hearts','spaged','clubs','diamonds'],
//         cards:Array(52),
//         createCardPicker:function(){

//             return ()=>{

//                 var pickedCard = Math.floor(Math.random() * 52)
//                 var pickedSuit = Math.floor(pickedCard / 13)
//                 // console.log(this.suits[pickedSuit])
//                 // console.log(pickedCard % 13)
                
//                 return {suit:this.suits[pickedSuit],card:pickedCard % 13}
//             }
//         }
//     }
//     var cardPicker2 = deck2.createCardPicker()
//     var pickedCard2 = cardPicker2();
//     console.log("card2: " + pickedCard2.card + " of " + pickedCard2.suit);
// }
// getMeMsg2()
// var suits = ['hearts','spades','clubs','diamonds'];
// function getThisMsg1():void{
//   function pickCard1(x:any):any{
//     if(typeof x == 'object'){
//       var pickedCard = Math.floor(Math.random()*x.length);
//       return pickedCard;
//     }
//     else if(typeof x == 'number'){
//       var pickedSuit = Math.floor(x/13)
//       return {suit:suits[pickedSuit],card: x%13};
//     } 
//   }
//   var myDeck1 = [{suit:'diamond',card:2},{suit:'spades',card:10},{suit:'hearts',card:4}]
//   var pickedCard1:any = myDeck1[pickedCard1(myDeck1)]
//   console.log("card: "+pickedCard1.card + " of " +pickedCard1.suit)

//   var pickerCard2 = pickCard1(15)
//   console.log("card:" + pickerCard2.card + " of " + pickerCard2.suit)
// }
// function getThisMsg2():void{
//   function pickCard(x:{suit:string;card:number;}[]):number;
//   function pickCard(x:number):{suit:string;card:number;};
//   function pickCard(x:any):any{
//     if(typeof x == "object"){
//       var pickedCard = Math.floor(Math.random()*x.length)
//       return pickedCard
//     }
//     else if(typeof x == 'number'){
//       var pickedSuit = Math.floor(x/13);
//       return {suit:suits[pickedSuit],card:x%13};
//     }
//   }
//   var myDeck  = [{suit:"diamonds",card:2},{suit:'spades',card:10},{suit:'hearts',card:4}]
//   var pickedCard1 = myDeck[pickCard(myDeck)];
//   console.log("card: "+ pickedCard1.card + " of " + pickedCard1.suit);
//   var pickedCard2 = pickCard(15)
//   console.log("card: "+pickedCard2.card + " of " + pickedCard2.suit)
// }
// getThisMsg2()


/*
泛型 
*/
// //~~~~~~~~
// function identify1(arg:number):number{
//   return arg
// }
// function identify2(arg:any):any{
//   return arg
// }
// //~~~~~~~~
// function _identity1<T>(arg:T):T{
//   return arg
// }
// console.log(_identity1({aa:'sanlyshi'}))
// function loggingIdentity2<T>(arg:T[]):T[]{
//   console.log(arg.length)
//   return arg
// }
// console.log(loggingIdentity3([1,2,3]))
// function loggingIdentity3<T>(arg:Array<T>):Array<T>{
//   console.log(arg.length)
//   return arg
// }
// console.log(loggingIdentity3([1,2,3]))
// function identify3<T>(arg:T):T{
//   return arg;
// }
// var myIdentity3:<T>(arg:T)=>T=identify3;
// function identity4<T>(arg:T):T{
//   return arg;
// }
// var myIdentity4:<U>(arg:U)=>U=identity4;
// function identity5<T>(arg:T):T{
//   return arg;
// }
// var myIdentity5:{<T>(arg:T):T} =identity5;
// interface GenericIdentityFn1{
//   <T>(arg:T):T;
// }
// function identity6<T>(arg:T):T{
//   return arg;
// }
// var myIdentity6:GenericIdentityFn1 = identity6
// interface GenericIdentityFn2<T>{
//   (arg:T):T;
// }
// function identity7<T>(arg:T):T{
//   return arg;
// }
// var myIdentity7:GenericIdentityFn2<number> = identity7
// //~~~~~~~~
// class GenericNumber<T>{
//   zeroValue:T;
//   add:(x:T,y:T)=>T;
// }
// var myGenericNumber = new GenericNumber<number>();
//     myGenericNumber.zeroValue = 0
//     myGenericNumber.add = function(x,y){
//       return x+y;
//     };
// var stringNumberic = new GenericNumber<string>();
//     stringNumberic.zeroValue = '';
//     stringNumberic.add = function(x,y){
//       return x+y;
//     };
// console.log(stringNumberic.add(stringNumberic.zeroValue,'test'));
// interface ILength{
//   length:number;
// }
// function loggingIdentity<T extends ILength>(arg:T):T{
//   console.log(arg.length)
//   return arg;
// }
// var object = loggingIdentity({length:10,value:3})
// function create<T>(c:{new():T;}):T{
//   return new c();
// }
// class BeeKeeper{
//   hasMask:boolean;
// }
// class Zookerper{
//   nametag:string;
// }
// class Animals{
//   numlengs:number;
// }
// class Bee extends Animals{
//   keeper:BeeKeeper;
// }
// class Lion extends Animals{
//   keeper:Zookerper;
// }
// function findKeeper<A extends Animals,K>(a:{new():A;prototype:{keeper:K}}):K{
//   return a.prototype.keeper;
// }
// var obj1:Animals=Lion; 
// console.log( findKeeper(Lion).nametag);//检查类型!


/*
混入
*/
// //~~~~~~~~
// class Disposable{
//     isDisposed:boolean;
//     dispose(){
//         this.isDisposed = true
//     }
// }
// class ActiveTable{
//     isActive:boolean;
//     activate(){
//         this.isActive = true
//     }
//     deactivate(){
//         this.isActive = false
//     }
// }
// class SmartObject implements Disposable,Activatable{
//     constructor(){
//         setInterval(()=>console.log(this.isActive+""+this.isDisposed),500);
//     }
//     interact(){
//         this.activate()
//     }
//     isDisposed:boolean = false;
//     dispose:()=>void;
//     isActive:boolean = false;
//     activate:()=>void;
//     deactivate:()=>void;
// }
// function appleMixins(derivedCtor:any,baseCtors:any[]){
//     baseCtors.forEach(baseCtor=>{
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name=>{
//             derivedCtor.prototype[name]=baseCtor.prototype[name];
//         })
//     })
// }
// appleMixins(SmartObject,[Disposable,Activatable])
// var smartObj = new SmartObject();
// setTimeout(()=>smartObj.interact(),1000);


/*
TypeScript 声明合并
*/
// //~~~~~~~~
// interface Box{
//     height:number;
//     width:number;
// }
// interface Box{
//     scale:number;
// }
// var box:Box = {height:5,width:6,scale:10}
// interface Document{
//     createElement(tagName:any):Element;
// }
// interface Document{
//     createElement(tagName:string):HTMLElement;
// }
// interface Document{
//     createElement(tagName:"div"):HTMLDivElement;
//     createElement(tagName:"span"):HTMLSpanElement;
//     createElement(tagName:"canvas"):HTMLCanvasElement;
//     createElement(tagName:string):HTMLElement;
//     createElement(tagName:any):Element;
// }
// var box = {height:5,width:6,scale:10}
// //~~~~~~~~
// module MAnimals{
//     export class Zebra{}
// }
// module MAnimals{
//     export interface Legged{
//         numberOfLegs:number;
//     }
//     export class Dog{}
// }
// module MYAnimals{
//     export interface Legged{
//         numberOfLegs:number;
//     }
//     export class Zebra{}
//     export class Dog{}
// }
// module myAnimal{
//     export function doAnimalsHaveMuscles(){

//     }
// }
// class Album{
//     label:Album.AlbumLabel;
// }
// module Album{
//     export class AlbumLabel{}
// }


/*
TypeScript 类型比较
*/
// //~~~~~~~~
// interface Named{
//     name:string;
// }
// var x:Named;
// var y = {name:'Alice',location:'seattle'}
// x = y;
// var items = [1,2,3];
// items.forEach((item,index,array)=>console.log(item))
// items.forEach((item)=>console.log(item))
// var k = () => ({name:'Alice'})
// var z = () => ({name:'Alice',location:'seattle'})
// k = z
// z=k//报错