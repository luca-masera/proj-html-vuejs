import { reactive } from "vue";
export const store = reactive({


    list: [
        'blu',
        'rosso',
        'viola',
        'giallo'
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