import FilterIcon from "../icons/FilterIcon"

import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import Link from "next/link"
import { PaginationPrevious, PaginationItem, PaginationLink, PaginationEllipsis, PaginationNext, PaginationContent, Pagination } from "@/components/ui/pagination"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Purchase Orders</h1>
        <div className="flex items-center space-x-4">
          <Button size="sm">Add Purchase Order</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline">
                <FilterIcon className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Filter Purchase Orders</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem>Pending</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Shipped</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Delivered</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Cancelled</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product Name</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Pricing</TableHead>
              <TableHead>MRP</TableHead>
              <TableHead>Purchase Order ID</TableHead>
              <TableHead>Customer ID</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Wireless Headphones</TableCell>
              <TableCell>2</TableCell>
              <TableCell>$99.99</TableCell>
              <TableCell>$149.99</TableCell>
              <TableCell>PO-12345</TableCell>
              <TableCell>
                <Link className="text-blue-600 hover:underline" href="#">
                  CUS-67890
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Smartwatch</TableCell>
              <TableCell>1</TableCell>
              <TableCell>$199.99</TableCell>
              <TableCell>$249.99</TableCell>
              <TableCell>PO-67890</TableCell>
              <TableCell>
                <Link className="text-blue-600 hover:underline" href="#">
                  CUS-12345
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fitness Tracker</TableCell>
              <TableCell>3</TableCell>
              <TableCell>$49.99</TableCell>
              <TableCell>$79.99</TableCell>
              <TableCell>PO-54321</TableCell>
              <TableCell>
                <Link className="text-blue-600 hover:underline" href="#">
                  CUS-98765
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Noise-Cancelling Headphones</TableCell>
              <TableCell>1</TableCell>
              <TableCell>$199.99</TableCell>
              <TableCell>$249.99</TableCell>
              <TableCell>PO-24680</TableCell>
              <TableCell>
                <Link className="text-blue-600 hover:underline" href="#">
                  CUS-13579
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Portable Bluetooth Speaker</TableCell>
              <TableCell>2</TableCell>
              <TableCell>$79.99</TableCell>
              <TableCell>$99.99</TableCell>
              <TableCell>PO-86420</TableCell>
              <TableCell>
                <Link className="text-blue-600 hover:underline" href="#">
                  CUS-24680
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end mt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
