let Sbtn=document.querySelector('#search_btn');
let deg=document.querySelector('.degree');
let address=document.querySelector('.address');
let wind=document.querySelector('#wind');
let humid=document.querySelector('#humidity');
let image=document.querySelector('.imgbox');

Sbtn.addEventListener('click',()=>{
    let input=document.querySelector('#search_input').value;

    if(input!==''){

        getdata(input);
      
    }
  
})

async function getdata(input){
    try {
        let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=8d9aa556a881b7378848cc4e00e50f73`);
        let result=await data.json();
        // console.log(result);
    

        deg.innerHTML=`${result.wind.deg/10}°c`;
        address.innerHTML=input;
        image.innerHTML=`<img src="https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png" width=200>`;
        wind.innerHTML=`${result.wind.speed} km/h`;
        humid.innerHTML=`${result.main.humidity}%`;
      
        
    } catch (error) {
        console.log(error);
    }finally{
        console.log('How is the weather today ?')
    }
 
}

