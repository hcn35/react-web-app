import DataTable from "../ui/DataTable";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getTransactions,
  deleteTransaction,
} from "../services/apiTransactions";

export default function Transactions() {
  const queryClient = useQueryClient();
  const transactionsQuery = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  const transactionsMutation = useMutation({
    mutationFn: deleteTransaction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });

  if (transactionsQuery.error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <>
      <DataTable
        data={transactionsQuery.data}
        isLoading={transactionsQuery.isLoading}
        mutate={transactionsMutation.mutate}
      />
    </>
  );
}
