
// let myHeading= document.querySelector('h1');
// myHeading.textContent='Hello world!';


//点击更替照片功能
let myImage=document.querySelector('img')//把<img>元素的引用放在myImage变量里

myImage.onclick=function(){//把myImage变量的onclick事件与一个匿名函数绑定
    let mySrc = myImage.getAttribute('src'); 
    if(mySrc==='images/mongol.jpg')
    {
        myImage.setAttribute('src','images/Imperio-Mongol.jpg')
    }
    else
    {
        myImage.setAttribute('src','images/mongol.jpg')
    }
}

//个性化欢迎
let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');
function setUserName(){
    let myName=prompt('请输入您的名字');
    if(!myName){
        setUserName();
    }
    else{
        localStorage.setItem('name',myName);
        myHeading.textContent='Mozilla 酷毙了，'+myName;
    }
    
}
if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName=localStorage.getItem('name');
    myHeading.textContent='Mozilla酷毙了,'+storedName;   
}
myButton.onclick=function(){
    setUserName();
}