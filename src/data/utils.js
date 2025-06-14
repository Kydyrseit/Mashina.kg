import { constants } from './constants';

// Format price
export const formatPrice = (price) => {
  const { CURRENCY } = constants;
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: CURRENCY.CODE,
    minimumFractionDigits: CURRENCY.DECIMAL_PLACES,
    maximumFractionDigits: CURRENCY.DECIMAL_PLACES
  }).format(price);
};

// Format date
export const formatDate = (date, format = constants.DATE_FORMAT.DISPLAY) => {
  return new Date(date).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

// Format phone number
export const formatPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
  if (match) {
    return `+996 ${match[1]} ${match[2]} ${match[3]}`;
  }
  return phone;
};

// Format file size
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Get file extension
export const getFileExtension = (filename) => {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
};

// Check if file type is allowed
export const isFileTypeAllowed = (file) => {
  return constants.UPLOAD.ALLOWED_TYPES.includes(file.type);
};

// Check if file size is allowed
export const isFileSizeAllowed = (file) => {
  return file.size <= constants.UPLOAD.MAX_SIZE;
};

// Generate random ID
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Truncate text
export const truncateText = (text, length = 100) => {
  if (text.length <= length) return text;
  return text.substr(0, length) + '...';
};

// Get initials from name
export const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
};

// Calculate age
export const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

