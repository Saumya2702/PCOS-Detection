import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SelfDiagnosis = () => {
    const [answers, setAnswers] = useState({
        hairGrowth: false,
        irregularPeriods: false,
        balding: false,
        familyHistory: false,
        weightGain: false,
        highBloodPressure: false,
        highCholesterol: false,
        abortions: false,
        heavyBleeding: false,
        skinRashes: false,
    });

    const [image, setImage] = useState(null);

    const handleChange = (event) => {
        const { name, checked } = event.target;
        setAnswers({ ...answers, [name]: checked });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const checkForPCOS = (answers) => {
        const symptomScores = {
            hairGrowth: 1,
            irregularPeriods: 2,
            balding: 1,
            familyHistory: 2,
            weightGain: 1,
            highBloodPressure: 1,
            highCholesterol: 1,
            abortions: 1,
            heavyBleeding: 2,
            skinRashes: 1,
        };

        let totalScore = 0;
        for (const [symptom, score] of Object.entries(symptomScores)) {
            if (answers[symptom]) {
                totalScore += score;
            }
        }

        const threshold = 5; 
        return totalScore >= threshold;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const hasPCOS = checkForPCOS(answers);
        if (hasPCOS) {
            toast.warn('Based on your symptoms, you may have PCOS. Please upload your sonographic image to be sure!');
        } else {
            toast.info('Based on your symptoms, you may not have PCOS. However, if you have concerns, please consult a healthcare provider.');
        }
    };

    const handleImageSubmit = (event) => {
        event.preventDefault();
        if (image) {
            toast.success('Image uploaded successfully!');
        } else {
            toast.error('Please upload an image.');
        }
    };

    return (
        <div className="self-diagnosis-container">
            <div className="self-diagnosis">
                <form onSubmit={handleSubmit}>
                    <h2>PCOS Self-Diagnosis</h2>
                    <div className="question">
                        <input type="checkbox" id="hairGrowth" name="hairGrowth" onChange={handleChange} />
                        <label htmlFor="hairGrowth">Extra hair growth on face, chin, or body</label>
                    </div>
                    <div className="question">
                        <input type="checkbox" id="irregularPeriods" name="irregularPeriods" onChange={handleChange} />
                        <label htmlFor="irregularPeriods">Irregular periods</label>
                    </div>
                    <div className="question">
                        <input type="checkbox" id="balding" name="balding" onChange={handleChange} />
                        <label htmlFor="balding">Male-pattern balding</label>
                    </div>
                    <div className="question">
                        <input type="checkbox" id="familyHistory" name="familyHistory" onChange={handleChange} />
                        <label htmlFor="familyHistory">Family member having history of PCOS</label>
                    </div>
                    <div className="question">
                        <input type="checkbox" id="weightGain" name="weightGain" onChange={handleChange} />
                        <label htmlFor="weightGain">Weight gain</label>
                    </div>
                    <div className="question">
                        <input type="checkbox" id="highBloodPressure" name="highBloodPressure" onChange={handleChange} />
                        <label htmlFor="highBloodPressure">High blood pressure</label>
                    </div>
                    <div className="question">
                        <input type="checkbox" id="highCholesterol" name="highCholesterol" onChange={handleChange} />
                        <label htmlFor="highCholesterol">High cholesterol</label>
                    </div>
                    <div className="question">
                        <input type="checkbox" id="abortions" name="abortions" onChange={handleChange} />
                        <label htmlFor="abortions">Any abortions</label>
                    </div>
                    <div className="question">
                        <input type="checkbox" id="heavyBleeding" name="heavyBleeding" onChange={handleChange} />
                        <label htmlFor="heavyBleeding">Heavy bleeding</label>
                    </div>
                    <div className="question">
                        <input type="checkbox" id="skinRashes" name="skinRashes" onChange={handleChange} />
                        <label htmlFor="skinRashes">Skin rashes</label>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
            <div className="image-upload">
                <form onSubmit={handleImageSubmit}>
                    <h2>Upload Image</h2>
                    <div className="image-upload-container">
                        <label className="image-upload-label" htmlFor="imageUpload">Upload sonographic or face image:</label>
                        <input type="file" id="imageUpload" name="imageUpload" accept="image/*" onChange={handleImageChange} className="image-upload-input" />
                    </div>
                    <button type="submit" className="submit-button">Upload</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SelfDiagnosis;
