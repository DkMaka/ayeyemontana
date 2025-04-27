interface  FacilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FacilityCard = ({ icon, title, description }: FacilityCardProps) => {
  return (
    <div className="card p-6 hover:border-l-4 hover:border-montana-secondary transition-all duration-300">
      <div className="mb-4 text-montana-secondary">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default FacilityCard;
 