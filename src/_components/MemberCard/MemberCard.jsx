// isme member card bna dena
//  and then use that component in the our team page
import React from "react";

// Component for displaying a single member's information
const MemberCard = ({ name, image, socialLinks }) => {
  return (
    <div style={styles.card}>
      {/* Display member's image */}
      <img src={image} alt={name} style={styles.image} />
      {/* Display member's name */}
      <h3>{name}</h3>
      <div style={styles.socialLinks}>
        {/* Loop through social links and display each one */}
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={link.icon} alt={link.name} style={styles.socialIcon} />
          </a>
        ))}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "10px",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
  socialIcon: {
    width: "24px",
    height: "24px",
  },
};

export default MemberCard;
