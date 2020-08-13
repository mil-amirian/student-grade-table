class GradeTable {
    constructor(tableElement, noGradesElement) {
        this.tableElement = tableElement
        this.noGradesElement = noGradesElement
    }
    updateGrades(grades) {
        var tableBody = document.querySelector('tbody')
        while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild)
        }  
        for (let i = 0; i < grades.length; i++) {
            this.renderGradeRow(grades[i], this.deleteGrade)
        }
        if (grades.length === 0) {
            document.querySelector('p').classList.remove('hidden')
        }
    }
    onDeleteClick(deleteGrade) {
        this.deleteGrade = deleteGrade
    }

    renderGradeRow(data, deleteGrade) {
        var tableBody = document.querySelector('tbody') 

            var names = null;
            var course = null;
            var studentGrades = null;
            var studentId = null
            names = data.name
            course = data.course
            studentGrades = data.grade
            studentId = data.id
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
            var tdActions = document.createElement('td')
            var deleteBtn = document.createElement('button')
            deleteBtn.textContent = "DELETE"
            deleteBtn.className = "btn btn-danger"
            deleteBtn.addEventListener('click', function() {
                deleteGrade(data.id)
            })
            tdActions.append(deleteBtn)
            trElement.append(tdElementName, tdElementCourse, tdElementGrade, tdActions)
            tableBody.append(trElement)


        // function deleteGrade() {
        //     // deleteBtn.addEventListener('click', function () {
        //     //     for (var i = 0; i < data.length; i++) {
        //     //         console.log(data[i].id)
        //     //     }
        //     // })
        // }
    }
}