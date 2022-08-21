import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./Contact.css";

const Contact = () => {
  return (
    <div className='Contact'>
        <ul className='ulContact'>
            <li><WhatsAppIcon/>3756446393</li>
            <li><EmailIcon/></li>
            <li><InstagramIcon/></li>
        </ul>
    </div>
  )
}

export default Contact;