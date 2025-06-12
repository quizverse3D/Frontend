// Простой сервис логирования ошибок
export function logError(error, errorInfo) {
  // Логирование в консоль
  console.error('App Error:', error, errorInfo);
  // Здесь можно добавить отправку ошибок на сервер или в сторонний сервис
} 