export default function IconSimple({ icon, color = "#FF7043" }) {
  const IconComponent = icon;

  return (
    <div className="flex items-center justify-center w-14 h-14 rounded-xl shadow-md bg-white border border-gray-200">
      <IconComponent size={32} color={color} />
    </div>
  );
}