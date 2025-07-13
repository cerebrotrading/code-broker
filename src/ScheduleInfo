import React, { useEffect, useState } from 'react';

const ScheduleInfo = () => {
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      setDay(days[now.getDay()]);
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm text-gray-300 mb-2">
      <span role="img" aria-label="calendar">📅</span> Hoy: <span className="font-semibold">{day}</span>
      <span className="mx-2"></span>
      <span role="img" aria-label="clock">🕒</span> Hora actual: <span className="font-semibold">{time}</span>
    </div>
  );
};

export default ScheduleInfo;

