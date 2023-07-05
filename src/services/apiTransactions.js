import supabase from "./supabase";

export async function getTransactions() {
  let { data, error } = await supabase.from("Transaction").select("*");

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

export async function deleteTransaction(id) {
  const { data, error } = await supabase
    .from("Transaction")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}
