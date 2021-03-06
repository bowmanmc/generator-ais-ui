var generators = require('yeoman-generator');

var AisGenerator = generators.Base.extend({

    prompting: function() {
        var done = this.async();

        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname,
            store: true
        }, function(answers) {
            this.name = answers.name;
            done();
        }.bind(this));

    },

    projectfiles: function() {
        var layout = [
            'app/fonts',
            'app/images',
            'app/modules/api',
            'app/modules/components',
            'app/modules/pages',
            'app/modules/services',
            'app/scripts',
            'docs',
        ];

        var dir;
        for (var i in layout) {
            dir = layout[i];
            console.log('Creating directory: ' + dir);
            this.mkdir(dir);
        }

        // Process files
        this.template('_.bowerrc', '.bowerrc');
        this.template('_.gitignore', '.gitignore');
        this.template('_.jshintrc', '.jshintrc');
        this.template('_bower.json', 'bower.json');
        this.template('_gulpfile.js', 'gulpfile.js');
        this.template('_karma.conf.js', 'karma.conf.js');
        this.template('_package.json', 'package.json');

        // doesn't copy empty directories...
        this.directory('app');
        this.directory('spec');

        this.installDependencies();
    }

});

module.exports = AisGenerator;
