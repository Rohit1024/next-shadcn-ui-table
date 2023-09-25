import { DataTableLoading } from "@/components/data-table/data-table-skeleton"
import { Shell } from "@/components/shells/shell"

export default function IndexLoading() {
  return (
    <Shell>
      <DataTableLoading columnCount={5} />
    </Shell>
  )
}