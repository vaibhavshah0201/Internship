class parent{
    constructor(){
        this.name = "name";
        this.age = 25;
    }

    diaplayData(){
        console.log(`Parent Name is ${this.name} and age is ${this.age}`);
    }

    
}

class child1 extends parent{
    displayData(){
        console.log(`Child1 Name is ${this.name} and age is ${this.age}`);
    }
}

class child2 extends child1{
    displayData(){
        console.log(`Child2 Name is ${this.name} and age is ${this.age}`);
    }
}


obj = new child2();
obj.displayData();  