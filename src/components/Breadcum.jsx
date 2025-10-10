import React from 'react';

export function Breadcum ({title}){
    console.log(title);
    
  return (
    <div className='bgimagebreadcumb d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
      <h3 className='text-white headingcommon'>{title}</h3>
    </div>
  );
};

