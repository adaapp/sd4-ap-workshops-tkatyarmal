class Student   {
    constructor(name, tutorgroup)   {
        this.name = name,
        this.yearGroup = tutorgroup.slice(0,2),
        this.form = tutorgroup.slice(2,3)
    }


    getName()  {
        return this.name
    }

    getYearGroup()  {
        return this.yearGroup
    }

    getForm()   {
        return this.form
    }

}