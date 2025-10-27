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

    console.log('Sending WhatsApp with variables:', {
      customerName,
      formattedDate,
      appointmentTime,
      servicesList,
      total: total.toString(),
      paymentMethod: paymentMethod === 'card' ? 'Paid' : 'Pay at appointment'
    });

    // ✅ Send to Customer using approved template
    const customerMessage = await client.messages.create({
      from: `whatsapp:${twilioPhoneNumber}`,
      to: `whatsapp:${formatToE164(customerPhone)}`,
      contentSid: 'HX237e7fbe20e0ece1ecb25cfc427a3447',
      contentVariables: JSON.stringify({
        "1": customerName,
        "2": formattedDate,
        "3": appointmentTime,
        "4": servicesList,
        "5": total.toString(),
        "6": paymentMethod === 'card' ? 'Paid' : 'Pay at appointment',
        "7": salonOwnerPhone
      })
    });

    // ✅ Send to Owner using approved template
    const ownerMessage = await client.messages.create({
      from: `whatsapp:${twilioPhoneNumber}`,
      to: `whatsapp:${formatToE164(salonOwnerPhone)}`,
      contentSid: 'HXe2355acccb1c841e9da1b6b7e750394f',
      contentVariables: JSON.stringify({
        "1": customerName,
        "2": formattedDate,
        "3": appointmentTime,
        "4": servicesList,
        "5": total.toString(),
        "6": paymentMethod === 'card' ? 'Paid' : 'Pay at appointment',
        "7": customerPhone
      })
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
