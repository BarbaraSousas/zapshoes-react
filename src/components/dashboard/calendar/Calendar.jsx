import React from 'react';
import { Calendar, Badge } from 'antd';

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'Delivery to Alan.' },
        { type: 'success', content: 'Delivered with Success to Bruna.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'Delivery to Alan.' },
        { type: 'success', content: 'Delivered with Success to Bruna.' },
        { type: 'error', content: 'Problem with shipping company.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'Delivery to Alan.' },
        { type: 'success', content: 'Delivered with Success to Bruna.' },
        { type: 'error', content: 'Problem with shipping company.' },
        { type: 'error', content: 'Problem with shipping company.' },
        { type: 'success', content: 'Delivered with Success to Camila.' },
        { type: 'error', content: 'Problem with shipping company.' },
        { type: 'warning', content: 'Delivery to Susanne.' },
        { type: 'warning', content: 'Delivery to Samuel.' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

function CalendarComponent() {
    return (
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
    );
}

export default CalendarComponent;