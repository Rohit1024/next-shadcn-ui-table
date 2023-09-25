import { z } from "zod";

export const statuses = ["canceled", "done", "in-progress", "todo", "backlog"] as const;
export const labels = ["bug", "feature", "documentation"] as const;
export const priorities = ["low", "medium", "high"] as const;

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.enum(statuses),
  label: z.enum(labels),
  priority: z.enum(priorities),
  due_date: z.date().transform((value) => new Date(value))
})

export type TaskType = z.infer<typeof taskSchema>;
