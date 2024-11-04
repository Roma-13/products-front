import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai"; 
import styles from "./uploader.module.css";

const Uploader = () => {
    const [features, setFeatures] = useState([]);
    const [screenSize, setScreenSize] = useState("");
    const [pii, setPii] = useState("");
    const [batteryPower, setBatteryPower] = useState("");
    const [batteryPowers, setBatteryPowers] = useState([]);
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [notification, setNotification] = useState("");
    const [error, setError] = useState("");
    const [confirmDeleteId, setConfirmDeleteId] = useState(null);
    const [deleteNotification, setDeleteNotification] = useState("");

    const availableSizes = ["15\"", "20\"", "24\"", "27\"", "32\""];
    const availablePiiOptions = ["Email", "Phone", "Location", "Battery"];

    const generateBatteryPowers = () => {
        return Array.from({ length: 10 }, (_, i) => (i + 1) * 10 + "V");
    };

    const batteryOptions = generateBatteryPowers();

    useEffect(() => {
        fetchFeatures();
    }, []);

    const fetchFeatures = async () => {
        const response = await fetch('http://localhost:5000/api/features');
        const data = await response.json();
        setFeatures(data);
    };

    const handleAddFeature = async () => {
        if (!screenSize || !pii || batteryPowers.length === 0) {
            setError("გთხოვთ მიუთითოთ ეკრანის ზომა, PII და მინიმუმ 1 ბატარიის ძალა");
            return;
        }

        const newFeature = {
            screenSize,
            pii,
            batteryPowers,
        };

        const response = await fetch('http://localhost:5000/api/features', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFeature),
        });

        if (response.ok) {
            fetchFeatures(); // Refresh the list after adding
            resetInputs();
            setNotification("Feature successfully added!");
            setTimeout(() => setNotification(""), 3000);
        }
    };

    const resetInputs = () => {
        setScreenSize("");
        setPii("");
        setBatteryPower("");
        setBatteryPowers([]);
        setError("");
    };

    const handleDeleteBatteryPower = (power) => {
        setBatteryPowers(batteryPowers.filter((p) => p !== power));
    };

    const handleDeleteFeature = (id) => {
        setConfirmDeleteId(id);
        setDeleteNotification(`ნამდვილად გსურთ წაშლა?`);
    };

    const confirmDeleteFeature = async () => {
        await fetch(`http://localhost:5000/api/features/${confirmDeleteId}`, {
            method: 'DELETE',
        });
        fetchFeatures();
        setDeleteNotification(""); 
        setConfirmDeleteId(null);
        setNotification("წარმატებით წაიშალა!");
        setTimeout(() => setNotification(""), 3000);
    };

    const cancelDelete = () => {
        setDeleteNotification(""); 
        setConfirmDeleteId(null);
    };

    return (
        <div className={styles.container}>
            <h2>ფუნქციის დამატება</h2>
            {notification && <div className={styles.notification}>{notification}</div>}
            {error && <div className={styles.errorMessage}>{error}</div>}
            {deleteNotification && (
                <div className={styles.deleteNotification}>
                    <p>{deleteNotification}</p>
                    <button onClick={confirmDeleteFeature} className={styles.confirmButton}>კი</button>
                    <button onClick={cancelDelete} className={styles.cancelButton}>არა</button>
                </div>
            )}

            {isInputVisible ? (
                <div>
                    <label htmlFor="screenSize">მიუთითეთ ეკრანის ზომა:</label>
                    <select
                        id="screenSize"
                        value={screenSize}
                        onChange={(e) => setScreenSize(e.target.value)}
                        className={styles.select}
                    >
                        <option value="">აირჩიე ზომა</option>
                        {availableSizes.map(size => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="pii">მიუთითე PII:</label>
                    <select
                        id="pii"
                        value={pii}
                        onChange={(e) => setPii(e.target.value)}
                        className={styles.select}
                    >
                        <option value="">აირჩიე PII</option>
                        {availablePiiOptions.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <div>
                        <label htmlFor="batteryPower">მიუთითე ბატარიის ძალა:</label>
                        <select
                            id="batteryPower"
                            value={batteryPower}
                            onChange={(e) => setBatteryPower(e.target.value)}
                            className={styles.select}
                        >
                            <option value="">აირჩიე ბატარიის ძალა</option>
                            {batteryOptions.map(power => (
                                <option key={power} value={power}>
                                    {power}
                                </option>
                            ))}
                        </select>
                        <button onClick={() => {
                            if (batteryPower && !batteryPowers.includes(batteryPower)) {
                                setBatteryPowers([...batteryPowers, batteryPower]);
                                setBatteryPower(""); 
                            }
                        }} className={styles.button}>
                            ბატარიის ძალების დამატება
                        </button>
                    </div>

                    <h4>ბატარიის ძალები:</h4>
                    {batteryPowers.map(power => (
                        <div key={power} className={styles.batteryPower}>
                            <span>{power}</span>
                            <button onClick={() => handleDeleteBatteryPower(power)} className={styles.deleteButton}>
                                წაშლა
                            </button>
                        </div>
                    ))}

                    <button className={styles.button} onClick={handleAddFeature}>
                        ფუნქციის დამატება
                    </button>
                </div>
            ) : (
                <div>
                    <button onClick={() => setIsInputVisible(true)} className={styles.plusButton}>
                        <AiOutlinePlus /> ფუნქციის დამატება
                    </button>
                </div>
            )}

            <h3>არსებული ფუნქციები</h3>
            {features.map(feature => (
                <div key={feature.id} className={styles.feature}>
                    <h4>ეკრანის ზომა: {feature.screenSize}</h4>
                    <h4>PII: {feature.pii}</h4>
                    <h4>ბატარიის ძალა: {feature.batteryPowers.join(", ")}</h4>
                    <button onClick={() => handleDeleteFeature(feature.id)} className={styles.deleteButton}>
                        ფუნქციის წაშლა
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Uploader;
