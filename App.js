console.log("Starting");

const Colors = [ "#f1f5f8" , "#fd937d" , '#d6bfba' , '#817978' , '#29a196' , '#07fbe5'] 

let flag = 0;

let btn = document.querySelector('.btn').addEventListener('click',() =>{
    
    
    //first aaproach
    document.querySelector("body").style.backgroundColor = Colors[flag];
    flag = (flag + 1) % Colors.length;
    

    // second aaproach

    // let randomColor = Colors[Math.floor(Math.random() * Colors.length)];
});
