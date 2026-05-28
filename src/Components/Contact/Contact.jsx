// Contact.js
import React, {useState} from 'react';
import './Contact.css';
import contacts from '../../Document/Contact/ContactData';
import LinkTree from '../../Document/Contact/LinkTree.png';
import {SiLinktree} from 'react-icons/si';
const Contact = () => {

  const [isImageFullSize, setIsImageFullSize] = useState(null);

  const toggleImageFullSize = (imageUrl) => {
    window.location.href = imageUrl;
  };

  // const contact_card = contacts.name === "address" ? "contact_card address_card" : "contact_card";

  return (
    <section id='contact' className='top'>
      <h5>Get In Touch</h5>
      <h2>Contact us</h2>
        <a className='contact_bigcard' href='https://linktr.ee/UTM_RBC'>
                <img
                  src={LinkTree}
                  alt='LinkTree'
                  className={isImageFullSize === LinkTree ? 'full-screen' : ''}
                  onClick={() => toggleImageFullSize(LinkTree)}
                />
          <h4>LinkTree</h4>
              <p className='contact_account'>UTM RBC</p>
        </a>
      <div className='contact_container'>
        {contacts.map((item) => {
          const { index, logo, name, account, link } = item;
          return (
            <div className= 'contact_card' key={index} onClick={() => window.open(link, '_blank')}>
              <div className='contact_logo'>{logo}</div>
              <h4>{name}</h4>
              <p className='contact_account'>{account}</p>
              <a href={link} target="_blank" rel="noopener noreferrer">
            Contact via {name}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
