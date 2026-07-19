export const whatsappOrder = (service: string) => {
  const message = `Hello Swastik EduTech,

I would like to place an order.

━━━━━━━━━━━━━━━━━━

Service: ${service}

Name:

Mobile:

Email:

Requirement:

━━━━━━━━━━━━━━━━━━

Please contact me.

Thank you!`;

  return `https://wa.me/919725444653?text=${encodeURIComponent(message)}`;
};