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
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const hotels = [
  {
    id: "1",
    name: "Grand Hotel",
    location: "New York",
    rooms: 200,
    status: "active",
    onboardingStatus: "completed",
  },
  {
    id: "2",
    name: "Seaside Resort",
    location: "Miami",
    rooms: 150,
    status: "pending",
    onboardingStatus: "in-progress",
  },
];

export default function HotelsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Hotels</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Hotel
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Hotel</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Hotel Name</Label>
                <Input id="name" placeholder="Grand Hotel" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="New York" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="rooms">Number of Rooms</Label>
                <Input id="rooms" type="number" placeholder="200" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => setOpen(false)}>Add Hotel</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Rooms</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Onboarding</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hotels.map((hotel) => (
              <TableRow key={hotel.id}>
                <TableCell className="font-medium">{hotel.name}</TableCell>
                <TableCell>{hotel.location}</TableCell>
                <TableCell>{hotel.rooms}</TableCell>
                <TableCell>
                  <Badge variant={hotel.status === "active" ? "default" : "secondary"}>
                    {hotel.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={
                    hotel.onboardingStatus === "completed" ? "default" :
                    hotel.onboardingStatus === "in-progress" ? "secondary" : "destructive"
                  }>
                    {hotel.onboardingStatus}
                  </Badge>
                </TableCell>
                <TableCell className="space-x-2">
                  <Button variant="ghost" size="sm">View</Button>
                  <Button variant="ghost" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}