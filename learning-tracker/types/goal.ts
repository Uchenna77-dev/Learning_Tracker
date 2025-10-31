export interface Goal {
  id: number
  title: string
  category: string
  description: string
  progress: number  // e.g., percentage completed
  status: "Not Started" | "In Progress" | "Completed"
}
