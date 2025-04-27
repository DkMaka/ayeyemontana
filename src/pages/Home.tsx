import { 
  Home as HomeIcon, 
  Wifi, 
  Users, 
  Shield, 
  Map, 
  BookOpen, 
  Coffee, 
  Zap,
  Check,
  MapPin
} from 'lucide-react';
import Hero from '../components/Hero';
import RoomCard from '../components/RoomCard';
import Testimonial from '../components/Testimonial';
import BookingForm from '../components/BookingForm';

const Home = () => {
  const roomTypes = [
    {
      image: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public",
      title: "Single Room",
      price: "Confirmed*",
      description: "Comfortable single rooms perfect for focused study and personal space.",
      features: ["Single Bed", "Study Desk", "Wardrobe", "Wi-Fi", "Shared Bathroom", "Cleaning Service"],
      rating: 4.5
    },
    {
      image: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public",
      title: "Double Room",
      price: "Confirmed*",
      description: "Shared rooms offering both affordability and social living experience.",
      features: ["Two Beds", "Study Desks", "Wardrobes", "Wi-Fi", "Shared Bathroom", "Cleaning Service"],
      rating: 4.2
    }
  ];

  const facilities = [
    {
      icon: <Wifi size={42} />,
      title: " High-Speed Wi-Fi",
      description: "Stay connected with our reliable high-speed internet throughout the accommodation."
    },
    {
      icon: <Shield size={42} />,
      title: "24/7 Security",
      description: "Feel safe with our around-the-clock security personnel and surveillance systems."
    },
    {
      icon: <Coffee size={42} />,
      title: "Common Areas",
      description: "Spacious lounge areas for relaxation, social gatherings, and group study sessions."
    },
    {
      icon: <BookOpen size={42} />,
      title: "Study Rooms",
      description: "Dedicated quiet spaces designed for focused studying and academic success."
    },
    {
      icon: <Zap size={42} />,
      title: "Backup Power",
      description: "Never worry about power outages with our reliable backup generators."
    },
    {
      icon: <Map size={42} />,
      title: "Prime Location",
      description: "Conveniently located within walking distance to campus and amenities."
    }
  ];

  const testimonials = [
    {
      content: "My experience at Montana has been exceptional. The facilities are modern, the staff is friendly, and the environment is perfect for both studying and socializing.",
      author: "Thabo Mkhize",
      role: "3rd Year Law Student"
    },
    {
      content: "I've stayed in different accommodations near campus, but Montana is by far the best. The security, cleanliness, and proximity to classes make it ideal for students.",
      author: "Lerato Ndlovu",
      role: "2nd Year Business Student"
    },
    {
      content: "The high-speed internet and quiet study areas have significantly improved my academic performance. I would recommend Montana to any serious student.",
      author: "David Moyo",
      role: "4th Year Engineering Student"
    }
  ];

  return (
    <>
   
      <Hero 
        image="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public"
        title={
          <div className="flex flex-col items-center mt-1">
            <h1 className="text-4xl md:text-5xl lg:text-20xl font-bold text-white mb-0">
              MONTANA STUDENT ACCOMMODATION
        <span className="block text-xl md:text-3xl font-medium mt-2 text-amber-400">
          Smart living for smart future leaders. 
        </span>
      

            </h1>
            <img 
              src="https://i.postimg.cc/1syZXmwx/Whats-App-Image-2025-04-12-at-07-23-50-f9f0fc79.jpg?dl=1" 
              alt="Montana Logo" 
              className="h-72 md:h-80 lg:h-96 object-contain my-12 rounded-full" 
               />
            <div className="w-full max-w-2xl mx-auto mt-8 mb-12">
       
  <div className="text-center">
  
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[0.25em] scale-x-110 origin-center transform text-white">
      NSFAS
    </h2>
          <div className="flex justify-center mt-4">
      <div className="bg-transparent text-white px-6 py-3 rounded-lg border-4 border-purple-600 shadow-lg">
        <div className="flex space-x-4">
          <p className="text-2xl md:text-3xl lg:text-4xl font-text tracking-wider">
            Accredited
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider">
            Accommodation
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        <div className="relative h-59"></div>    
  <div className="absolute bottom-0 right-0 "> 
    <img 
      src="https://i.postimg.cc/0yxyxhNM/maxresdefault-Photoroom.png" 
      alt="Montana Logo" 
      className="h-40 md:h-44 lg:h-52 object-contain" 
    />
  </div>
</div>

        }
        
        showButtons={false}
         showArrow = {false}

      />
      
      
      <section id="about" className="section bg-montana-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Welcome to Montana</h2>
            <p className="text-lg text-white">
              Montana is a NSFAS accredited residence that offers premium student accommodation at the University of Venda. Our modern facilities and comfortable living spaces are designed to provide students with the perfect environment 
              for academic success and personal growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public" 
                alt="Montana Student Accommodation" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-7 text-white">Why Choose Montana?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                  <span>Prime location within walking distance to campus</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                  <span>Modern, comfortable and well-maintained facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                  <span>24/7 security with controlled access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                  <span>High-speed Wi-Fi throughout the premises</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                  <span>Dedicated study spaces and common areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                  <span>Backup power during load shedding</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                  <span>Regular cleaning and maintenance services</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                  <span>Supportive and responsive management team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Accommodation Section */}
      <section id="accommodation" className="section bg-montana-card1">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Accommodation Options</h2>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto">
              Choose from a variety of room types designed to meet your preferences and budget.
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
      
      {/* Facilities Section */}
      <section id="features" className="section bg-montana-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Facilities</h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Montana offers a range of facilities to enhance your student living experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-amber-400 p-6 rounded-lg text-center">
                <div className="flex justify-center text-montana-primary mb-4">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                <p className="text-gray-700">{facility.description}</p>
              </div>
            ))}
          </div>
          
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-cover bg-center relative py-20"
        style={{ 
          backgroundImage: `url(https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public)` 
        }}
      >
        <div className="absolute inset-0 bg-montana-primary bg-opacity-90"></div>
        <div className="container-custom relative">
          <div className="text-center mb-12 text-white">
            <h2 className="section-title text-white">What Our Residents Say</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Hear from students who have made Montana their home away from home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <section id="booking" className="section bg-montana-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Book Your Accommodation</h2>
              <p className="text-lg text-yellow-600 mb-8">
                Did you know Montana has the available space for you? Secure your spot at Montana Student Accommodation now.
                Complete the booking form to start your application process.
              </p>
              <div className="bg-montana-primary text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Booking Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                    <span>Applications are open for the current and upcoming semesters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                    <span>A security deposit equal to one month's rent is required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                    <span>Monthly payment options available for all students</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
                    <span>Special discounts for full academic year bookings</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="section montana bg-montana-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Location</h2>
            <p className="text-lg text-yellow-50 max-w-3xl mx-auto">
              Conveniently located within walking distance to the University of Venda campus and local amenities.
            </p>
          </div>
          
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/14ba96c3-c172-43a9-f3ba-d4647ef89500/public" 
              alt="Montana Location" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Address</h3>
                <p className="text-white">Miluwani Block F, University of Venda, Thohoyandou, Limpopo, South Africa</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <HomeIcon className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Nearby</h3>
                <p className="text-white">5 minutes walk to campus, 10 minutes to shopping center and restaurants</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-montana-secondary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Contact</h3>
                <p className="text-white">+27 (15) 962-8000 | montana@univen.ac.za</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;