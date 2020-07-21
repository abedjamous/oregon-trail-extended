class Traveler {
    constructor (name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
        }


        hunt() {
            this.food += 2;
        }

        eat() {
            this.food -= 1;
            if(this.food < 1) {
                this.isHealthy = false;
            }

        }
    
}



class Wagon {
    constructor (capacity) {
        this.capacity = capacity;
        this.passengers = [];

    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(Traveler) {
        if(this.getAvailableSeatCount() > 0) {
             return this.passengers.push(Traveler)
        }

    }

    shouldQuarantine() {
        return this.passengers.some(passenger => passenger.isHealthy === false)
    }

    totalFood(){
        let totaLfood = 0
        for (let index = 0; index < this.passengers.length; index += 1){
              totaLfood += this.passengers[index].food
            }
            return totaLfood

    }
}



class Doctor extends Traveler{
    constructor (name) {
        super(name)
    }

    heal(Traveler){
        Traveler.isHealthy = true;
    }
}



class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2
    }
    hunt() {
        this.food += 5
    }
    eat () {
        if (this.food -= 2){ 
            return this.isHealthy = false
        }   else {
                this.food = 0
                return this.isHealthy = false
             }
    }

    giveFood(traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
        }

    }

}