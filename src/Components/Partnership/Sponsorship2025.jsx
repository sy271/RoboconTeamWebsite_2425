import React, { useEffect } from 'react';
import './Sponsorship2025.css';
import { sponsor } from '../../Document/Partnership/Sponsorship2025';
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaLinkedinIn } from "react-icons/fa";

const Sponsorship2025 = () => {
  const diamondSponsors = sponsor.filter((item) => item.status === 'Diamond');
  const platinumSponsors = sponsor.filter((item) => item.status === 'Platinum');
  const goldSponsors = sponsor.filter((item) => item.status === 'Gold');

  // Add smooth scroll behavior
  useEffect(() => {
    // Set smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup function to reset scroll behavior when component unmounts
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  // Preload specific images
  useEffect(() => {
    // Preload Eastern and Mi Tech logos
    const preloadImages = () => {
      const imageUrls = diamondSponsors
        .filter(item => item.name.includes("Eastern"))
        .map(item => item.image)
        .concat(
          platinumSponsors
            .filter(item => item.name.includes("Mi Tech"))
            .map(item => item.image)
        );

      imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    };

    preloadImages();
  }, [diamondSponsors, platinumSponsors]);

  const renderSponsorItem = (item) => {
    const { id, image, name, text, fbacc, facebook, igacc, instagram, youtube, ytacc, website, linkedln, linkedlnacc } = item;
    
    // Add specific classes based on sponsor name
    let imageClass = "sponsor_images";
    if (name.includes("Eastern")) {
      imageClass += " eastern-logo";
    } else if (name.includes("RS Group")) {
      imageClass += " rs-logo";
    } else if (name.includes("SMC")) {
      imageClass += " smc-logo";
    } else if (name.includes("Stratus Automation")) {
      imageClass += " stratus-logo";
    } else if (item.status === "Platinum") {
      imageClass += " platinum-logo";
    }
    
    // Determine if this logo should load eagerly (Eastern or Mi Tech)
    const loadingStrategy = 
      name.includes("Eastern") || name.includes("Mi Tech") 
        ? "eager" 
        : "lazy";
    
    return (
      <div key={id} className={`sponsor ${item.status.toLowerCase()}`}>
        <div className={imageClass}>
          <img 
            src={image} 
            alt={name}
            loading={loadingStrategy} // Prioritize specific logos
            decoding="async"
            onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/placeholder-image.png'; }} 
          />
        </div>
        <div className="sponsor_header">
          <h4>{name}</h4>
        </div>
        <div className="sponsor_details">
          <p>{text}</p>
        </div>
        <div className="social_links">
          {facebook && (
            <a href={facebook} className="btn" target="_blank" rel="noopener noreferrer">
              <BiLogoFacebook className='partnership_logo' />
              <div className="tooltiptext">{fbacc}</div>
            </a>
          )}
          {instagram && (
            <a href={instagram} className="btn" target="_blank" rel="noopener noreferrer">
              <BiLogoInstagram className='partnership_logo' />
              <div className='tooltiptext'>{igacc}</div>
            </a>
          )}
          {youtube && (
            <a href={youtube} className="btn" target="_blank" rel="noopener noreferrer">
              <AiOutlineYoutube className='partnership_logo' />
              <div className='tooltiptext'>{ytacc}</div>
            </a>
          )}
          {website && (
            <a href={website} className="btn" target="_blank" rel="noopener noreferrer">
              <CgWebsite className='partnership_logo' />
            </a>
          )}
          {linkedln && (
            <a href={linkedln} className="btn" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className='partnership_logo' />
              <div className='tooltiptext'>{linkedlnacc}</div>
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="partnership" className="top">
      <h5>Our Partners</h5>
      <h2>Partnership</h2>
      <div className="partnership_container">
        <div className="diamond_sponsors">
          <h3>Diamond Sponsors</h3>
          <div className="sponsors_grid">
            {diamondSponsors.map((item) => renderSponsorItem(item))}
          </div>
        </div>
        <div className="platinum_sponsors">
          <h3>Platinum Sponsors</h3>
          <div className="sponsors_grid">
            {platinumSponsors.map((item) => renderSponsorItem(item))}
          </div>
        </div>
        {/* <div className="gold_sponsors">
          <h3>Gold Sponsors</h3>
          <div className="sponsors_grid">
            {goldSponsors.map((item) => renderSponsorItem(item))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Sponsorship2025;
