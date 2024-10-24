import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./products.module.css";
import IMG1 from "./../../assets/1707289109360.png";
import IMG2 from "./../../assets/1713416670393.png";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("კატეგორია 1");
  const [sortOption, setSortOption] = useState("თარიღი ზრდადი");
  const [currentPage, setCurrentPage] = useState(1);
  const [cartVisible, setCartVisible] = useState(false); 
  
  const itemsPerPage = 8;

  const productsData = [
    {
      id: 1,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 2,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook ",
      price: "114.97ლ",
      imgSrc: IMG2,
      inStock: false,
      isNew: false,
      date: "2024-09-14"
    },
    {
      id: 3,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: false,
      isNew: false,
      date: "2024-03-01"
    },
    {
      id: 4,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-01-01"
    },
    {
      id: 5,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-09"
    },
    {
      id: 6,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: false,
      isNew: false,
      date: "2024-08-01"
    },
    {
      id: 7,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 8,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 9,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 10,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 11,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 12,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 13,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 14,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 15,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 16,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 17,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 18,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 19,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 20,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 21,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 22,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 23,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 24,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 25,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 26,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 27,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
    {
      id: 28,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },    {
      id: 29,
      serialNumber: "IPC3624LE-ADF28K-WL",
      name: "4 არხიანი IP ვიდეო ჩამწერი NVR - 1 მყარი დისკი, Mini, HiLook",
      price: "151.49ლ",
      imgSrc: IMG1,
      inStock: true,
      isNew: true,
      date: "2024-08-01"
    },
  ];

  const categories = ["კაბელი", "ელექტრო-სამონტაჟო აქსესუარები", "ხელსაწყოები", "ჩამრთველები","გადამრთველი","დამცველის ყუთი","ელექტრო ჩანგალი","გამანაწილებელი ყუთი","მექანიზმი","ნათურები","შიდა განათება"];

  const sortProducts = (option) => {
    const sortedProducts = [...productsData];
    switch (option) {
      case "თარიღი კლებადი":
        sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "თარიღი ზრდადი":
        sortedProducts.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "ფასი ზრდადი":
        sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case "ფასი კლებადი":
        sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case "ახალი":
        sortedProducts.sort((a, b) => (b.isNew === a.isNew) ? 0 : b.isNew ? 1 : -1);
        break;
      default:
        break;
    }
    return sortedProducts;
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const sortedProducts = sortProducts(sortOption);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const displayedProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleCartVisibility = () => {
    setCartVisible((prev) => !prev); 
  };

  const closeCart = () => {
    setCartVisible(false); 
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>პროდუქტები</h2>
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>კატეგორია</h3>
          <ul className={styles.categoryList}>
            {categories.map((category, index) => (
              <li 
                key={index} 
                className={`${styles.categoryItem} ${selectedCategory === category ? styles.active : ''}`} 
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.actionsContainer}>
            <div className={styles.dropdown}>
              <button className={styles.dropdownButton}>ფილტრი</button>
              <ul className={styles.dropdownMenu}>
                {["თარიღი ზრდადი", "თარიღი კლებადი", "ფასი ზრდადი", "ფასი კლებადი", "ახალი"].map((option) => (
                  <li key={option}>
                    <a href="#" onClick={() => handleSortChange(option)}>{option}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.shoppingCart} onClick={toggleCartVisibility}>
            <RiShoppingCart2Line />
          </div>
          {cartVisible && (
          <div className={styles.cartMenu}>
            <h3>კალათი</h3>
            <p>თქვენი კალათი ცარიელია</p>
            <button className={styles.closeButton} onClick={closeCart}>
                დახურვა
              </button>
              <Link to="/Shoppingcart">
              <button className={styles.goCart}>
                კალათაში გადასვლა
              </button>
            </Link>
          </div>
          )}
          <div className={styles.list}>
            {displayedProducts.map(product => (
              <div className={styles.item} key={product.id}>
                <div className={styles.imager}>
                  <img src={product.imgSrc} alt={product.name} />
                  <div className={styles.additional}>
                    <RiShoppingCart2Line className={styles.cartIcon} />
                  </div>
                  <div className={styles.serialnumber}>{product.serialNumber}</div>
                  <div className={styles.name}>
                    {product.name}
                    {product.isNew && <span className={styles.newLabel}> ახალი </span>}
                  </div>
                  <div className={styles.price}>{product.price}</div>
                  <div className={styles.date}>{product.date}</div>
                  <div className={`${styles.stockStatus} ${product.inStock ? styles.inStock : styles.outOfStock}`}>
                    {product.inStock ? (
                      <>
                        <FaCheck className={styles.checkIcon} />
                        მარაგშია
                      </>
                    ) : (
                      <>
                        <ImCross className={styles.crossIcon} />
                        ამოიწურა
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.pagination}>
            <button
              className={styles.pageButton}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>

            {currentPage > 2 && (
              <>
                <button className={styles.pageButton} onClick={() => handlePageChange(1)}>
                  1
                </button>
                {currentPage > 3 && '...'}
              </>
            )}

            {Array.from({ length: totalPages }, (_, index) => {
              const pageNum = index + 1;
              if (pageNum === currentPage - 1 || pageNum === currentPage || pageNum === currentPage + 1) {
                return (
                  <button
                    key={pageNum}
                    className={`${styles.pageButton} ${currentPage === pageNum ? styles.active : ''}`}
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </button>
                );
              }
              return null;
            }).reduce((acc, curr, index, array) => {
              if (curr) {
                acc.push(curr);
                if (index < array.length - 1 && array[index + 1] !== null && parseInt(curr.props.children) + 1 !== parseInt(array[index + 1].props.children)) {
                  acc.push('...'); 
                }
              }
              return acc;
            }, [])}

            {currentPage < totalPages - 1 && (
              <>
                {currentPage < totalPages - 2 && '...'}
                <button className={styles.pageButton} onClick={() => handlePageChange(totalPages)}>
                  {totalPages}
                </button>
              </>
            )}

            <button
              className={styles.pageButton}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
