const players= {
      name: 'Lebron James',
      club: 'LA Lakers',
      address: {
        city: 'Los Angeles',
        town: 'yiu'
      },
      hobies:[`eating`,`playing`,`swimming`],
      friends:[
          {
              jina:`tim`,
              home:`nai`
          },
          {
              jina:`John`,
              home:`Juja`
          }
      ]
    };


const{name, club, address: {city,town}, hobies:[hb1,hb2,hb3], friends:[  {jina,  home}] }= players 
console.log(`${name} lives  in ${city} town of ${town} and enjoys ${hb2} , ${hb1} as well as ${hb3}   `)
    
   
console.log(`his friends are ${ ... jina} living in ${ ... home}`)
