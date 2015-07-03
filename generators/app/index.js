var generators = require('yeoman-generator');

var AisGenerator = generators.Base.extend({

    prompting: function() {
        var done = this.async();

        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname
        }, function(answers) {
            this.log(answers.name);
            done();
        }.bind(this));

    },

    projectfiles: function() {
        // Process files
        this.template('_gulpfile.js', 'gulpfile.js');

        // doesn't copy empty directories...
        this.directory('app');
    }

});

module.exports = AisGenerator;
