class Teacher   {
    constructor(name, subject, initials)   {
        this.name = name,
        this.subject = subject,
        this.initials = initials,
        this.yearsOfService = 0
    }

    getName()   {
        return this.name
    }

    getInitials()   {
        return this.initials
    }

    getSubject()    {
        return this.subject
    }

    getYearsService()   {
        return this.yearsOfService
    }

    setYearsService(setYear)   {
        this.yearsOfService = setYear
    }



}