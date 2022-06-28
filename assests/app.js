//program by zeus !!
let aa = fetch('./data.json').then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  let info = data;
  
const valuesdaily = getdailytime(info);
const valuesweekly = getweeklytime(info);
const valuesmonthly = getmonthlytime(info);

const titlesarray = showtitles(info);



//btn interactive using js
let gg ;
const btns = document.querySelectorAll(".bottom div");
btns.forEach(btn=>{
  btn.addEventListener("click",e =>{
    btns.forEach(ee=>{
      ee.classList.remove("active");
    })
    e.target.classList.add("active");
    console.log(e.target.dataset.gg);
    gg =e.target.dataset.gg;

    if (gg == "daily") {
      console.log("daily enabled");
      outputcontents(titlesarray,valuesdaily)

    }else if (gg == "weekly") {
      console.log("weekly enabled");
      outputcontents(titlesarray,valuesweekly)

      
    }else if(gg == "monthly"){
      console.log("monthly enabled");
      outputcontents(titlesarray,valuesmonthly)
    }
  })
})

//defaults
outputcontents(titlesarray,valuesdaily)





}).catch(err => {
  // Do something for an error here
}); 


function getdailytime(array) {

const curr = array.map((item,index,array) => {

    return item.timeframes.daily.current 

  });
const prev = array.map((item,index,array) => {

    return item.timeframes.daily.previous 

  });
 
  return {"curr":curr,
          "prev":prev}   
}

function getweeklytime(array) {

  const curr = array.map((item,index,array) => {
  
      return item.timeframes.weekly.current 
  
    });
  const prev = array.map((item,index,array) => {
  
      return item.timeframes.weekly.previous 
  
    });
   
    return {"curr":curr,
            "prev":prev}   
  }


  function getmonthlytime(array) {

    const curr = array.map((item,index,array) => {
    
        return item.timeframes.monthly.current 
    
      });
    const prev = array.map((item,index,array) => {
    
        return item.timeframes.monthly.previous 
    
      });
     
      return {"curr":curr,
              "prev":prev}   
    }

function showtitles(array) {
  const titles = array.map((item,index,array) => {

    return item.title;

  });
  return titles;
}

//loop for contents
function outputcontents(titleArr,time) {

  const array4bgurl = ['./images/icon-work.svg',
  './images/icon-play.svg',
  './images/icon-study.svg',
  './images/icon-exercise.svg',
  './images/icon-social.svg',
  './images/icon-self-care.svg',
];
const arraybgcolor = ['hsl(15, 100%, 70%)',
'hsl(195, 74%, 62%)',
'hsl(348, 100%, 68%)',
'hsl(145, 58%, 55%)',
'hsl(264, 64%, 52%)',
'hsl(43, 84%, 65%)',]
  const firstsec = document.querySelector("main");

 const  createdsections = titleArr.map((e,i,array) => {
    //creating section element

 return ` 
  <section style="background-image:url('${array4bgurl[i]}');background-color:${arraybgcolor[i]};" class="sched sec-2">
  <div class="contents">
    <div class="one">
      <h3>${e}</h3>
      <h2 class="curr">${time.curr[i]}hrs</h2>
    </div>
    <div class="two">
      <i class="fa-solid fa-ellipsis"></i>
      <div class="prev">Last Week - ${time.prev[i]}hrs</div>
    </div>
  </div>
  </section>
  `;

  
  });

let strsec = createdsections.join("");
const containersec = document.querySelector(".container-sections");
containersec.innerHTML = strsec;
}