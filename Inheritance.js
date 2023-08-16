
class Cats{
    hasFangs;
    swim;
    constructor(fang,swim){
     console.log('super construtor claddeed')
     this.hasFangs=fang
     this.swim =swim;
    }
    canSwim(){
      if(this.swim){
        console.log('yes');
      }else{
        console.log('no');
      }
    }
}

//  cat
//  const meow=new Cats(true,false);
// meow.canSwim();

class Tigers extends Cats{
     
    canHuntElephant =true;
    constructor(fang,swim){
        super(fang,swim); // for parent class
        

    }

}
// const babar= new Tigers(true,true);
// console.log(babar.canSwim());
// console.log(Math.min(2,8,4))


class Maruti {
  constructor(model ,year){
    console.log('super constructor cladded')
    this.model = model;
    this.year = year;
  }
  drive(){    
    // console.log(`Driving the ${this.model}`); // tempalte string
    console.log('Driving ' + this.model);
  
  }
}
  class Lamborghini extends Maruti {
    constructor(model,year, speed){
      super(model,year);
      this.speed = speed;
    }
    boost (){
      console.log('Boost the '+ this.model + `to speed of ` + this.speed) // string catenation
      }
    }


const marutiCar = new Maruti ( 'Suzuki', 2012);
const lamborghiniCar = new Lamborghini ('Benz', 2023, 200);
console.log(lamborghiniCar)
lamborghiniCar.boost();