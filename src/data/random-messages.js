import moment from 'moment';

export default [
    {
        subject: 'Confirm your subscription',
        content: `
            <p>Hello Nick,</p>
            <p>Thank you for subscribing to our newsletter!</p>
            <p>Before we can start spamming your mailbox, please confirm your subscription by clicking the below link.</p>
            <p><a href="#">Confirm Subscription</a></p>
            <p>Thanks again!</p>
        `,
        isImportant: false,
        isSelected: false,
        isDeleted: false,
        isRead: false,
        type: 'incoming',
        date: moment(),
        from: {
            name: 'Coding Explained',
            email: 'irony@codingexplained.com'
        },
        attachments: []
    },
    {
        subject: 'CrunchBase Daily',
        content: `
            <p>Here's what happened yesterday.</p>
            <ul>
                <li>Seed Capital announced a $1 billion investment in Coding Explained. The company's CEO, Nick Renteria, comments that he is proud of the investment, and that this capital was needed for completing the company's major project; its Vue.js course.</li>
                <li>Coding Explained's YouTube channel once again sets new view record, for the 400th day in a row.</li>
                <li>Cats are still cute, according to major research carried out by Gartner. "Shocking," the company states in its latest press release, following the breaking news.</li>
            </ul>
            <p>Try to pay more attention next time.</p>
        `,
        isImportant: false,
        isSelected: false,
        isDeleted: false,
        isRead: false,
        type: 'incoming',
        date: moment(),
        from: {
            name: 'CrunchBase',
            email: 'daily@crunchbase.com'
        },
        attachments: []
    },
    {
        subject: 'Design',
        content: `
            <p>Hey Nick, here's the design that you requested.</p>
            <p>Let me know what you think. Hope you like it!</p>
            <p>Sarah</p>
        `,
        isImportant: false,
        isSelected: false,
        isDeleted: false,
        isRead: false,
        type: 'incoming',
        date: moment(),
        from: {
            name: 'Sarah',
            email: 'sarah-designer@gmail.com'
        },
        attachments: [
            {
                fileName: 'design.psd',
                size: 14700000
            }
        ]
    },
    {
        subject: 'Meet Local Singles',
        content: `
            <p>Hey Nick,</p>
            <p>Click the link below and check out our totally legitimate website full of very real singles in your area who definitely want to be more than friends and not steal your identity.</p>
            <p>What are you scared of? Having too much fun? ;)</p>
            <a href="#">Hot Local Singles</a>
        `,
        isImportant: false,
        isSelected: false,
        isDeleted: false,
        isRead: false,
        type: 'incoming',
        date: moment(),
        from: {
            name: 'noreply',
            email: 'noreply@notascam.com'
        },
        attachments: []
    },
    {
        subject: 'I Need Help!',
        content: `
            <p>Hello Nick, I am in desperate need of help!</p>
            <p>I am a recently dethroned Nigerian prince, and the heir to an enormous royal fortune. ButI need your help to regain power and access to my fortune!</p>
            <p>But I need to bribe my way back to the top. Just send me $5,000 to regain control, and I promise I will make it worth your while! Click the loink below to my PayPal page. You must hurry!</p>
            <a href="#">Pay me so I can pay you!</a>
            <br>
            <p>Sincerely,</p>
            <p>Prince Omaku</p>
        `,
        isImportant: false,
        isSelected: false,
        isDeleted: false,
        isRead: false,
        type: 'incoming',
        date: moment(),
        from: {
            name: 'Nigerian Prince',
            email: 'princeomaku@gmail.com'
        },
        attachments: []
    },
    {
        subject: 'New Sketches',
        content: `
            <p>Hey Nick, here are those skecthes you asked me to work on for you.</p>
            <p>Let me know what you think. Hope you like it!</p>
            <p>Sarah</p>
        `,
        isImportant: false,
        isSelected: false,
        isDeleted: false,
        isRead: false,
        type: 'incoming',
        date: moment(),
        from: {
            name: 'Sarah',
            email: 'sarah-designer@gmail.com'
        },
        attachments: [
            {
                fileName: 'sketches.pdf',
                size: 553400000
            }
        ]
    },
    {
        subject: 'Baby Pics',
        content: `
            <p>Hi!</p>
            <p>New pictures of baby Horace! See you next weekend!</p>
        `,
        isImportant: false,
        isSelected: false,
        isDeleted: false,
        isRead: false,
        type: 'incoming',
        date: moment(),
        from: {
            name: 'Alex',
            email: 'alexisity@me.com'
        },
        attachments: [
            {
                fileName: 'IMG_0000343.jpg',
                size: 58200000
            },
            {
                fileName: 'IMG_0000344.jpg',
                size: 58200000
            },
            {
                fileName: 'IMG_0000345.jpg',
                size: 58200000
            },
            {
                fileName: 'IMG_0000347.jpg',
                size: 58200000
            },
            {
                fileName: 'IMG_0000348.jpg',
                size: 58200000
            },
            {
                fileName: 'IMG_0000350.jpg',
                size: 58200000
            }
        ]
    },
    {
        subject: 'Security Alert',
        content: `
            <p>Hello,</p>
            <br>
            <p>We have noticed some unusual activity on your account. Please change your password ASAP.</p>
            <br>
            <p>Google Support</p>
            <p><a href="#">google.support.com</a></p>
        `,
        isImportant: false,
        isSelected: false,
        isDeleted: false,
        isRead: false,
        type: 'incoming',
        date: moment(),
        from: {
            name: 'Google',
            email: 'no-reply@google.support.com'
        },
        attachments: []
    },
    {
        subject: 'New Bill Ready to View',
        content: `
            <p>Hello Nick,</p>
            <p>Your new bill for Georgia Power & Gas is now available for viewing and payment. To view your bill and pay online, <a href="#">click here.</a></p>
            <br>
            <p><strong>Account Number: 97887-83000-48998</strong></p>
            <p><strong>Balance Due: $45.93</strong></p>
            <p><strong>Due Date: 05/06/2020</strong></p>
            <br>
            <p>Thank you</p>
        `,
        isImportant: false,
        isSelected: false,
        isDeleted: false,
        isRead: false,
        type: 'incoming',
        date: moment(),
        from: {
            name: 'Georgia Power & Gas',
            email: 'billing@gpg.com'
        },
        attachments: []
    },
    {
        subject: 'New Pull Request',
        content: `
            <p>Dear Nick,</p>
            <p>You have a new pull request. <a href="#">Click here to view it.</a></p>
            <p>GitHub Team</p>
        `,
        isImportant: false,
        isSelected: false,
        isDeleted: false,
        isRead: false,
        type: 'incoming',
        date: moment(),
        from: {
            name: 'GitHub',
            email: 'no_reply@github.com'
        },
        attachments: []
    }
]