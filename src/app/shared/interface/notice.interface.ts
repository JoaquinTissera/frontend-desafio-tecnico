export interface INotice {
  article_id: string; // ID único del artículo para identificación
  title: string; // Título principal de la noticia
  link: string; // URL de la noticia completa para redirección
  description: string; // Descripción/resumen de la noticia
  pubDate: string; // Fecha de publicación en formato string
  image_url: string; // URL de la imagen principal de la noticia
  creator: string[] | null; // Array de autores (puede ser null si no hay autor)
}
