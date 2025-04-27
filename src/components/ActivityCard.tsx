interface  ActivityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ActivityCard = ({ icon, title, description }: ActivityCardProps) => {
  return (
    <div className="card p-6 text-center hover:bg-montana-blue hover:text-white group">
      <div className="mb-4 text-montana-blue group-hover:text-white flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700 group-hover:text-gray-100">{description}</p>
    </div>
  );
};

export default ActivityCard;
 