import React, { useState } from 'react';
import styles from "./staff.module.css";

const Staff = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const staffMembers = [
        { id: 1, name: 'Roberto Carlos', position: 'Director' },
        { id: 2, name: 'John Doe', position: 'Manager' },
        { id: 3, name: 'Jane Smith', position: 'Developer' },
        { id: 4, name: 'Alice Johnson', position: 'Designer' },
        { id: 5, name: 'Bob Brown', position: 'Analyst' },
    ];

    const openModal = (index) => {
        setModalVisible(true);
        setSelectedImage(require(`../../assets/${index + 1}.jpg`));
    };
    

    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <div className={styles.main}>
            <div className={styles.staff}>Company Staff</div>
            <div className={styles.line}></div>
            <div className={styles.container}>
                {staffMembers.map((member, index) => (
                    <div className={styles.card} key={member.id} onClick={() => openModal(index)}>
                        <div className={`${styles.image} ${styles[`image${member.id}`]}`}></div>
                        <div className={styles.name}>{member.name}</div>
                    </div>
                ))}
            </div>

            {modalVisible && (
                <div className={styles.modal} id="modal">
                    <div className={styles.modalcontent}>
                        <img className={styles.modalimage} src={selectedImage} alt="Staff" />
                        <div className={styles.flexer}>
                            <h1>Name: <span>{staffMembers[0].name}</span></h1>
                            <h2>Position: <span>{staffMembers[0].position}</span></h2>
                        </div>
                        <span className={styles.close} onClick={closeModal}>&times;</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Staff;
