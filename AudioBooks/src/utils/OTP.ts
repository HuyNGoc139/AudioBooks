import axios from 'axios';

export const handleSendOTP = async (email: string) => {
  try {
    const response = await axios.post('http://172.20.10.2:3000/api/otp/send', {
      email,
    });
    console.log('OTP has been sent to your email!', response.data);
  } catch (error) {
    console.log('Error sending OTP.', error);
  }
};
