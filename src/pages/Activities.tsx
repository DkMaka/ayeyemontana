import  { Mountain, Compass, Calendar, Users, Anchor, Bike, Camera, Coffee } from 'lucide-react';
import Hero from '../components/Hero';
import ActivityCard from '../components/ActivityCard';

const Activities = () => {
  const activities = [
    {
      icon: <Mountain size={48} />,
      title: "Hiking & Trekking",
      description: "Explore hundreds of trails through pristine wilderness, from easy walks to challenging mountain ascents."
    },
    {
      icon: <Compass size={48} />,
      title: "Wildlife Viewing",
      description: "Witness bears, wolves, elk, and more in their natural habitat with expert guides."
    },
    {
      icon: <Calendar size={48} />,
      title: "Seasonal Events",
      description: "Experience Montana's unique festivals, rodeos, and cultural celebrations throughout the year."
    },
    {
      icon: <Users size={48} />,
      title: "Family Adventures",
      description: "Create lasting memories with activities suitable for all ages and experience levels."
    },
    {
      icon: <Anchor size={48} />,
      title: "Fishing & Boating",
      description: "Enjoy world-class fly fishing and boating on Montana's pristine rivers and lakes."
    },
    {
      icon: <Bike size={48} />,
      title: "Mountain Biking",
      description: "Ride scenic trails through forests, mountains, and meadows with breathtaking views."
    },
    {
      icon: <Camera size={48} />,
      title: "Photography Tours",
      description: "Capture Montana's stunning landscapes and wildlife with professional guidance."
    },
    {
      icon: <Coffee size={48} />,
      title: "Cultural Experiences",
      description: "Immerse yourself in Montana's rich heritage, indigenous culture, and western history."
    }
  ];

  return (
    <>
      <Hero 
        image="https://images.unsplash.com/photo-1435732960391-11053ee5e6b6?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxtb250YW5hJTIwbW91bnRhaW5zJTIwbGFuZHNjYXBlfGVufDB8fHx8MTc0NDQwNzg1NXww&ixlib=rb-4.0.3"
        title="Experience Montana's Outdoor Adventures"
        subtitle="Find your perfect activity from thrilling excursions to peaceful nature experiences"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Adventures Await</h2>
            <p className="text-lg text-gray-700">
              Montana offers an incredible variety of activities for every season, interest, and skill level.
              Whether you're seeking adrenaline-pumping adventures or peaceful encounters with nature,
              you'll find endless possibilities in Big Sky Country.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <ActivityCard 
                key={index}
                icon={activity.icon}
                title={activity.title}
                description={activity.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Activities;
 