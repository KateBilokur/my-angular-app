export enum ArticleTopic {
  ARTIST = 'Аартист',
  SONG = 'Пісня',
  GENRE = 'Жанр',
  GENERAL = 'Загальне',
}

export interface ModelModernMusic {
  id: string; // Унікальний ідентифікатор для роутінгу (наприклад, UUID або slug)
  title: string;
  image_url: string; // URL до зображення
  tags: string[]; // Масив рядків для тегів/ключових слів
  short_description: string;
  full_description: string;
  date_added: string; // Рекомендується використовувати ISO 8601 формат дати (наприклад, '2025-11-28')
  // 2. Класифікація контенту
  topic: ArticleTopic;
  // 3. Специфічні поля (умовні/опціональні)
  artist_name: string; // Ім'я виконавця/гурту, про який йдеться
  // Поля, які потрібні, лише якщо тематика = 'song'
  song_title?: string; // ? робить це поле опціональним
  song_genre?: string; // ? робить це поле опціональним
}
