import { Button } from "./button";

type RoomCardProps = {
  className?: string;
};
export const RoomCard = ({ className }: RoomCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <h3 className="text-lg font-bold">Cozy Apartment in Downtown</h3>
      <p className="text-sm text-gray-600">Shared room, $800/month</p>
      <Button className="mt-2">View Details</Button>
    </div>
  );
};
