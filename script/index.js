function Vehicle (carName,carSpeed,X,Y ) {
    this.name = carName;
    this.speed = carSpeed;
    this.carX = X;
    this.carY = Y;
    this.move = function(newX,newY){
        this.carX = newX;
        this.carY = newY;
    };
}

function Car (Vehicle, horsePower){
    this.horsePower = horsePower;
    this.beep = function(){
        console.log('BEEEEEEEEEEEEP');
    }
}


const bmw = new Car(new Vehicle('Kiki','70',20,30), 1000);
bmw.beep();
bmw.move(200,100);
console.log(bmw);