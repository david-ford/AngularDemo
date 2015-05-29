(function () {
    var mongoose = require('mongoose');

    var courseSchema = mongoose.Schema({
        title: {type: String, required: '{PATH} is required!'},
        featured: {type: Boolean, required: '{PATH} is required!'},
        published: {type: Date, required: '{PATH} is required!'},
        tags: [String]
    });

    var Course = mongoose.model('Course', courseSchema);

    function createDefaultCourses() {
        Course.find({}).exec(function (err, collection) {
            if (collection.length === 0) {
                Course.create({
                    title: 'Angular 101',
                    featured: false,
                    published: new Date('2/12/2010'),
                    tags: ['Angular']
                });
                Course.create({
                    title: 'Whats it MEAN',
                    featured: true,
                    published: new Date('8/16/2013'),
                    tags: ['JavaScript']
                });
                Course.create({
                    title: 'Ten ways to optimize',
                    featured: true,
                    published: new Date('3/30/2015'),
                    tags: ['Standards']
                });
                Course.create({
                    title: 'SEO: When should it happen',
                    featured: false,
                    published: new Date('9/15/2015'),
                    tags: ['Coding']
                });
                Course.create({
                    title: 'Javascript made easy',
                    featured: true,
                    published: new Date('11/5/2015'),
                    tags: ['JavaScript']
                });
                Course.create({
                    title: 'Whats my object',
                    featured: true,
                    published: new Date('12/2/2014'),
                    tags: ['C#']
                });
                Course.create({
                    title: 'TDD: How does it work',
                    featured: true,
                    published: new Date('6/8/2014'),
                    tags: ['Coding']
                });
                Course.create({
                    title: 'Angular best practices',
                    featured: false,
                    published: new Date('4/9/2014'),
                    tags: ['Angular']
                });
                Course.create({
                    title: 'Where\'s the fun in that?',
                    featured: true,
                    published: new Date('1/11/2013'),
                    tags: ['Standards']
                });
                Course.create({
                    title: 'The great wall of code',
                    featured: false,
                    published: new Date('12/16/2013'),
                    tags: ['Standards']
                });
                Course.create({
                    title: 'Troubleshooting angular',
                    featured: false,
                    published: new Date('3/4/2005'),
                    tags: ['Angular']
                });
                Course.create({
                    title: 'Good Code, Bad Code',
                    featured: true,
                    published: new Date('2/14/2012'),
                    tags: ['Angular']
                });
                Course.create({
                    title: 'Insanity driven development',
                    featured: true,
                    published: new Date('7/19/2011'),
                    tags: ['Management']
                });
                Course.create({
                    title: 'Agile 101',
                    featured: false,
                    published: new Date('8/10/2008'),
                    tags: ['Agile']
                });
                Course.create({
                    title: 'Your guide to Scrum in fifteen minutes',
                    featured: true,
                    published: new Date('10/11/2012'),
                    tags: ['Scrum']
                });
            }
        })
    }

    exports.createDefaultCourses = createDefaultCourses;
})();
