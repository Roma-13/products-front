import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from "./categories.module.css";
import IMG1 from "../../../assets/99e99428e348aa46b08de96da6e92ad5.png";
import IMG2 from "../../../assets/images.png";

const categories = [
    {
        id: 1,
        title: 'სანტექნიკა',
        image: IMG1,
        links: ["მილები", "საკანალიზაციო მილები", "ონკანები", "სამზარეულოს ონკანები"]
    },
    {
        id: 2,
        title: 'ელექტროობა',
        image: IMG2,
        links: ["კაბელი", "ელექტრო-სამონტაჟო აქსესუარები", "ხელსაწყოები", "ჩამრთველები"]
    },
    {
        id: 3,
        title: 'ელექტროობა',
        image: IMG2,
        links: ["კაბელი", "ელექტრო-სამონტაჟო აქსესუარები", "ხელსაწყოები", "ჩამრთველები"]
    },
    {
        id: 4,
        title: 'სანტექნიკა',
        image: IMG1,
        links: ["მილები", "საკანალიზაციო მილები", "ონკანები", "სამზარეულოს ონკანები"]
    },
    {
        id: 5,
        title: 'სანტექნიკა',
        image: IMG1,
        links: ["მილები", "საკანალიზაციო მილები", "ონკანები", "სამზარეულოს ონკანები"]
    },
    {
        id: 6,
        title: 'ელექტროობა',
        image: IMG2,
        links: ["კაბელი", "ელექტრო-სამონტაჟო აქსესუარები", "ხელსაწყოები", "ჩამრთველები"]
    },
];

const Categories = () => {
    return (
        <div className={styles.container}>
            <h1>კატეგორიები</h1>
            <div className={styles.grid}>
                {categories.map(category => (
                    <div className={styles.card} key={category.id}>
                        <h2>{category.title}</h2>
                        {category.links.map((link, index) => (
                            <div key={index}>
                                <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
                            </div>
                        ))}
                            <Link to="/products" className={`${styles.viewMoreButton} ${styles.a}`}>View More</Link>
                            <img src={category.image} alt={`Image for ${category.title}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
