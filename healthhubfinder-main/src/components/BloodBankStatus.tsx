
import { Card } from "@/components/ui/card";

const BloodBankStatus = () => {
  const bloodTypes = [
    { type: "A+", status: "High", color: "bg-green-500" },
    { type: "A-", status: "Medium", color: "bg-yellow-500" },
    { type: "B+", status: "High", color: "bg-green-500" },
    { type: "B-", status: "Low", color: "bg-red-500" },
    { type: "AB+", status: "Medium", color: "bg-yellow-500" },
    { type: "AB-", status: "Low", color: "bg-red-500" },
    { type: "O+", status: "Medium", color: "bg-yellow-500" },
    { type: "O-", status: "Critical", color: "bg-red-600" },
  ];

  return (
    <section className="py-16 bg-healthGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Blood Bank Availability</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Current blood inventory at registered blood banks near you. Updated in real-time.
          </p>
        </div>
        
        <Card className="p-6 bg-white rounded-lg shadow-sm overflow-hidden max-w-3xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {bloodTypes.map((blood) => (
              <div key={blood.type} className="text-center p-4 border rounded-lg">
                <div className="flex justify-center mb-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${blood.color}`}>
                    {blood.type}
                  </div>
                </div>
                <p className={`text-sm font-medium ${
                  blood.status === "Critical" ? "text-red-600" : 
                  blood.status === "Low" ? "text-red-500" : 
                  blood.status === "Medium" ? "text-yellow-600" : 
                  "text-green-600"
                }`}>
                  {blood.status}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="/blood-banks" className="text-healthBlue hover:text-blue-700 font-medium">
              View detailed blood bank information →
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BloodBankStatus;
