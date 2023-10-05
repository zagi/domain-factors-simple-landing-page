<template>
  <div>
    <section class="bg-white dark:bg-gray-900 font-ibm">
      <div
        class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 max-w-screen-2xl mx-auto px-4 py-8 lg:py-16 lg:px-6"
      >
        <div class="mb-0 lg:mb-16">
          <a href="https://getname.pl" target="_blank" class="flex items-center">
            <img
              src="https://getname.pl/_nuxt/logo.91f2415b.png"
              class="mr-3 h-6 mb-2 md:mb-6"
              alt="Getname.pl giełda domen internetowych"
            />
          </a>
          <h2
            class="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            {{ domain.name }}
          </h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400 mb-2">
            {{ $t('price') }} {{ domain.properties.sell.value }}zł
          </p>
          <button
            type="button"
            class="text-white w-full bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800 cursor-pointer"
          >
          <a href="https://getname.pl/auth/register" target="_blank" class="flex items-center">
            {{ $t('buy') }}
          </a>
          </button>
        </div>
        <div
          class="grid gap-4 text-gray-900 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:col-span-2 2xl:grid-cols-4 2xl:col-span-3 dark:text-white"
        >
          <template v-for="(item, index) in orderedFactors">
            <FactorCard
              :title="$t(`titles.${index}`)"
              :desc="$t(`descriptions.${index}`)"
              :value="parseInt(item, 10)"
              :is-chart="config.isChartMap.includes(index)"
              :chart-color="colors[index]"
              :index="index"
            ></FactorCard>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import config from "./config";
const { colors } = useRandomColors();
const supabase = useSupabaseClient();
const url = useRequestURL()
const domain = ref({});
const orderedFactors = ref({})
try {
  const { data, error } = await supabase
    .from("domains")
    .select("*")
    .eq("name", url.hostname)
    .limit(1)
    .single();
  if (error) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
  }
  // handle for when no domain is returned
  if (data === null) {
    domain.value = {};
  }
  domain.value = data;
} catch (err) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

orderedFactors.value = Object.keys(domain.value.factors).sort().reduce(
  (obj, key) => { 
    obj[key] = domain.value.factors[key]; 
    return obj;
  }, 
  {}
);

</script>
