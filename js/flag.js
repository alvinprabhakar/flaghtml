let flag = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
      name: "India",
      population: "1,380,004,385",
      region: "Asia",
      capital: "Delhi",
    },
  
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Vermin_Supreme_USA_flag.svg",
      name: "USA",
      population: "331,449,281",
      region: "North America",
      capital: "Washington, D.C.",
    },
  
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
      name: "RUSSIA",
      population: "145,934,462",
      region: "northern Eurasia",
      capital: "Moscow",
    },
  
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
      name: "CHINA",
      population: "1,439,323,776",
      region: "Asia",
      capital: "Beijing",
    },
  
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
      name: "JAPAN",
      population: "126,476,461",
      region: "Asia",
      capital: "Tokyo",
    },
  
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
      name: "AUSTRALIA",
      population: "25,694,393",
      region: "Oceania",
      capital: "Canberra",
    },
  
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg",
      name: "FRANCE",
      population: "65,273,511",
      region: "Europe",
      capital: "Paris",
    },
  
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
      name: "BRAZIL",
      population: "212,559,417",
      region: "South America",
      capital: "Brasilia",
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
  
  
  
  