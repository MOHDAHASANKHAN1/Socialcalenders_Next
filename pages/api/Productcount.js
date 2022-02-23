import initDB from '../../Connector/initDB';
import Product from '../../Models/Product';

initDB();

export default async function handler(req, res) {

    const Category_Length = [];
    const Industry_Length = [];

    const optionscategory = [
        {
            value: "All",
        },
        {
            value: "Templates",
        },
        {
            value: "Calenders",
        },
        {
            value: "Books-Guides-And-Planners",
        },
        {
            value: "Email-Marketing-Kits",
        },
        {
            value: "Courses",
        },
        {
            value: "Lead-Magnets",
        },
        {
            value: "Challenges",
        },
        {
            value: "Covers",
        },
        {
            value: "Super-sale",
        }
    ];

    const optionsindustry = [
        {
            value: "Social-Media",
        },
        {
            value: "Beauty",
        },
        {
            value: "Business",
        },
        {
            value: "Cars",
        },
        {
            value: "Climate-Change",
        },
        {
            value: "Coaching",
        },
        {
            value: "Cryptocurrency",
        },
        {
            value: "DIY",
        },
        {
            value: "Education",
        },
        {
            value: "Empowerment",
        },
        {
            value: "Events",
        },
        {
            value: "Fashion",
        },
        {
            value: "Finance",
        },
        {
            value: "Fitness",
        },
        {
            value: "Floral",
        },
        {
            value: "Food",
        },
        {
            value: "Gadering",
        },
        {
            value: "Happiness",
        },
        {
            value: "Health",
        },
        {
            value: "Holiday",
        },
        {
            label: "Home",
            value: "Home",
        },
        {
            value: "Lifestyle",
        },
        {
            value: "Marketing",
        },
        {
            value: "Music",
        },
        {
            value: "Sports",
        },
        {
            value: "Nutrition",
        },
        {
            value: "Pets",
        },
        {
            value: "Podcast",
        },
        {
            value: "Real-Estate",
        },
        {
            value: "SPA",
        },
        {
            value: "Sports",
        },
        {
            value: "Therapy",
        },
        {
            value: "Travel",
        },
        {
            value: "Universal",
        },
        {
            value: "Wedding",
        },
        {
            value: "Wellness",
        },
        {
            value: "Women",
        },
        {
            value: "Yoga",
        }
    ];


    for (let index = 0; index < optionscategory.length; index++) {
        const Count = await Product.find({ category: optionscategory[index].value }).count();
        Category_Length.push(Count);
    }

    res.send(Category_Length)
}