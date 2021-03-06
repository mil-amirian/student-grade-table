var apiKey = "YarqQaUE"

class App {
    constructor(gradeTable, pageHeader, gradeForm) {
        this.handleGetGradesError = this.handleGetGradesError.bind(this)
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
        this.gradeTable = gradeTable
        this.pageHeader = pageHeader
        this.gradeForm = gradeForm
        this.createGrade = this.createGrade.bind(this)
        this.handleCreateGradeError = this.handleCreateGradeError.bind(this)
        this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this)
        this.deleteGrade = this.deleteGrade.bind(this)
        this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this)
        this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this)
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
                "X-Access-Token": apiKey
            },
            url: "https://sgt.lfzprototypes.com/api/grades",
            method: "GET",
            success: this.handleGetGradesSuccess,
            error: this.handleGetGradesError
        })
    }

    createGrade(name, course, grade) {
        console.log(name, course, grade)
        $.ajax({
            headers: {
                "X-Access-Token": apiKey
            },
            url: "https://sgt.lfzprototypes.com/api/grades",
            method: "POST",
            data: {
                "name": name,
                "course": course,
                "grade": grade
            },
            success: this.handleCreateGradeSuccess,
            error: this.handleCreateGradeError
        })
    }

    handleCreateGradeError(error) {
        console.error(error)
    }
    
    handleCreateGradeSuccess() {
        this.getGrades()
    }

    deleteGrade(id) {
        console.log("milad", id)
        $.ajax({
            headers: {
                "X-Access-Token": apiKey
            },
            url: "https://sgt.lfzprototypes.com/api/grades/"+id,
            method: "DELETE",
            // data: "none",
            success: this.handleDeleteGradeSuccess,
            error: this.handleDeleteGradeError
        })
    }
    handleDeleteGradeError(error) {
        console.error(error)
    }
    handleDeleteGradeSuccess() {
        this.getGrades()
    }


    start() {
        this.getGrades()
        this.gradeForm.onSubmit(this.createGrade)
        this.gradeTable.onDeleteClick(this.deleteGrade)
    }
    
}