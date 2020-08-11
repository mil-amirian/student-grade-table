var tbl = document.querySelector('#table-container')

var newGradeTable = new GradeTable(tbl)

var newApp = new App(newGradeTable)
newApp.start()

