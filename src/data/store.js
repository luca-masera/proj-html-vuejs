import { reactive } from "vue";
export const store = reactive({


    list: [
        {
            name: 'Home',
            sections: [
                {
                    title: 'MaxCoach Education'
                },
                {
                    title: 'Course Portal'
                },
                {
                    title: 'Distant Learning'
                },
                {
                    title: 'Multimedia Pedagogy'
                },
                {
                    title: 'Modern Schooling'
                },
                {
                    title: 'Remote Trainng'
                },
                {
                    title: 'Health Coaching'
                },
                {
                    title: 'Gym Coaching'
                },
                {
                    title: 'Business'
                },
                {
                    title: 'Artist'
                },
                {
                    title: 'Kitchen Coach'
                },
                {
                    title: 'Motivation'
                },
                {
                    title: 'Dancing'
                },
                {
                    title: 'Guitar'
                },
                {
                    title: 'Yoga'
                },
                {
                    title: 'Photography'
                },
                {
                    title: 'Personal Finance'
                },
                {
                    title: 'Sales Coaching'
                },
                {
                    title: 'Mental Therapy'
                },
                {
                    title: '/images/menu.jpg'
                }


            ],
        },

        {
            name: 'Pages',
            sections: [
                {
                    title: 'Start Here'
                },
                {
                    title: 'Success Story'
                },
                {
                    title: 'About me'
                },
                {
                    title: 'About us 01'
                },
                {
                    title: 'About us 02'
                },
                {
                    title: 'About us 03'
                },
                {
                    title: 'Contact me'
                },
                {
                    title: 'Contact us'
                },
                {
                    title: 'Purchase Guide'
                },
                {
                    title: 'Privacy Policy'
                },
                {
                    title: 'Terms of Service'
                },
            ]
        },
        {
            name: 'Courses',
            sections: [
                {
                    title: 'Courses Grid 01'
                },
                {
                    title: 'Courses Grid 02'
                },
                {
                    title: 'Courses Grid 03'
                },
                {
                    title: 'Membership Levels'
                },
                {
                    title: 'Become a Teacher'
                },
                {
                    title: 'Profile'
                },
                {
                    title: 'Checkout'
                },
                {
                    title: 'Single Layout'
                },
                {
                    title: 'Purchase Guide'
                }
            ]
        },
        {
            name: 'Features',
            sections: [
                {
                    title: 'Events'
                },
                {
                    title: 'Zoom Meetings'
                }
            ]
        },
        {
            name: 'Blog',
            sections: [
                {
                    title: 'Blog Grid'
                },
                {
                    title: 'Blog Masonry'
                },
                {
                    title: 'Blog Classic'
                },
                {
                    title: 'Blog List'
                }
            ]
        },
        {
            name: 'Shop',
            sections: [
                {
                    title: 'Shop left Sidebar'
                },
                {
                    title: 'Shop Right Sidebar'
                },
                {
                    title: 'Card'
                },
                {
                    title: 'Wishlist'
                },
                {
                    title: 'Single Product'
                }
            ]
        }

    ],


    cards: [
        {
            "price": "$40.00",
            "photo": '/images/05.jpg',
            "title": "Learning to Write as a Professional Author",
            "lessons": "20 Lessons",
            "students": "50 Students"
        },
        {
            "price": "Free",
            "photo": '/images/01.jpg',
            "title": "Customer-centric Info-Tech Strategies",
            "lessons": "24 Lessons",
            "students": "769 Students"
        },
        {
            "price": "$19.00",
            "photo": '/images/02.jpg',
            "title": "Open Programming Courses for Everyone: Python",
            "lessons": "17 Lessons",
            "students": "62 Students"
        },

        {
            "price": "$26.00",
            "photo": '/images/04.jpg',
            "title": "Academic Listening and Note-taking",
            "lessons": "14 Lessons",
            "students": "67 Students"
        },
        {
            "price": "$39.00",
            "photo": '/images/06.jpg',
            "title": "Master jQuery in a Short Period of Time",
            "lessons": "6 Lessons",
            "students": "51 Students"
        },
        {
            "price": "$59.00",
            "photo": '/images/03.jpg',
            "title": "Introduction to Javascript for Beginners",
            "lessons": "14 Lessons",
            "students": "76 Students"
        }
    ],

    lista: [

        {
            name: 'Address',
            sections: [

                {
                    "text": "382 NE 191st St # 87394 Miami, FL 33179-3899",
                },
                {
                    "text": "+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)",
                },
                {
                    "text": "support@maxcoach.com",
                }
            ]
        },
        {
            name: 'Explore',
            sections: [

                {
                    name: 'Start here'
                },
                {
                    name: 'Blog'
                },
                {
                    name: 'About us'
                }
            ]
        },
        {
            name: '',
            sections: [
                {
                    name: 'Sucess story'
                },
                {
                    name: 'Courses'
                },
                {
                    name: 'Contact us'
                },
            ]
        },
        {
            name: 'Information',
            sections: [

                {
                    name: 'Membership'
                },
                {
                    name: 'Purchase guide'
                },
                {
                    name: 'Privacy policy'
                },
                {
                    name: 'Terms of services'
                }
            ]
        }



    ],
    card: [


        {
            "title": "It's a choice of quality for people with special needs",
            "text": 'Im a very strict person so I require everything to be organized and neat. Then, Ill be able to make things right and shine.MaxCoach guys just got me.',
            "image": '/images/florence.jpg',
            "name": "FLORENCE THEMES",
            "activity": "/ Multimedia Admin"
        },
        {
            "title": "High level of efficiency and scientific teaching methods",
            "text": 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus.Great study portal for people like me.',
            "image": '/images/mina.jpg',
            "name": "MINA HOLLACE",
            "activity": "/ Freelancer"
        },
        {
            "title": "Professional team of specialists and passionate mentors at reach",
            "text": 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
            "image": '/images/madley.jpg',
            "name": "MADLEY PONDOR",
            "activity": "/ IT Specialist"
        }

    ]

})








