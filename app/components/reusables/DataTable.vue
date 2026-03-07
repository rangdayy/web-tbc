<script setup lang="ts">
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2 } from "lucide-vue-next";

const props = withDefaults(
  defineProps<{
    tableCaption?: string;
    columns?: any[];
    items?: any;
    emptyMessage?: string;
    isLoading?: boolean;
  }>(),
  {
    tableCaption: "",
    columns: () => [],
    items: () => [],
    emptyMessage: "Tidak ada data",
    isLoading: false,
  }
);
</script>

<template>
  <div class="relative max-h-[500px] overflow-y-auto">
    <div ref="tableRef">
      <Table class="w-full table overflow-x-auto">
        <TableCaption v-if="props.tableCaption">{{ props.tableCaption }}</TableCaption>

        <TableHeader class="sticky top-0 bg-white">
          <TableRow>
            <TableHead v-for="header in props.columns" :key="header.id" :class="{ 'w-fit': header.fit }">
              {{ header.label }}
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow v-for="(row, rowIndex) in props.items" :key="rowIndex">
            <TableCell v-for="col in props.columns" :key="col.key" class="whitespace-normal break-words align-top">
              <slot :name="col.key" :row="row" :value="row[col.key]" :col="col" :index="rowIndex">
                {{ row[col.key] }}
              </slot>
            </TableCell>
          </TableRow>
          <TableRow v-if="props.items.length === 0 && !props.isLoading">
            <TableCell colspan="100%" class="text-center">
              <slot name="empty">
                {{ props.emptyMessage }}
              </slot>
            </TableCell>
          </TableRow>
          <TableRow v-if="props.isLoading">
            <TableCell colspan="100%" class="text-center">
              <slot name="loading">
                <Loader2 class="w-4 h-4 animate-spin mx-auto" />
              </slot>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>

<style scoped>
.w-fit {
  width: 1%;
}
</style>
