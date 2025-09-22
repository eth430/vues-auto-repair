interface ServiceCardProps {
  title: string;
  description: string;
  price?: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, price, icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      {icon && (
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      {price && (
        <p className="text-lg font-semibold text-blue-600">
          Starting at {price}
        </p>
      )}
    </div>
  );
}