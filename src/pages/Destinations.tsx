import  Hero from '../components/Hero';
import DestinationCard from '../components/DestinationCard';

const Destinations = () => {
  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxtb250YW5hJTIwbW91bnRhaW5zJTIwbGFuZHNjYXBlfGVufDB8fHx8MTc0NDQwNzg1NXww&ixlib=rb-4.0.3",
      title: "Glacier National Park",
      description: "Discover the crown jewel of Montana featuring breathtaking mountains, pristine lakes, and abundant wildlife."
    },
    {
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb250YW5hJTIwbW91bnRhaW5zJTIwbGFuZHNjYXBlfGVufDB8fHx8MTc0NDQwNzg1NXww&ixlib=rb-4.0.3",
      title: "Yellowstone National Park",
      description: "Experience the world's first national park with its famous geysers, colorful hot springs, and diverse wildlife."
    },
    {
      image: "https://images.unsplash.com/photo-1435732960391-11053ee5e6b6?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxtb250YW5hJTIwbW91bnRhaW5zJTIwbGFuZHNjYXBlfGVufDB8fHx8MTc0NDQwNzg1NXww&ixlib=rb-4.0.3",
      title: "Flathead Lake",
      description: "Enjoy the crystal-clear waters of one of America's largest natural freshwater lakes surrounded by mountains."
    },
    {
      image: "https://images.unsplash.com/photo-1498278854500-7c206daa073b?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxtb250YW5hJTIwbW91bnRhaW5zJTIwbGFuZHNjYXBlfGVufDB8fHx8MTc0NDQwNzg1NXww&ixlib=rb-4.0.3",
      title: "Big Sky Resort",
      description: "Experience world-class skiing in winter and mountain adventures in summer at this premier Montana destination."
    },
    {
      image: "https://images.unsplash.com/photo-1480497490787-505ec076689f?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxtb250YW5hJTIwbW91bnRhaW5zJTIwbGFuZHNjYXBlfGVufDB8fHx8MTc0NDQwNzg1NXww&ixlib=rb-4.0.3",
      title: "Missoula",
      description: "Discover this vibrant university town nestled in the mountains, offering cultural events and outdoor recreation."
    },
    {
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxtb250YW5hJTIwbW91bnRhaW5zJTIwbGFuZHNjYXBlfGVufDB8fHx8MTc0NDQwNzg1NXww&ixlib=rb-4.0.3",
      title: "Helena",
      description: "Explore Montana's capital city with its historic architecture, museums, and access to outdoor adventures."
    }
  ];

  return (
    <>
      <Hero 
        image="https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb250YW5hJTIwbW91bnRhaW5zJTIwbGFuZHNjYXBlfGVufDB8fHx8MTc0NDQwNzg1NXww&ixlib=rb-4.0.3"
        title="Discover Montana's Most Beautiful Destinations"
        subtitle="From majestic national parks to charming mountain towns and pristine lakes"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Explore Montana</h2>
            <p className="text-lg text-gray-700">
              Montana is home to some of America's most spectacular natural wonders and charming communities.
              Whether you seek adventure in our national parks or relaxation in our mountain towns, 
              you'll find unforgettable experiences awaiting you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard 
                key={index}
                image={destination.image}
                title={destination.title}
                description={destination.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Destinations;
 