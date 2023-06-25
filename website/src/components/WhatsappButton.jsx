import React from 'react';
import { Button } from './Button';

export function WhatsAppButton({ phoneNumber, message, buttonText = "Let's Talk" }) {
    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Button
            color="teal"
            className={"text-xl"}
            onClick={handleWhatsAppClick}
        >
            {buttonText}
        </Button>
    );
}
