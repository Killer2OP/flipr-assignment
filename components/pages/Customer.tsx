
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const CustomerPage = () => {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Add New Customer</h1>
        <p className="text-gray-500 dark:text-gray-400">Fill out the form to create a new customer.</p>
      </div>
      <Card>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Customer Name</Label>
              <Input id="name" placeholder="Enter customer name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter email" required type="email" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input id="mobile" placeholder="Enter mobile number" required type="tel" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="Enter city" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="id">Customer ID</Label>
            <Input id="id" placeholder="Enter customer ID" required />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit">Save Customer</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
export default CustomerPage;