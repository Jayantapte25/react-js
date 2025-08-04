import React from 'react';

export const NotificationBox = ({ type, title, description }) => {
    const [isVisible, setIsVisible] = React.useState(true);

    if (!isVisible) {
        return null;
    }

    return (
        <div className={`box ${type}`}>
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
            <button className='btn' onClick={() => setIsVisible(false)}>Dismiss</button>
        </div>
    );
};