// Format duration
export const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}ч ${mins}м`;
};

// Calculate distance between coordinates
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
};

// Convert degrees to radians
const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};

// Generate random color
export const generateRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

// Check if object is empty
export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

// Deep clone object
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

// Get query parameters
export const getQueryParams = (url) => {
  const params = {};
  new URL(url).searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
};

// Build query string
export const buildQueryString = (params) => {
  return Object.keys(params)
    .filter(key => params[key] !== undefined && params[key] !== null)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
};

// Validate email
export const validateEmail = (email) => {
  const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return re.test(email);
};

// Validate phone
export const validatePhone = (phone) => {
  const re = /^\+996\s?\d{3}\s?\d{3}\s?\d{3}$/;
  return re.test(phone);
};

// Validate password
export const validatePassword = (password) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(password);
};

// Validate VIN
export const validateVIN = (vin) => {
  const re = /^[A-HJ-NPR-Z0-9]{17}$/;
  return re.test(vin);
};

// Get file type icon
export const getFileTypeIcon = (fileType) => {
  const icons = {
    'image/jpeg': 'image',
    'image/png': 'image',
    'image/gif': 'image',
    'application/pdf': 'pdf',
    'application/msword': 'word',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'word',
    'application/vnd.ms-excel': 'excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'excel',
    'text/plain': 'text',
    'text/csv': 'csv'
  };
  return icons[fileType] || 'file';
};

// Get file type color
export const getFileTypeColor = (fileType) => {
  const colors = {
    'image/jpeg': '#4CAF50',
    'image/png': '#4CAF50',
    'image/gif': '#4CAF50',
    'application/pdf': '#F44336',
    'application/msword': '#2196F3',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '#2196F3',
    'application/vnd.ms-excel': '#4CAF50',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '#4CAF50',
    'text/plain': '#9E9E9E',
    'text/csv': '#9E9E9E'
  };
  return colors[fileType] || '#9E9E9E';
};

// Get file type name
export const getFileTypeName = (fileType) => {
  const names = {
    'image/jpeg': 'JPEG Image',
    'image/png': 'PNG Image',
    'image/gif': 'GIF Image',
    'application/pdf': 'PDF Document',
    'application/msword': 'Word Document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'Word Document',
    'application/vnd.ms-excel': 'Excel Document',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'Excel Document',
    'text/plain': 'Text File',
    'text/csv': 'CSV File'
  };
  return names[fileType] || 'Unknown File';
};

// Get file type extension
export const getFileTypeExtension = (fileType) => {
  const extensions = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
    'application/pdf': 'pdf',
    'application/msword': 'doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
    'application/vnd.ms-excel': 'xls',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
    'text/plain': 'txt',
    'text/csv': 'csv'
  };
  return extensions[fileType] || 'unknown';
};

// Get file type mime type
export const getFileTypeMimeType = (extension) => {
  const mimeTypes = {
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'pdf': 'application/pdf',
    'doc': 'application/msword',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'xls': 'application/vnd.ms-excel',
    'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'txt': 'text/plain',
    'csv': 'text/csv'
  };
  return mimeTypes[extension.toLowerCase()] || 'application/octet-stream';
};

// Get file type category
export const getFileTypeCategory = (fileType) => {
  const categories = {
    'image/jpeg': 'image',
    'image/png': 'image',
    'image/gif': 'image',
    'application/pdf': 'document',
    'application/msword': 'document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'document',
    'application/vnd.ms-excel': 'document',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'document',
    'text/plain': 'document',
    'text/csv': 'document'
  };
  return categories[fileType] || 'other';
};

// Get file type preview
export const getFileTypePreview = (file) => {
  if (file.type.startsWith('image/')) {
    return URL.createObjectURL(file);
  }
  return null;
};

// Get file type download
export const getFileTypeDownload = (file) => {
  return URL.createObjectURL(file);
};

// Get file type upload
export const getFileTypeUpload = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return formData;
};

// Get file type delete
export const getFileTypeDelete = (file) => {
  if (file.preview) {
    URL.revokeObjectURL(file.preview);
  }
  if (file.download) {
    URL.revokeObjectURL(file.download);
  }
};

// Get file type error
export const getFileTypeError = (file) => {
  if (!isFileTypeAllowed(file)) {
    return 'Тип файла не поддерживается';
  }
  if (!isFileSizeAllowed(file)) {
    return 'Размер файла превышает допустимый';
  }
  return null;
};

// Get file type progress
export const getFileTypeProgress = (progress) => {
  return Math.round((progress.loaded * 100) / progress.total);
};

// Get file type status
export const getFileTypeStatus = (status) => {
  const statuses = {
    'uploading': 'Загрузка...',
    'success': 'Успешно',
    'error': 'Ошибка',
    'removing': 'Удаление...',
    'removed': 'Удалено'
  };
  return statuses[status] || status;
};

// Get file type status color
export const getFileTypeStatusColor = (status) => {
  const colors = {
    'uploading': '#2196F3',
    'success': '#4CAF50',
    'error': '#F44336',
    'removing': '#FF9800',
    'removed': '#9E9E9E'
  };
  return colors[status] || '#9E9E9E';
};

// Get file type status icon
export const getFileTypeStatusIcon = (status) => {
  const icons = {
    'uploading': 'upload',
    'success': 'check',
    'error': 'error',
    'removing': 'delete',
    'removed': 'delete'
  };
  return icons[status] || 'file';
};

// Get file type status message
export const getFileTypeStatusMessage = (status, error) => {
  if (status === 'error') {
    return error || 'Произошла ошибка при загрузке файла';
  }
  return getFileTypeStatus(status);
};

// Get file type status action
export const getFileTypeStatusAction = (status) => {
  const actions = {
    'uploading': 'Отмена',
    'success': 'Удалить',
    'error': 'Повторить',
    'removing': 'Отмена',
    'removed': 'Восстановить'
  };
  return actions[status] || null;
};

// Get file type status action icon
export const getFileTypeStatusActionIcon = (status) => {
  const icons = {
    'uploading': 'close',
    'success': 'delete',
    'error': 'refresh',
    'removing': 'close',
    'removed': 'restore'
  };
  return icons[status] || null;
};

// Get file type status action color
export const getFileTypeStatusActionColor = (status) => {
  const colors = {
    'uploading': '#F44336',
    'success': '#F44336',
    'error': '#2196F3',
    'removing': '#F44336',
    'removed': '#2196F3'
  };
  return colors[status] || '#9E9E9E';
};

// Get file type status action message
export const getFileTypeStatusActionMessage = (status) => {
  const messages = {
    'uploading': 'Отменить загрузку?',
    'success': 'Удалить файл?',
    'error': 'Повторить загрузку?',
    'removing': 'Отменить удаление?',
    'removed': 'Восстановить файл?'
  };
  return messages[status] || null;
};

// Get file type status action confirm
export const getFileTypeStatusActionConfirm = (status) => {
  const confirms = {
    'uploading': 'Отменить',
    'success': 'Удалить',
    'error': 'Повторить',
    'removing': 'Отменить',
    'removed': 'Восстановить'
  };
  return confirms[status] || null;
};

// Get file type status action cancel
export const getFileTypeStatusActionCancel = (status) => {
  const cancels = {
    'uploading': 'Продолжить',
    'success': 'Отмена',
    'error': 'Отмена',
    'removing': 'Продолжить',
    'removed': 'Отмена'
  };
  return cancels[status] || null;
}; 