import { galleryImages } from '@/data/galleryData';

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-lg aspect-video card-glow"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
            <p className="inline-block px-3 py-2 text-xs font-medium text-white bg-black/60 backdrop-blur-sm rounded-tr-md translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out max-w-full">
              {image.alt}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
