const Planet = require('./planet')
const conversion = require('./conversion')

const planetas = []

planetas.push(new Planet('Mercúrio',0.39))
planetas.push(new Planet('Vênus',0.72))
planetas.push(new Planet('Terra',1))
planetas.push(new Planet('Marte',1.52))
planetas.push(new Planet('Júpiter',5.2))
planetas.push(new Planet('Saturno',9.53))
planetas.push(new Planet('Urano',19.1))
planetas.push(new Planet('Neturno',30))


planetas.forEach((planet)=>{
    console.log(`Planeta: ${planet.name}\nDistância em AU: ${planet.distanceInAU}\nDistância em KM: ${conversion(planet.distanceInAU)}`)
})

