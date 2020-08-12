class GradeForm {
    constructor(formElement) {
        this.formElement = formElement
        this.handleSubmit = this.handleSubmit.bind(this)
        this.formElement.addEventListener('submit', this.handleSubmit)
    }

    onSubmit(createGrade) {
        this.createGrade = createGrade
    }

    handleSubmit(event) {
        event.preventDefault()
        var newForm = new FormData(event.target)
        var nameInForm = newForm.get('name')
        var courseInForm = newForm.get('course')
        var gradeInForm = newForm.get('grade')
        this.createGrade(nameInForm, courseInForm, gradeInForm)
        event.target.reset(newForm)
    }
}

