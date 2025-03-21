import {Dimensions} from 'react-native';
export const DESIGN_WIDTH = 375;
export const DESIGN_HEIGHT = 812;
export const MODAL_WIDTH = 315;
export const MODAL_HEIGHT = 487;
const {width, height} = Dimensions.get('window');
export const isValidPassword = (
  password: string,
  target: string,
  type?: 'username' | 'email' | 'fullname',
) => {
  if (!type) {
    type = 'username';
  }

  const targetLowerCase = target?.toLowerCase();

  if (!password || password.length === 1) {
    return true;
  }

  if (type === 'username') {
    const usernamePart = [
      targetLowerCase,
      targetLowerCase.replace(/[0-9]/g, ''),
      targetLowerCase.replace(/[a-z]/g, ''),
    ];

    for (const part of usernamePart) {
      if (
        password.toLowerCase().includes(part) ||
        part.includes(password.toLowerCase())
      ) {
        return false;
      }
    }

    return true;
  } else if (type === 'email') {
    const [localPart, domainPart] = targetLowerCase.split('@');

    const emailPart = [targetLowerCase, localPart, domainPart];

    for (const part of emailPart) {
      if (
        password.toLowerCase().includes(part) ||
        part.includes(password.toLowerCase())
      ) {
        return false;
      }
    }

    return true;
  } else if (type === 'fullname') {
    const fullnamePart = targetLowerCase.split(' ');

    for (const part of fullnamePart) {
      if (
        password.toLowerCase().includes(part) ||
        part.includes(password.toLowerCase())
      ) {
        return false;
      }
    }

    return true;
  }

  return false;
};
export const scaleSize = (
  modalWidth: number,
  modalHeight: number,
  designWidth = DESIGN_WIDTH,
  designHeight = DESIGN_HEIGHT,
) => {
  if (width >= designWidth && height >= designHeight) {
    return {
      widthScale: modalWidth,
      heightScale: modalHeight,
    };
  } else {
    const scaleWidth = width / designWidth;
    const scaleHeight = height / designHeight;
    return {
      widthScale: modalWidth * scaleWidth,
      heightScale: modalHeight * scaleHeight,
    };
  }
};
export const formatTimeCountdown = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(
    remainingSeconds,
  ).padStart(2, '0')}`;
};
export const sendResetPasswordEmail = async (email: string) => {
  try {
    console.log(`Email đặt lại mật khẩu đã được gửi tới: ${email}`);
  } catch (error: any) {
    console.error('Lỗi khi gửi email đặt lại mật khẩu:', error.message);
    throw error; // Để xử lý thêm ở nơi gọi hàm
  }
};
