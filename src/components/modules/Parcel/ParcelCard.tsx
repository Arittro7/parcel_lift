import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router";
import Swal from "sweetalert2";

type Parcel = {
  _id: string;
  name: string;
  trackingId: string;
  status: string;
  senderInfo: {
    division: string;
    city: string;
    zip: number;
    street: string;
  };
  deliveryLocation: {
    division: string;
    city: string;
    zip: number;
    street: string;
  };
  weight: number;
  cost: number;
  pickUpDate: string;
  estimatedDeliveryDate: string;
};

interface ParcelCardProps {
  parcel: Parcel;
  onCancel?: (id: string, status: string) => void; // optional
  onConfirm?: (id: string, status: string) => void; // optional
}

export const ParcelCard: React.FC<ParcelCardProps> = ({
  parcel,
  onCancel = () => {},
  onConfirm = () => {},
}) => {
  const { pathname } = useLocation();

  return (
    <Card className="w-full max-w-md mx-auto my-4">
      <CardHeader>
        <CardTitle>{parcel.name}</CardTitle>
        <CardDescription>Tracking ID: {parcel.trackingId}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 flex flex-col w-full h-full">
        <div className="flex justify-between">
          <span>Status:</span>
          <Badge
            variant={parcel.status === "REQUESTED" ? "outline" : "default"}
          >
            {parcel.status}
          </Badge>
        </div>
        <div>
          <strong>Sender:</strong> {parcel.senderInfo.division},
          {parcel.senderInfo.city}, {parcel.senderInfo.street} -
          {parcel.senderInfo.zip}
        </div>
        <div>
          <strong>Delivery Location:</strong> {parcel.deliveryLocation.division}
          , {parcel.deliveryLocation.city}, {parcel.deliveryLocation.street} -
          {parcel.deliveryLocation.zip}
        </div>
        <div>
          <strong>Weight:</strong> {parcel.weight} kg
        </div>
        <div>
          <strong>Cost:</strong> ${parcel.cost}
        </div>
        <div>
          <strong>Pick Up:</strong>{" "}
          {new Date(parcel.pickUpDate).toLocaleString()}
        </div>
        <div>
          <strong>Estimated Delivery:</strong>{" "}
          {new Date(parcel.estimatedDeliveryDate).toLocaleString()}
        </div>
        {pathname === "/sender/cancel-parcel" && (
          <div className="mt-auto flex justify-end">
            <Button
              variant="destructive"
              onClick={() => {
                Swal.fire({
                  title: "Do you want to cancel parcel",
                  showDenyButton: true,
                  showCancelButton: true,
                  confirmButtonText: "Yes",
                  denyButtonText: `No`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    onCancel(parcel._id, parcel.status);
                  } else if (result.isDenied) {
                    Swal.fire("parcel are not canceled", "", "info");
                  }
                });
              }}
            >
              Cancel Parcel
            </Button>
          </div>
        )}
        {pathname === "/receiver/confirm-parcels" && (
          <div className="mt-auto flex justify-end">
            <Button
              variant="destructive"
              onClick={() => {
                Swal.fire({
                  title: "Do you want to confirm parcel",
                  showDenyButton: true,
                  showCancelButton: true,
                  confirmButtonText: "Yes",
                  denyButtonText: `No`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    onConfirm(parcel._id, parcel.status);
                  } else if (result.isDenied) {
                    Swal.fire("parcel are not confirm", "", "info");
                  }
                });
              }}
            >
              I have Received It
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
