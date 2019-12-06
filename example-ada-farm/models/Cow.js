class Cow extends Animal{
    constructor(field, x, y, health = 10, lifespan = 350)   {
        super(field, x, y, health, lifespan)
        this.image = loadImage('./images/cow.png')


        setInterval(() =>   {
            this.graze()
        }, 1000)

    }

    graze = () =>   {
        if (this.hunger > 5)    {
            let random = Math.floor(Math.random() * this.field.crops.length)
            let possibleCrop = this.field.crops[random]


            if (possibleCrop)   {
                this.hunger = 0
                this.field.crops[random] = null
            }
            else{
                this.hunger++
            }




        }




    }

}