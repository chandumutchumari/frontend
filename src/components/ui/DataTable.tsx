import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ChevronsUpDown, Search } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/EmptyState";
import { Inbox } from "lucide-react";

interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (row: T) => ReactNode;
  className?: string;
  sortable?: boolean;
}

interface Props<T> {
  columns: Column<T>[];
  data: T[];
  empty?: string;
  searchable?: boolean;
  searchPlaceholder?: string;
  searchKeys?: (keyof T | string)[];
  paginated?: boolean;
  pageSize?: number;
  stickyHeader?: boolean;
}

type SortDir = "asc" | "desc" | null;

export function DataTable<T>({
  columns,
  data,
  empty = "No records yet.",
  searchable = true,
  searchPlaceholder = "Search records…",
  searchKeys,
  paginated = true,
  pageSize = 10,
  stickyHeader = true,
}: Props<T>) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>(null);
  const [page, setPage] = useState(0);

  const keys = searchKeys ?? columns.map((c) => c.key);

  const filtered = useMemo(() => {
    let rows = [...data];
    if (search.trim()) {
      const q = search.toLowerCase();
      rows = rows.filter((row) =>
        keys.some((k) => String((row as Record<string, unknown>)[k as string] ?? "").toLowerCase().includes(q)),
      );
    }
    if (sortKey && sortDir) {
      rows.sort((a, b) => {
        const av = (a as Record<string, unknown>)[sortKey];
        const bv = (b as Record<string, unknown>)[sortKey];
        const aNum = typeof av === "number" ? av : parseFloat(String(av));
        const bNum = typeof bv === "number" ? bv : parseFloat(String(bv));
        if (!isNaN(aNum) && !isNaN(bNum)) return sortDir === "asc" ? aNum - bNum : bNum - aNum;
        return sortDir === "asc"
          ? String(av).localeCompare(String(bv))
          : String(bv).localeCompare(String(av));
      });
    }
    return rows;
  }, [data, search, sortKey, sortDir, keys]);

  const totalPages = paginated ? Math.max(1, Math.ceil(filtered.length / pageSize)) : 1;
  const paged = paginated ? filtered.slice(page * pageSize, (page + 1) * pageSize) : filtered;

  const toggleSort = (key: string) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
    } else if (sortDir === "asc") {
      setSortDir("desc");
    } else {
      setSortKey(null);
      setSortDir(null);
    }
    setPage(0);
  };

  const SortIcon = ({ colKey }: { colKey: string }) => {
    if (sortKey !== colKey) return <ChevronsUpDown className="h-3.5 w-3.5 opacity-40" />;
    return sortDir === "asc" ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />;
  };

  return (
    <div className="rounded-2xl glass glass-border overflow-hidden" style={{ boxShadow: "var(--shadow-soft)" }}>
      {searchable && (
        <div className="p-4 border-b border-border/60">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(0); }}
              placeholder={searchPlaceholder}
              className="pl-9 h-10 rounded-xl bg-background/60 border-border/60"
            />
          </div>
        </div>
      )}

      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full text-sm">
          <thead className={cn("bg-muted/50 text-muted-foreground", stickyHeader && "sticky top-0 z-10 backdrop-blur-md")}>
            <tr>
              {columns.map((c) => (
                <th
                  key={String(c.key)}
                  className={cn(
                    "text-left font-semibold px-4 py-3.5 whitespace-nowrap",
                    c.sortable !== false && "cursor-pointer select-none hover:text-foreground transition-colors",
                    c.className,
                  )}
                  onClick={() => c.sortable !== false && toggleSort(String(c.key))}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {c.header}
                    {c.sortable !== false && <SortIcon colKey={String(c.key)} />}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {paged.length === 0 ? (
                <tr>
                  <td colSpan={columns.length}>
                    <EmptyState icon={Inbox} title={empty} description={search ? "Try adjusting your search." : undefined} />
                  </td>
                </tr>
              ) : (
                paged.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.02 }}
                    className="border-t border-border/50 hover:bg-muted/30 transition-colors group"
                  >
                    {columns.map((c) => (
                      <td key={String(c.key)} className={cn("px-4 py-3.5 group-hover:text-foreground", c.className)}>
                        {c.render ? c.render(row) : String((row as Record<string, unknown>)[c.key as string] ?? "")}
                      </td>
                    ))}
                  </motion.tr>
                ))
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {paginated && filtered.length > pageSize && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-border/60 bg-muted/20">
          <p className="text-xs text-muted-foreground">
            Showing {page * pageSize + 1}–{Math.min((page + 1) * pageSize, filtered.length)} of {filtered.length}
          </p>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" className="h-8 rounded-lg text-xs" disabled={page === 0} onClick={() => setPage((p) => p - 1)}>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="h-8 rounded-lg text-xs" disabled={page >= totalPages - 1} onClick={() => setPage((p) => p + 1)}>
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
