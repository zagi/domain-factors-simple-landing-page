export default defineI18nConfig(() => ({
  legacy: false,
  locale: "pl",
  messages: {
    pl: {
      buy: "Kup domenę",
      price: "Cena zakupu",
      titles: {
        moz_links: "Moz Links",
        moz_pa: "Moz PA",
        moz_da: "Moz DA",
        moz_rank: "Moz Rank",
        maj_ref_domains: "Majestic Ref. Domains",
        maj_ips: "Majestic IP's",
        maj_cf: "Majestic CF",
        maj_tf: "Majestic TF",
        a_dr: "Ahrefs DR",
        a_rank: "Ahrefs rank",
        a_keywords: "Ahrefs keywords",
        a_trafic: "Ahrefs traffic",
      },
      descriptions: {
        moz_links:
          "Odnosi się to do liczby zewnętrznych linków (backlinków) wskazujących na konkretną stronę internetową, jak podaje narzędzie SEO Moz.",
        moz_pa:
          "Page Authority to metryka opracowana przez Moz, która przewiduje potencjał rankingowy strony internetowej w wynikach wyszukiwania. Opiera się ona na profilu linków strony i innych czynnikach.",
        moz_da:
          "Domain Authority, również opracowana przez Moz, to metryka przewidująca, jak dobrze strona internetowa lub domena prawdopodobnie zajmie miejsce w wynikach wyszukiwania. Uwzględnia ogólny profil linków domeny.",
        moz_rank:
          "Moz Rank to metryka mierząca popularność linków do strony internetowej. Jest podobna do PageRank firmy Google, ale dostosowana do algorytmu Moz.",
        maj_ref_domains:
          "Ta metryka od Majestic SEO wskazuje liczbę unikalnych domen, które łączą się z określoną witryną internetową lub stroną.",
        maj_ips:
          "Majestic IP's reprezentuje liczbę unikalnych adresów IP, które łączą się z witryną internetową. Pomaga to określić różnorodność źródeł linków.",
        maj_cf:
          "Przepływ Cytatów to metryka od Majestic, która ilościowo ocenia wpływ lub znaczenie strony internetowej lub domeny na podstawie liczby linków, które prowadzą do niej.",
        maj_tf:
          "Trust Flow, również od Majestic, mierzy wiarygodność strony internetowej lub domeny na podstawie jakości linków i wiarygodności źródeł linków.",
        a_dr: "Ocena Domeny Ahrefs to metryka oceniająca profil linków domeny, dostarczając wskazówki co do jej autorytetu i potencjału rankingowego.",
        a_rank:
          "Ranking Ahrefs to ranking popularności witryny w porównaniu do wszystkich innych witryn w bazie danych Ahrefs. Niższe liczby oznaczają większą popularność.",
        a_keywords:
          "Ta metryka reprezentuje liczbę słów kluczowych, na które witryna lub strona internetowa zajmuje pozycję w bazie danych słów kluczowych Ahrefs.",
        a_trafic:
          "Ahrefs dostarcza szacunkową ilość ruchu organicznego generowanego przez witrynę internetową. Pomaga to ocenić widoczność witryny w wynikach wyszukiwania.",
      },
    },
    en: {
      buy: "Buy the domain",
      price: "Sell price",
      titles: {
        moz_links: "Moz Links",
        moz_pa: "Moz PA",
        moz_da: "Moz DA",
        moz_rank: "Moz Rank",
        maj_ref_domains: "Majestic Ref. Domains",
        maj_ips: "Majestic IP's",
        maj_cf: "Majestic CF",
        maj_tf: "Majestic TF",
        a_dr: "Ahrefs DR",
        a_rank: "Ahrefs rank",
        a_keywords: "Ahrefs keywords",
        a_trafic: "Ahrefs traffic",
      },
      descriptions: {
        moz_links:
          "This refers to the number of external links (backlinks) pointing to a specific web page, as reported by Moz's SEO tools.",
        moz_pa:
          "Page Authority is a metric developed by Moz to predict the ranking potential of a web page on search engines. It is based on the page's link profile and other factors.",
        moz_da:
          "Domain Authority, also developed by Moz, is a metric that predicts how well a website or domain is likely to rank in search engine results. It takes into account the overall link profile of the domain.",
        moz_rank:
          "Moz Rank is a metric that measures the link popularity of a webpage. It's similar to Google's PageRank but is specific to Moz's algorithm.",
        maj_ref_domains:
          "This metric from Majestic SEO indicates the number of unique domains that are linking to a specific website or webpage.",
        maj_ips:
          "Majestic IP's represents the number of unique IP addresses that are linking to a website. It can help identify the diversity of linking sources.",
        maj_cf:
          "Citation Flow is a metric from Majestic that quantifies the influence or importance of a webpage or domain based on the number of links pointing to it.",
        maj_tf:
          "Trust Flow, also from Majestic, measures the trustworthiness of a webpage or domain based on the quality of backlinks and the trustworthiness of the linking sources.",
        a_dr: "Ahrefs' Domain Rating is a metric that assesses the backlink profile of a domain, providing an indication of its authority and ranking potential.",
        a_rank:
          "Ahrefs Rank is a ranking of a website's popularity in comparison to all other websites in the Ahrefs database. Lower numbers indicate higher popularity.",
        a_keywords:
          "This metric represents the number of keywords that a website or webpage ranks for in Ahrefs' keyword database.",
        a_trafic:
          "Ahrefs provides an estimate of the organic search traffic a website receives. This can help gauge the site's visibility in search engine results.",
      },
    },
  },
}));
