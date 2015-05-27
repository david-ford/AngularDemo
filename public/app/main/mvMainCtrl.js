angular.module('app').controller('mvMainCtrl', function($scope){
    $scope.courses = [
        {
            name: 'Angular 101',
            featured: false,
            published: new Date('2/12/2010')
        },
        {
            name: 'Whats it MEAN',
            featured: true,
            published: new Date('8/16/2013')
        },
        {
            name: 'Ten ways to optimize',
            featured: true,
            published: new Date('3/30/2015')
        },
        {
            name: 'SEO: When should it happen',
            featured: false,
            published: new Date('9/15/2015')
        },
        {
            name: 'Javascript made easy',
            featured: true,
            published: new Date('11/5/2015')
        },
        {
            name: 'Whats my object',
            featured: true,
            published: new Date('12/2/2014')
        },
        {
            name: 'TDD: How does it work',
            featured: true,
            published: new Date('6/8/2014')
        },
        {
            name: 'Angular best practices',
            featured: false,
            published: new Date('4/9/2014')
        },
        {
            name: 'Where\'s the fun in that?',
            featured: true,
            published: new Date('1/11/2013')
        },
        {
            name: 'The great wall of code',
            featured: false,
            published: new Date('12/16/2013')
        },
        {
            name: 'Troubleshooting angular',
            featured: false,
            published: new Date('3/4/2005')
        },
        {
            name: 'Good Code, Bad Code',
            featured: true,
            published: new Date('2/14/2012')
        },
        {
            name: 'Insanity driven development',
            featured: true,
            published: new Date('7/19/2011')
        },
        {
            name: 'Agile 101',
            featured: false,
            published: new Date('8/10/2008')
        },
        {
            name: 'Your guide to Scrum in fifteen minutes',
            featured: true,
            published: new Date('10/11/2012')
        }
    ]
});