class YearGroup {
    

    var example1 = 0
    
    constructor(year, headOfYear) {
        
        // This is how you create private attributes (ES6 syntax)
        var _year = year,
        var _headOfYear = headOfYear


        // This is how I get the value from a private attribute (ES6 syntax)
        // Because you can't do this._year anymore
        this.getYear - function()   {
            return _year
        }
        this.getHeadOfYear - function()   {
            return _headOfYear
        }

    }


}


class qwerty extends YearGroup   {

    constructor()   {


    }


}




class anyClass  {

    var hello = 0
}




module.exports = YearGroup