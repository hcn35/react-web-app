import supabase from "./supabase";

export async function getTransactions() {
  let { data, error } = await supabase.from("Transaction").select("*");

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}
