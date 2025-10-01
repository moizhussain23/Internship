require('dotenv').config(); 
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // e.g. +14155238886
const salonOwnerPhone = process.env.SALON_OWNER_PHONE; // Your verified number
const client = require('twilio')(accountSid, authToken);

// Convert phone to E.164
function formatToE164(phone) {
  if (phone.startsWith('+')) return phone;
  const trimmed = phone.replace(/\D/g, '');
  return '+91' + trimmed; // default India
}

exports.sendSms = async (req, res) => {
  try {
    const {
      customerName,
      customerPhone,
      appointmentDate,
      appointmentTime,
      services,
      total,
      paymentMethod
    } = req.body;

    // Format services
    const servicesList = services
      .map(service => `${service.serviceName} - ${service.optionName}`)
      .join(', ');

    const formattedDate = new Date(appointmentDate).toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // ✅ Send to Customer
    const customerMessage = await client.messages.create({
      from: `whatsapp:${twilioPhoneNumber}`,
      to: `whatsapp:${formatToE164(customerPhone)}`,
      body: `💇‍♀️ *Beauty At Home* \n\nHello ${customerName},\nYour appointment is *confirmed* ✅\n\n📅 Date: ${formattedDate}\n⏰ Time: ${appointmentTime}\n💅 Services: ${servicesList}\n💵 Total: ₹${total}\n💳 Payment: ${paymentMethod === 'card' ? 'Paid' : 'Pay at appointment'}\n\n📞 For changes, contact us: ${salonOwnerPhone}`
    });

    // ✅ Send to Owner
    const ownerMessage = await client.messages.create({
      from: `whatsapp:${twilioPhoneNumber}`,
      to: `whatsapp:${formatToE164(salonOwnerPhone)}`,
      body: `📢 *New Booking Alert*\n\nCustomer: ${customerName}\n📅 Date: ${formattedDate}\n⏰ Time: ${appointmentTime}\n💅 Services: ${servicesList}\n💵 Total: ₹${total}\n💳 Payment: ${paymentMethod === 'card' ? 'Paid' : 'Pay at appointment'}\n📞 Phone: ${customerPhone}`
    });

    res.status(200).json({ 
      success: true, 
      message: 'WhatsApp notifications sent successfully',
      customerMessageSid: customerMessage.sid,
      ownerMessageSid: ownerMessage.sid
    });

  } catch (error) {
    console.error('Error sending WhatsApp notifications:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send WhatsApp notifications', 
      error: error.message 
    });
  }
};
