var gulp = require('gulp');
var gutil = require('gulp-util');
var template = require('gulp-template');
var rename = require('gulp-rename');
var conflict = require('gulp-conflict');
var inquirer = require('inquirer');
var path = require('path');



var questions = [{
    name: 'type',
    message: 'What\'s the file type you want to generate?',
    type: 'list',
    choices: ['html', 'scss', 'js']
}, {
    name: 'name',
    message: 'File\'s name?',
    validate: isEmpty
}, {
    name: 'finish',
    message: 'Generate file?',
    type: 'confirm'
}];




function generate(done) {
    return inquirer.prompt(questions)
        .then(function(answers) {
            if (!answers.finish) return done();
            addFile(answers.type, answers.name);
            gutil.log(gutil.colors.green('Yaaay!'), 'All files were generated.');
        });
}


function addFile(type, name) {

    var src = path.join(__dirname, `template/template.${type}`);
    var dest = type === 'html' ? './src' : `./src/assets/${type}`;


    gulp.src(src)
        .pipe(rename({ basename: name }))
        .pipe(conflict(dest))
        .pipe(gulp.dest(dest))
}


function isEmpty(answer) {
    return answer.replace(/ /g, '') !== '';
}



module.exports = generate;