import hand from './Images/hand.png'
import person1 from './Images/person1.png'
import share from './Images/share.png'
import more from './Images/more.png'
import forest from './Images/forest.png'
import education from './Images/education.png'
import house from './Images/house.png'
import person2 from './Images/person2.png'
import person3 from './Images/person3.png'
import person4 from './Images/person4.png'
import meetup from './Images/meetup.png'
import car from './Images/car.png'
import job from './Images/job.png'
import jobs2 from './Images/jobs2.png'
import location from './Images/location.png'
import calender from './Images/calender.png'

const articleData = [
    {
        articleTitle: hand,
        articleImage: forest,
        articleHeader: 'What if Famous Brands had regular fonts? Meet RegularBrands!',
        articleText: "I've worked in UX for the better part of a decade . F...",
        writerImage: person1,
        views: '1.4k views',
        name: 'Sarthak Kamra',
        more: more,
        share: share
    },
    {
        articleTitle: education,
        articleImage: house,
        articleHeader: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
        articleText: "I've worked in UX for the better part of a decade . F...",
        writerImage: person2,
        views: '4.8k views',
        name: 'Sarah West',
        more: more,
        share: share
    },
    {
        articleTitle: meetup,
        articleImage: car,
        date: 'Fri, 12 Oct, 2018',
        location: 'Ahmedabad, India',
        articleHeader: 'Finance & Investment Elite Social Mixer @Lujiazui',
        writerImage: person3,
        views: '800 views',
        locationImg: location,
        jobImg: jobs2,
        calender: calender,
        visitWebsite: true,
        more: more,
        name: 'Ronal Jones',
    },
    {
        articleTitle: job,
        articleImage: null,
        jobImg: jobs2,
        job: 'Innovaccer Analytic...',
        location: 'Noida, India',
        locationImg: location,
        articleHeader: 'Software Developer - II',
        articleText: "Finance & Investment Elite Social Mixer @Lujiazui",
        writerImage: person4,
        views: '1.7k views',
        more: more,
        name: 'Joseph Gray',
    }
]

export default articleData