"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

import BarChart from '@/components/icons/Barchart';
import RupeeSignIcon from '@/components/icons/RupeeSignIcon';
import LineChart from '@/components/icons/LineChart';
import PencilIcon from '@/components/icons/PencilIcon';
import UsersIcon from '@/components/icons/UsersIcon';


export function Dashboard() {

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 overflow-auto">
        <div className="grid gap-8 p-6 md:p-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                <RupeeSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$245,231</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+12.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
                <RupeeSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$78.32</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+5.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Customer Retention</CardTitle>
                <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">82%</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+3.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+1,234</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+15.2% from last month</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle>Sales by Product</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart className="aspect-[9/4]" />
              </CardContent>
            </Card>
            <Card className="col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle>Customer Acquisition</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart className="aspect-[9/4]" />
              </CardContent>
            </Card>
            <Card className="col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle>Order Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart className="aspect-[9/4]" />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2 lg:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Customers</CardTitle>
                <Button size="sm" variant="secondary" >
                  Add Customer
                </Button>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList className="border-b">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="city">By City</TabsTrigger>
                    <TabsTrigger value="history">Order History</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Orders</TableHead>
                          <TableHead>Last Order</TableHead>
                          <TableHead />
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">
                            <Link className="text-blue-600 hover:underline" href="#">
                              John Doe
                            </Link>
                          </TableCell>
                          <TableCell>john@example.com</TableCell>
                          <TableCell>12</TableCell>
                          <TableCell>2023-04-15</TableCell>
                          <TableCell>
                            <Button size="icon" variant="outline">
                              <PencilIcon className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            <Link className="text-blue-600 hover:underline" href="#">
                              Jane Smith
                            </Link>
                          </TableCell>
                          <TableCell>jane@example.com</TableCell>
                          <TableCell>8</TableCell>
                          <TableCell>2023-03-22</TableCell>
                          <TableCell>
                            <Button size="icon" variant="outline">
                              <PencilIcon className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            <Link className="text-blue-600 hover:underline" href="#">
                              Bob Johnson
                            </Link>
                          </TableCell>
                          <TableCell>bob@example.com</TableCell>
                          <TableCell>5</TableCell>
                          <TableCell>2023-02-08</TableCell>
                          <TableCell>
                            <Button size="icon" variant="outline">
                              <PencilIcon className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TabsContent>
                  <TabsContent value="city">
                    <div className="flex items-center gap-4 mb-4">
                      <Label htmlFor="city">Filter by City:</Label>
                      <Select>
                        <SelectTrigger className="w-[200px]" id="city">
                          <SelectValue placeholder="Select a city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new-york">New York</SelectItem>
                          <SelectItem value="los-angeles">Los Angeles</SelectItem>
                          <SelectItem value="chicago">Chicago</SelectItem>
                          <SelectItem value="houston">Houston</SelectItem>
                          <SelectItem value="phoenix">Phoenix</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Orders</TableHead>
                          <TableHead>Last Order</TableHead>
                          <TableHead />
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">
                            <Link className="text-blue-600 hover:underline" href="#">
                              John Doe
                            </Link>
                          </TableCell>
                          <TableCell>john@example.com</TableCell>
                          <TableCell>12</TableCell>
                          <TableCell>2023-04-15</TableCell>
                          <TableCell>
                            <Button size="icon" variant="outline">
                              <PencilIcon className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">
                            <Link className="text-blue-600 hover:underline" href="#">
                              Jane Smith
                            </Link>
                          </TableCell>
                          <TableCell>jane@example.com</TableCell>
                          <TableCell>8</TableCell>
                          <TableCell>2023-03-22</TableCell>
                          <TableCell>
                            <Button size="icon" variant="outline">
                              <PencilIcon className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TabsContent>
                  <TabsContent value="history">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Customer</TableHead>
                          <TableHead>Order #</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">John Doe</TableCell>
                          <TableCell>#1234</TableCell>
                          <TableCell>2023-04-15</TableCell>
                          <TableCell>$250.00</TableCell>
                          <TableCell>
                            <Badge variant="outline">Delivered</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Jane Smith</TableCell>
                          <TableCell>#2345</TableCell>
                          <TableCell>2023-03-22</TableCell>
                          <TableCell>$150.00</TableCell>
                          <TableCell>
                            <Badge variant="outline">Pending</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Bob Johnson</TableCell>
                          <TableCell>#3456</TableCell>
                          <TableCell>2023-02-08</TableCell>
                          <TableCell>$350.00</TableCell>
                          <TableCell>
                            <Badge variant="outline">Delivered</Badge>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            <Card className="col-span-2 lg:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Orders</CardTitle>
                <Button size="sm" variant="secondary">
                  Add Order
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order #</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

