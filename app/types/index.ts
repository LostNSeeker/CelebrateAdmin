export interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  salary: number;
  joinDate: Date;
  status: 'active' | 'inactive';
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  rooms: number;
  rating: number;
  status: 'active' | 'pending' | 'inactive';
  onboardingStatus: 'completed' | 'in-progress' | 'not-started';
  revenue: number;
  joinDate: Date;
}

export interface OnboardingTask {
  id: string;
  hotelId: string;
  task: string;
  status: 'completed' | 'pending' | 'in-progress';
  assignedTo: string;
  dueDate: Date;
}