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
    ]

})