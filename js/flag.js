let flag = [

    {
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
        name: "Germany",
        population: "81,770,900",
        region: "Europe",
        capital: "Berlin",
      },
     
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      name: "USA",
      population: "331,449,281",
      region: "North America",
      capital: "Washington, D.C.",
    },

    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png",
        name: "BRAZIL",
        population: "212,559,417",
        region: "South America",
        capital: "Brasilia",
      },
  
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
      name: "ICELAND",
      population: "334,300",
      region: "Europe",
      capital: "Reykjavik",
    },
  
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Afghanistan.svg/640px-Flag_of_Afghanistan.svg.png",
      name: "Afghanistan",
      population: "27,657,145",
      region: "Asia",
      capital: "Kabul",
    },
  
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flag_of_%C3%85land.svg/640px-Flag_of_%C3%85land.svg.png",
      name: "Åland Islands",
      population: "28,875",
      region: "Europe",
      capital: "Mariehamn",
    },
  
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/640px-Flag_of_Albania.svg.png",
      name: "Albania",
      population: "2,886,026",
      region: "Europe",
      capital: "Tirana",
    },
  
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/640px-Flag_of_Algeria.svg.png",
      name: "Algeria",
      population: "40,400,000",
      region: "Africa",
      capital: "Algiers",
    },
  
    
  ];
  
  function flagsFunction(flag){
  
  const flagimg = document.createElement('img');
  flagimg.setAttribute('src',flag.img);
  flagimg.setAttribute('class','flag');
  const info = document.createElement('div');
  info.setAttribute('class','info');
  
  info.innerHTML = `
    <h2>${flag.name}</h2>
    <p><span class="side-heading">Population:</span>${flag.population}</p>
    <p><span class="side-heading">Region:</span>${flag.region}</p>
    <p><span class="side-heading">Capital:</span>${flag.capital}</p>
  `;
  const container = document.createElement('div');
  container.setAttribute("class","container");
  container.append(flagimg,info);
  document.body.append(container);
  }
  
  for(let i = 0 ; i<flag.length;i++){
  flagsFunction(flag[i]);
  }
  
  
  
  