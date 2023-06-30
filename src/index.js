import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { DatePicker, message, Alert } from 'antd';
import './index.css';

const App = () => {
  const [date, setDate] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const handleChange = (value) => {
    messageApi.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  return (
    <div style={{ width: 400, margin: '100px auto' }}>
     
      <div style={{ marginTop: 20 }}>
        <Alert message="Selected Date" description= {date ? date.format('YYYY-MM-DD') : 'None'} />
      </div>
      {contextHolder}
    </div>
  );
};

createRoot(document.getElementById('root')).render(<App />);