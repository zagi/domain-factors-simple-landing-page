import { ref } from "vue";

export async function useDomain(name: String = "") {
  const supabase = useSupabaseClient();
  const domain = ref({});
  try {
    const { data, error } = await supabase
      .from("domains")
      .select("*")
      .eq("name", name)
      .limit(1)
      .single();
    if (error) {
    //   console.log("error", error);
      return;
    }
    // handle for when no domain is returned
    if (data === null) {
      domain.value = {};
      return;
    }
    domain.value = data;
    // console.log("got doomain!", domain.value);
  } catch (err) {
    // console.error("Error retrieving data from db", err);
  }
  return domain;
}
