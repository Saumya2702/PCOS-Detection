import React, { useState } from 'react';

const CycleTracker = () => {
  const [startDate, setStartDate] = useState('');
  const [periodLength, setPeriodLength] = useState(5); // Default period length
  const [predictions, setPredictions] = useState([]);
  const averageCycleLength = 28; // Average cycle length

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handlePeriodLengthChange = (e) => {
    setPeriodLength(parseInt(e.target.value, 10));
  };

  const calculatePredictions = () => {
    const start = new Date(startDate);
    let cycles = [];

    for (let i = 0; i < 12; i++) { // predict for the next 12 cycles
      let cycleStart = new Date(start);
      cycleStart.setDate(cycleStart.getDate() + (i * averageCycleLength));
      let cycleEnd = new Date(cycleStart);
      cycleEnd.setDate(cycleEnd.getDate() + periodLength - 1);
      cycles.push({
        start: cycleStart.toDateString(),
        end: cycleEnd.toDateString(),
      });
    }

    setPredictions(cycles);
  };

  return (
    <div className="cycle-tracker">
      <h1>Menstrual Cycle Tracker</h1>
      <div className="input-section">
        <label>
          Start Date:
          <input type="date" value={startDate} onChange={handleStartDateChange} />
        </label>
        <label>
          Period Length (days):
          <input type="number" value={periodLength} onChange={handlePeriodLengthChange} min="2" max="7" />
        </label>
        <button onClick={calculatePredictions}>Predict</button>
      </div>
      <div className="calendar">
        <h2>Predicted Cycles</h2>
        <h4>(On an average cycle length of 28 days!)</h4>
        <div className="calendar-grid">
          {predictions.map((prediction, index) => (
            <div key={index} className="calendar-cell">
              <span>Cycle {index + 1}</span>
              <span>{prediction.start} - {prediction.end}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CycleTracker;
