import React from 'react';
import MenuCard from './MenuCard';

const Menu = () => {

    const menuData = [
        {
            id: 1,
            img: "/src/assets/img/pizza1.webp",
            title: "Margarita Marvel",
            price: "16.99",
        },
        {
            id: 2,
            img: "/src/assets/img/pizza2.webp",
            title: "Pesto Paradise",
            price: "16.99",
        },
        {
            id: 3,
            img: "/src/assets/img/pizza3.webp",
            title: "Hawaiian Bliss",
            price: "16.99",
        },
        {
            id: 4,
            img: "/src/assets/img/pizza4.webp",
            title: "Truffle Treasures",
            price: "16.99",
        },
        {
            id: 5,
            img: "/src/assets/img/pizza5.webp",
            title: "Farmhouse Harvest",
            price: "16.99",
        },
        {
            id: 6,
            img: "/src/assets/img/pizza6.webp",
            title: "Cheese Frenzy",
            price: "16.99",
        }
    ];
    return (
        <div className='min-h-screen container flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-semibold text-center pt-24'>Our Specialties</h1>

            <div className=' grid grid-cols-md:grid-cols-2 lg:grid-cols-3 mt-8 gap-5 px-0 md:px-10'>
                {menuData.map(item => (
                    <MenuCard
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Menu;
