export default function Skeleton() {
  return (
    <div className="relative overflow-hidden bg-gray-200 rounded-md w-full h-full" aria-hidden="true">
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-gray-200 via-white to-gray-200" />
    </div>
  );
}
