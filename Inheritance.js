
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
console.log(Math.min(2,8,4))