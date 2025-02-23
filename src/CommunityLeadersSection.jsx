import React from 'react';
import './CommunityLeadersSection.css'; 

const CommunityLeadersSection = () => {
    return (
        <div className="community-leaders-section">
            <h2 className="community-leaders-heading">Community Leaders</h2>
            <div className="leaders-container">
                <div className="leader">
                    <div className="leader-image" style={{ backgroundImage: 'url(/organizer.jpg)' }}></div> 
                    <h3 className="leader-name">Aviral Mittal</h3>
                    <p className="leader-designation">Organizer</p>
                </div>
                <div className="leader">
                    <div className="leader-image" style={{ backgroundImage: 'url(/AC1.jpg)' }}></div> 
                    <h3 className="leader-name">Shubhangi Chandra</h3>
                    <p className="leader-designation">Acting General</p>
                </div>
                <div className="leader">
                    <div className="leader-image" style={{ backgroundImage: 'url(/AC2.jpg)' }}></div> 
                    <h3 className="leader-name">Mudassir Imam</h3>
                    <p className="leader-designation">Acting General</p>
                </div>
                <div className="leader">
                    <div className="leader-image" style={{ backgroundImage: 'url(/AC3.jpeg)' }}></div> 
                    <h3 className="leader-name">Parvani Sood</h3>
                    <p className="leader-designation">Acting General</p>
                </div>
            </div>
            <div className="button-container">
                <button className="contact-button">Contact Us</button>
            </div>
        </div>
    );
};

export default CommunityLeadersSection; 