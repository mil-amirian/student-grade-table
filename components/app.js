var apiKey = "YarqQaUE"

class App {
    constructor(gradeTable) {
        this.handleGetGradesError = this.handleGetGradesError.bind(this)
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
        this.gradeTable = gradeTable
    }

    handleGetGradesError = function(error) {
        console.error(error)
    }

    handleGetGradesSuccess(grades) {
        this.gradeTable.updateGrades(grades)
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