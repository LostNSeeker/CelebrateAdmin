"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { DollarSign, Download } from "lucide-react";

const payroll = [
  {
    id: "1",
    employee: "John Doe",
    position: "Hotel Onboarding Manager",
    salary: 75000,
    lastPaid: "2024-03-01",
    status: "Paid",
  },
  {
    id: "2",
    employee: "Jane Smith",
    position: "Operations Manager",
    salary: 85000,
    lastPaid: "2024-03-01",
    status: "Paid",
  },
];

export default function PayrollPage() {
  return (
    <div className="h-full space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Payroll Management</h2>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <DollarSign className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Total Payroll</p>
              <h3 className="text-2xl font-bold">$160,000</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div>
            <p className="text-sm text-muted-foreground">Next Payout Date</p>
            <h3 className="text-2xl font-bold">April 1, 2024</h3>
          </div>
        </Card>
        <Card className="p-6">
          <div>
            <p className="text-sm text-muted-foreground">Pending Approvals</p>
            <h3 className="text-2xl font-bold">2</h3>
          </div>
        </Card>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Last Paid</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payroll.map((record) => (
            <TableRow key={record.id}>
              <TableCell className="font-medium">{record.employee}</TableCell>
              <TableCell>{record.position}</TableCell>
              <TableCell>${record.salary.toLocaleString()}</TableCell>
              <TableCell>{record.lastPaid}</TableCell>
              <TableCell>{record.status}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">View Details</Button>
                <Button variant="ghost" size="sm">Process Payment</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}