import { useState } from 'react';
import Hero from '../components/Hero';
import GalleryImage from '../components/GalleryImage';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  
  const images = [
    {
      src: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public",
      alt: "Single Room Interior",
      category: "rooms"
    },
    {
      src: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public",
      alt: "Building Exterior",
      category: "exterior"
    },
    {
      src: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public",
      alt: "Building View",
      category: "exterior"
    },
    {
      src: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public",
      alt: "Campus Buildings",
      category: "campus"
    },
    {
      src: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public",
      alt: "Modern Building",
      category: "exterior"
    },
    {
      src: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public",
      alt: "Study Room",
      category: "facilities"
    },
    {
      src: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public",
      alt: "Double Room",
      category: "rooms"
    },
    {
      src: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public",
      alt: "Common Room",
      category: "facilities"
    },
    {
      src: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public",
      alt: "Kitchen Facilities",
      category: "facilities"
    },
    {
      src: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public",
      alt: "Campus Surroundings",
      category: "campus"
    },
    {
      src: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public",
      alt: "Studio Apartment",
      category: "rooms"
    },
    {
      src: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public",
      alt: "Fitness Area",
      category: "facilities"
    }
  ];
  
  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(image => image.category === filter);
  
  return (
    <>
      <Hero 
        image="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public"
        title={
          <h1 className="text-5xl mb-5 font-bold">
            Photo Gallery
          </h1>
        }
        subtitle="Take a visual tour of our accommodation and facilities"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl text-black mb-5 title">Explore Montana</h2>
            <p className="text-lg text-montana-dark mb-8">
              Browse through images of our accommodation, facilities, and surroundings to get a feel 
              for the Montana student living experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-montana-secondary text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${filter === 'rooms' ? 'bg-montana-secondary text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setFilter('rooms')}
              >
                Rooms
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${filter === 'facilities' ? 'bg-montana-secondary text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setFilter('facilities')}
              >
                Facilities
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${filter === 'exterior' ? 'bg-montana-secondary text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setFilter('exterior')}
              >
                Exterior
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${filter === 'campus' ? 'bg-montana-secondary text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setFilter('campus')}
              >
                Campus
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <GalleryImage 
                key={index}
                src={image.src}
                alt={image.alt}
                category={image.category}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
