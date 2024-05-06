
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Shipping Details</h1>
        <form className="grid gap-4">
          <div className="grid gap-1">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Enter your address" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="Enter your city" />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="pincode">Pincode</Label>
              <Input id="pincode" placeholder="Enter your pincode" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1">
              <Label htmlFor="po-id">Purchase Order ID</Label>
              <Input id="po-id" placeholder="Enter your purchase order ID" />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="customer-id">Customer ID</Label>
              <Input id="customer-id" placeholder="Enter your customer ID" />
            </div>
          </div>
          <Button className="w-full" type="submit">
            Save
          </Button>
        </form>
      </div>
    </div>
  )
}