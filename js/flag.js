let flag = [

    {
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
        name: "Germany",
        population: "81,770,900",
        region: "Europe",
        capital: "Berlin",
      },
     
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Vermin_Supreme_USA_flag.svg",
      name: "USA",
      population: "331,449,281",
      region: "North America",
      capital: "Washington, D.C.",
    },

    {
        img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
        name: "BRAZIL",
        population: "212,559,417",
        region: "South America",
        capital: "Brasilia",
      },
  
    {
      img: "https://en.wikipedia.org/wiki/Flag_of_Iceland#/media/File:Flag_of_Iceland.svg",
      name: "ICELAND",
      population: "334,300",
      region: "Europe",
      capital: "Reykjavik",
    },
  
    {
      img: "https://en.wikipedia.org/wiki/Flag_of_Afghanistan#/media/File:Flag_of_Afghanistan.svg",
      name: "Afghanistan",
      population: "27,657,145",
      region: "Asia",
      capital: "Kabul",
    },
  
    {
      img: "https://en.wikipedia.org/wiki/%C3%85land_Islands#/media/File:Flag_of_%C3%85land.svg",
      name: "Åland Islands",
      population: "28,875",
      region: "Europe",
      capital: "Mariehamn",
    },
  
    {
      img: "https://en.wikipedia.org/wiki/Flag_of_Albania#/media/File:Flag_of_Albania.svg",
      name: "Albana",
      population: "2,886,026",
      region: "Europe",
      capital: "Tirana",
    },
  
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg",
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
  
  
  
  