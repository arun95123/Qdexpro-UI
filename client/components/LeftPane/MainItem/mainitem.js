import React from 'react';

const mainItem = ({label, onClick}) => (
       <div onClick={onClick}>
           {label}
      </div>
);

export default mainItem;
