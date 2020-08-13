var tbl = document.querySelector('#table-container')
var hdrElement = document.querySelector('.avg-grade')
var pElement = document.querySelector('p')

var newHeader = new PageHeader(hdrElement)
var newGradeTable = new GradeTable(tbl, pElement)

var formElmt = document.querySelector('form')
var newGradeForm = new GradeForm(formElmt)

var newApp = new App(newGradeTable, newHeader, newGradeForm)
newApp.start()

