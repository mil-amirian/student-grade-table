var tbl = document.querySelector('#table-container')
var hdrElement = document.querySelector('.avg-grade')

var newHeader = new PageHeader(hdrElement)
var newGradeTable = new GradeTable(tbl)

var newApp = new App(newGradeTable, newHeader)
newApp.start()

