class GradeTable {
    constructor(tableElement) {
        this.tableElement = tableElement
    }
    updateGrades(grades) {
        var tableBody = tbl.lastElementChild
        while (tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild)
        }
        var names = null;
        var course = null;
        var studentGrades = null;
        for (var i = 0; i < grades.length; i++) {
            names = grades[i].name
            course = grades[i].course
            studentGrades = grades[i].grade
            var trElement = document.createElement('tr')
            trElement.className = 'table-row'
            var tdElementName = document.createElement('td')
            tdElementName.className = 'table-item'
            tdElementName.textContent = names
            var tdElementCourse = document.createElement('td')
            tdElementCourse.className = 'table-item course'
            tdElementCourse.textContent = course
            var tdElementGrade = document.createElement('td')
            tdElementGrade.className = 'table-item grade'
            tdElementGrade.textContent = studentGrades
            trElement.append(tdElementName, tdElementCourse, tdElementGrade)
            tableBody.append(trElement)
        }
    }
}