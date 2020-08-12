var apiKey = "YarqQaUE"

class App {
    constructor(gradeTable, pageHeader) {
        this.handleGetGradesError = this.handleGetGradesError.bind(this)
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
        this.gradeTable = gradeTable
        this.pageHeader = pageHeader
    }

    handleGetGradesError = function(error) {
        console.error(error)
    }

    handleGetGradesSuccess(grades) {
        this.gradeTable.updateGrades(grades)
        var gradeTotal = 0
        for (var i = 0; i < grades.length; i++) {
            gradeTotal += grades[i].grade
        }
        var avgGrades = Math.floor(gradeTotal / grades.length)
        this.pageHeader.updateAverage(avgGrades)
        
    }

    getGrades() {
        $.ajax({
            headers: {
                "X-Access-Token": "YarqQaUE"
            },
            url: "https://sgt.lfzprototypes.com/api/grades",
            method: "GET",
            success: this.handleGetGradesSuccess,
            error: this.handleGetGradesError
        })
    }

    start() {
        this.getGrades()
    }
    
}