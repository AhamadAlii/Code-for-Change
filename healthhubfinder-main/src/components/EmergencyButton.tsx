
import { useState } from "react";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const EmergencyButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleEmergencyCall = () => {
    // In a real app, this would connect to emergency services
    window.location.href = "tel:911";
  };

  return (
    <>
      <Button
        className="bg-healthRed hover:bg-red-600 text-white emergency-pulse"
        onClick={() => setIsDialogOpen(true)}
      >
        <PhoneCall className="mr-2 h-5 w-5" />
        Emergency
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-center">Emergency Services</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="text-center">
              <p className="mb-4 text-slate-600">This will connect you to emergency services. Only use in case of a genuine emergency.</p>
              
              <Button
                className="bg-healthRed hover:bg-red-600 text-white w-full py-6 text-lg"
                onClick={handleEmergencyCall}
              >
                <PhoneCall className="mr-2 h-6 w-6" />
                Call Emergency (911)
              </Button>
              
              <div className="mt-6 space-y-3">
                <div className="p-3 bg-healthGray rounded-lg">
                  <h3 className="font-medium text-slate-800">Hospital Emergency</h3>
                  <p className="text-slate-600">+1 (555) 234-5678</p>
                </div>
                <div className="p-3 bg-healthGray rounded-lg">
                  <h3 className="font-medium text-slate-800">Ambulance Services</h3>
                  <p className="text-slate-600">+1 (555) 987-6543</p>
                </div>
                <div className="p-3 bg-healthGray rounded-lg">
                  <h3 className="font-medium text-slate-800">Poison Control</h3>
                  <p className="text-slate-600">+1 (800) 222-1222</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EmergencyButton;
