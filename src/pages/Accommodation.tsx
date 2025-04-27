
import { Check } from 'lucide-react';
import Hero from '../components/Hero';
import RoomCard from '../components/RoomCard';

const Accommodation = () => {
  const roomTypes = [
    {
      image: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public",
      title: "Single Room",
      price: "Confirmed",
      description: "Comfortable single rooms perfect for focused study and personal space.",
      features: ["Single Bed", "Study Desk", "Wardrobe", "Wi-Fi", "Shared Bathroom", "Cleaning Service"],
      rating: 4.5
    },
    {
      image: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public",
      title: "Double Room",
      price: "Confirmed",
      description: "Shared rooms offering both affordability and social living experience.",
      features: ["Two Beds", "Study Desks", "Wardrobes", "Wi-Fi", "Shared Bathroom", "Cleaning Service"],
      rating: 4.2
    }
  ];

  // Function to handle scroll to room cards
  const scrollToRoomCards = () => {
    const roomCardsSection = document.getElementById('room-cards-section');
    if (roomCardsSection) {
      roomCardsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero 
        image="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public"
        title={
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-400 mb-5">
            Accommodation Options
          </h1>
        }
        subtitle="Find the perfect room that suits your needs"
        showButtons={true}
        showArrow={true}
        onArrowClick={scrollToRoomCards}
        galleryLink="/gallery"
        bookingRef="room-cards-section"
      />

      <section id="room-cards-section" className="section bg-montana-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Room Types</h2>
            <p className="text-lg text-white">
              MontanaHome offers accommodation options to suit different preferences and budgets.
              All our rooms are fully furnished and maintained to high standards of comfort and cleanliness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roomTypes.map((room, index) => (
              <RoomCard 
                key={index}
                image={room.image}
                title={room.title}
                price={room.price}
                description={room.description}
                features={room.features}
                rating={room.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-montana-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Included in All Accommodations</h2>
              <p className="text-lg text-white mb-8">
                No matter which room type you choose, the following amenities and services 
                are included in your monthly rent:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                  <span>High-speed Wi-Fi</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                  <span>Water and electricity</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                  <span>Weekly cleaning service</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                  <span>Access to common areas</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                  <span>24/7 security</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                  <span>Maintenance service</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                  <span>Study facilities</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                  <span>Backup power</span>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public" 
                alt="Accommodation Features" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accommodation;
