import { MdSpaceDashboard } from "react-icons/md";

export const navLinks = [
    {id: 1, label: 'Demo', href: '/pricing'},
    {id: 1, label: 'Pricing', href: '#pricing'},
    {id: 1, label: 'FAQ', href: '/pricing'},
];

export const dashboardLinks = [
    {id: 1, label: 'Dashboard', href: '/dashboard/home', icon: '/icons/dashboard.png', },
    {id: 2, label: "Resumes", href: '/resume', icon: '/icons/resume.png'},
    {id: 2, label: "Cover Letters", href: '/dashboard/coverletter', icon: '/icons/document.png'},
];

export const plans = [
    {
        id: 1, 
        label: 'Pro',
        description: 'This package is perfect for the weekend job hunter, who is applying on a few jobs per week and would like to maximize those results.',
        features: [
            'Resume builder',
            '400 credits',
            'AI generated cover leters'
        ],
    },
    {
        id: 1, 
        label: 'Custom',
        description: 'This package is perfect for the active job hunter, who is applying for multiple jobs daily. This package maximizes your potential of getting hired.',
        features: [
            'Resume builder',
            '400 credits',
            'AI generated cover leters',
            'Customizable resume templates',
            'Job references'
        ]
    },
    {
        id: 1, 
        label: 'PAYG',
        description: 'This package is perfect for the casual job hunter, who applies on jobs occasionally. This package is a "Pay as you go" option that allows you to pay for what you use.',
        features: [
            'Resume builder',
            '400 credits',
            'AI generated cover leters'
        ]
    },
];