import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";
export const navigationLinks = [
    { id: 1, title: 'Overview', image: iconsImgs.union },
    { id: 2, title: 'Monitors', image: iconsImgs.bell },
    { id: 3, title: 'Incidents', image: iconsImgs.calendar },
    { id: 4, title: 'StatusPage', image: iconsImgs.calendar },
    { id: 5, title: 'Reporting', image: iconsImgs.calendar },
    { id: 6, title: 'Contact points', image: iconsImgs.notification },
    { id: 7, title: 'Notification Policies', image: iconsImgs.notification },
    { id: 8, title: 'Maintenance', image: iconsImgs.setting },
    { id: 9, title: 'Who’s on Call ', image: iconsImgs.notification },
    { id: 10, title: 'Workflows', image: iconsImgs.notification },
    { id: 11, title: 'Schedules', image: iconsImgs.setting },
    { id: 12, title: 'Settings', image: iconsImgs.setting },
    { id: 13, title: 'Incidents', image: iconsImgs.setting },
    { id: 14, title: 'Insights', image: iconsImgs.setting },
    { id: 15, title: 'Settings', image: iconsImgs.setting },
    { id: 16, title: 'Account', image: iconsImgs.setting },
    { id: 17, title: 'Help & Support', image: iconsImgs.setting },
    { id: 18, title: 'Logout', image: iconsImgs.setting },

];

export const transactions = [
    {
        id: 11, 
        name: "Sarah Parker",
        image: personsImgs.person_four,
        date: "23/12/04",
        amount: 22000
    },
    {
        id: 12, 
        name: "Krisitine Carter",
        image: personsImgs.person_three,
        date: "23/07/21",
        amount: 20000
    },
    {
        id: 13, 
        name: "Irene Doe",
        image: personsImgs.person_two,
        date: "23/08/25",
        amount: 30000
    }
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 45,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "Subscriptions",
        type: "Automated",
        amount: 22000
    },
    {
        id: 20, 
        title: "Loan Payment",
        type: "Automated",
        amount: 16000
    },
    {
        id: 21, 
        title: "Foodstuff",
        type: "Automated",
        amount: 20000
    },
    {
        id: 22, 
        title: "Subscriptions",
        type: null,
        amount: 10000
    },
    {
        id: 23, 
        title: "Subscriptions",
        type: null,
        amount: 40000
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "LinkedIn",
        due_date: "23/12/04",
        amount: 20000
    },
    {
        id: 25,
        title: "Netflix",
        due_date: "23/12/10",
        amount: 5000
    },
    {
        id: 26,
        title: "DSTV",
        due_date: "23/12/22",
        amount: 2000
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 250000,
        title: "Pay kid bro’s fees",
        date_taken: "23/12/22",
        amount_left: 40000
    }
]