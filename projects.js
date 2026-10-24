// Project detail pages. Each opens as an overlay panel over the works grid.
// Media blocks: yt / vimeo / ig (reel id) / yt + ig (episode pair, optional note for a different role) / gallery (image paths) / html.
// Pairs and lone reels are sorted by REEL_VIEWS (views.js); other media keep their order.
const FREIGHT = "images/projects/";
const BADGE = "images/badges/";

const PROJECTS = {
  "kas-ltmh-series": {
    color: "#c2d199",
    title: "<b>[KAS] Letters to My Hometown Series (2026)</b>",
    role: "Editor",
    desc: "Letters to My Hometown is an ongoing documentary series collecting messages from elderly Korean Americans to family members in North Korea, from whom they have been separated for over seventy years. Each episode is built around an intergenerational conversation between the interviewee and a younger relative. I edit the series across long-form interview cuts for the USC Library archive, short edits for YouTube, and reels for Instagram and TikTok.",
    media: [
      { yt: "XzDOeBJB5TU", ig: "DUZAGH5Eqaa" },
      { yt: "LkBK06PbiXw", ig: "DXhkOPeijkL" },
      { yt: "8uVMK_QCkHk", ig: "DWpS-FtChek" },
      { yt: "jeUaUwCpxis", ig: "DYm7HhHqieV" },
      { yt: "pU-i7THXWf0", ig: "DWHOEeajiCq" },
      { yt: "36AoO_X7PoY", ig: "DTjG1adjhX5" },
    ],
  },

  "kas-lp-series": {
    color: "#8d97b9",
    title: "<b>[KAS] Legacy Project Series (2025-)</b>",
    role: "Editor",
    desc: "Legacy Project is an oral history initiative from Korean American Story, capturing the lives of Korean Americans through recorded family interviews. Full-length recordings are archived at the Korean American Digital Archive at USC's Korean Heritage Library. I edit the project across individual episodes: 8 to 12 minute portraits drawn from each interview, and short reels for YouTube/Instagram/TikTok.",
    media: [
      { yt: "-I89UbaNNvw", ig: "DMQWw0OMYRu" },
      { yt: "bVHIC3A8WtI", ig: "DN885AHibKd" },
      { yt: "sltSYHgy4Sw", ig: "DNZHJQiuvPA" },
      { yt: "_ofZ2ybBHTM", ig: "DMi27KHywNj" },
      { yt: "RFNjSflmtt0", ig: "DNG1KZUyLvQ" },
      { yt: "OTfWwKHQAfE", ig: "DIuUnIVyj-h" },
      { yt: "kP2_0bM6vMM", ig: "DIzfsMcSEJO" },
      { yt: "eNbvw74g_rk", ig: "DRVcjPCibB3" },
      { yt: "0X8AhYC9Vgw", ig: "DSI6SPlkjHF" },
      { yt: "3go4zz2f5hg", ig: "DTTlFnxkgP-" },
      { yt: "qjCcLFYNS5Y", ig: "DYYBmctquE_" },
      { yt: "dXw2Vr9nrF4", ig: "DY5ArPuq0ki" },
      { yt: "Cdt9TRQt238", ig: "DZLQ3KyqQp-" },
      { yt: "7kNhHeBqAsk", ig: "DZdDJFjKW_e" },
      { yt: "HewJZII9h2g", ig: "DZu2hLnIOAT" },
    ],
  },

  "kas-15-yos-compilations": {
    color: "#f8ffbe",
    title: "<b>[KAS] 15 Years of Storytelling Compilations (2025-)</b>",
    role: "Editor",
    desc: "15 Years of Storytelling is a compilation reel series marking Korean American Story's fifteenth anniversary, drawing from over a decade of Legacy Project interviews. I edited short vertical reels for Instagram and YouTube Shorts, each weaving multiple voices around a single theme.",
    media: [
      "DL2k9fZMoyO", "DMbJQcKS_Um", "DK7IM0QI0DF", "DObN9ndjsUi", "DNYAL02ubrG", "DN0uw14XDJc",
      "DO_SkDwjuAh", "DQUYOizjqB5", "DQ7DxcDDpyQ", "DRcekZUDhQn", "DLSf_--M0tx",
    ].map(ig => ({ ig })),
  },

  "kas-through-the-fog-series": {
    color: "#c9d4dd",
    title: "<b>[KAS] Through the Fog Series (2026-)</b>",
    role: "Editor",
    desc: "Through The Fog is a new series centering the voices of Korean American adoptees, stories that are often unheard, yet deeply essential to the greater Korean American narrative. Through intimate interviews and thoughtful group conversations, participants reflect on identity, belonging, friendship, and healing, offering perspectives that expand and deepen what it means to be part of the Korean American story.",
    media: [
      { yt: "BBTw3JKUr8k", ig: "DbEDg__q8wc" },
      { yt: "A7yYI12c8tY", ig: "DbWI81rKrx4" },
      { yt: "ciSKJZpxCCI", ig: "Dbn8myBqf-r" },
      { yt: "iHBglYkkGvg", ig: "DbbJMT6qba7", note: "Editor + Assistant Camera" },
      { yt: "sM0Q3O3nY10", ig: "Db_DYhSKaXJ" },
      { yt: "JCh6w_0E9sE", ig: "DcMRtkmqM1k" },
      { yt: "JLDNBOR-Mmo", ig: "DcRIxPDKYo2" },
      { yt: "RdC3XGjUeuo", ig: "Dcgp_wsK6ut" },
      { yt: "KSuc871bw_8", ig: "DcjNgLiKPik" },
      { yt: "oLRgknWtTNI", ig: "DcwDG1sKyaA" },
      { yt: "-WAtxPd4Lbo", ig: "DdCIaYRKNcI" },
      { yt: "_t1HFkRnFqI", ig: "DdHcf0fKZ1D" },
    ],
  },

  "kas-events-highlight": {
    color: "#e6f4e8",
    title: "<b>[KAS] Events Highlight Reel &nbsp;(2025-)</b>",
    role: "Editor",
    desc: "Recap reels for Korean American Story's annual live programming, including ROAR Story Slam and the KAS Gala.",
    media: [
      { yt: "MTrsvHgkygo", ig: "DX7rP1Bqy1I" },
      { yt: "bW_N9wu0FCw", ig: "DQnGO2fjjwT" },
      { yt: "8nKeEUMRmmg" },
    ],
  },

  "artdrunk-short-form-series": {
    color: "#f3c9b1",
    title: "<b>[ArtDrunk] Short-form Series (2026-)</b>",
    role: "Editor",
    desc: "Short-form vertical videos for ArtDrunk, an art media platform that helps audiences find their way through the art world. The reels move between artists' studios, exhibitions, and conversations with the people who make and show art. I edit the series for Instagram, including collaborations with Hyundai Artlab and M+ Museum.",
    media: [
      { ig: "DetPbfQq4tP" }, { ig: "Der1Ewbq2FG" },
      { ig: "DcpYDqdzRS9" }, { ig: "Dcj9yx9zIPd" },
      { ig: "Db69BuczsY0" }, { ig: "Db0PM2bTPmY" },
      { ig: "DbwbpXVzVjk" }, { ig: "DbO8hLyhEZf" },
      { ig: "Da3xdF5AtxB" }, { ig: "Dej30imgCGo" },
    ],
  },

  "artdrunk-how-we-art-series": {
    color: "#bfe3d6",
    title: "<b>[ArtDrunk] How We Art Series (2026-)</b>",
    role: "Editor",
    desc: "<i>How We Art</i> is ArtDrunk's long-form YouTube series about the people quietly building the art world, from a film archivist racing to save Asia's forgotten cinema to a team turning an abandoned hospital into a gallery. I edit the episodes, shaping interviews and on-location footage into portraits of how art gets made, kept, and shared.",
    media: [{ yt: "-tKp7jH6_b4" }, { yt: "Ra2xt1AF7eI" }],
  },

  "centanni-ferdi": {
    color: "#cccbde",
    title: "Cent'Anni, Ferdi! (2024)",
    role: "Director + Editor + Film Production",
    badges: [["K2948394063232477395266192745488/OFFICIAL-SELECTION---Shops-of-New-York-Short-Film-Festival---2024.png", 18.8]],
    desc: "<i>'Cent'Anni, Ferdi!'</i> is a short documentary that began with a question I couldn't stop asking myself about a small Italian restaurant in New York's West Village: was this place connected to the mafia? Made with graphic designer Hennie Park and Ye Heon Shin, the film follows that question into the kitchen and across the dining room, where I eventually asked it out loud, on camera. The answer, of course, was no. What I found instead was a family, a hundred years of recipes, and a neighborhood that has quietly grown around them.",
    media: [
      { gallery: [
        "Z2948380780820427817366937609232/Title.png",
        "M2948380780709747352924680299536/fernando-aida.png",
        "S2948380780654407120703551644688/ferdi.png",
        "F2948380780746640841072099402768/it-s-in-the-genuine-smiles.png",
        "I2948380780691300608850970747920/Fernando.png",
        "G2948380780728194096998389851152/gary.png",
        "L2948380780617513632556132541456/as-we-raise-our-glasses-for-one-last-toast.png",
        "R2948380780801981073293228057616/may-you-thrive-for-a-hundred-years.png",
        "I2948380780635960376629842093072/bar.png",
        "G2948380780672853864777261196304/ferdinando.png",
      ] },
      { vimeo: "999552229" },
    ],
  },

  "memory-fossil": {
    color: "#d08a89",
    title: "Memory Fossil (2024)",
    role: "Film Production",
    badges: [
      ["W2948396522423270093707647329296/Official2025White.png", 17],
      ["E2948396092669473408496223331344/Edit2025White.png", 17.1],
    ],
    desc: "<i>Memory Fossil</i> was made in collaboration with fashion designer Eunhae Cho, whose collection draws on fossils, nature's own archives of memory and transformation. What pulled me into her work was her philosophy of modularity, where the wearer becomes a co-creator, reshaping each piece with every choice.<br><br>I wanted the film to carry that same sense of accumulation and erosion. Wrinkled hands. Worn shoes. Faded paint. Gnarled branches. The camera moves between studio and street, between Eunhae's collection and the world it lives in, tracing the everyday imprints that become our own memory fossils.",
    media: [{ yt: "y5Ey7hv5AMI" }],
  },

  "how-to-live-as-an-asian-woman-in-nyc": {
    color: "#c9cbcb",
    title: "<b>How to Live as an Asian Woman in NYC (2023)</b>",
    role: "Film Production",
    badges: [["T2948416345755620303834552673296/AAIFF47Laurels.png", 25.4]],
    desc: "<i>How to Live as an Asian Woman in NYC</i> is a short film I made in my final semester of college, in the middle of a sharp rise in anti-Asian hate crimes in the city. The news coverage at the time had settled into one register (serious, repetitive, easy to tune out), so I went the other way. Borrowing from the deadpan voiceover style of <i>How To with John Wilson</i>, I built the film as a series of \"steps,\" each demonstrated first by a small yellow Lego figure, then re-enacted by me in real life. I was reading Anne Anlin Cheng's writing on Asian women as ornamental: small, decorative, overlooked. The Lego came out of that. Humor felt like the only way in. As the saying goes, if I didn't laugh I'd cry.",
    media: [{ vimeo: "776258853?h=f219ffc756" }],
  },

  "aroom-studio-brand-film": {
    color: "#e0d86f",
    title: "[Aroom Studio] Brand Film (2023)",
    role: "Film Production",
    desc: "A brand film for a company designing small backyard structures: single rooms that quietly become whatever the family inside them needs that day. I made the film end to end: directing, shooting, editing, and composing the score.",
    media: [{ vimeo: "909140395" }],
  },

  "aroom-studio-customers-story": {
    color: "#9697f1",
    title: "[Aroom Studio] Customer’s Story (2023)",
    role: "Film Production",
    desc: "A documentary companion piece to the <i>Aroom</i> brand film, following a Northern Virginia family who had added one of the company's Model 21 structures to their backyard. I directed, shot, and edited the video around an interview with the homeowners, weaving their conversation with before-and-after footage and small moments of daily use. The room becomes a study, a play space, a quiet place to land at the end of the day.",
    media: [{ yt: "kcFnMzqpKnA" }],
  },

  "hybe-x-kpop-nara-bts-fan-interview": {
    color: "#f8d5ff",
    title: "<b>[HYBE x Kpop Nara] BTS Fan Interview (2026)</b>",
    role: "Interview + Editor",
    desc: "A collaboration between HYBE and Kpop Nara around a BTS comeback. ARMY fans submitted personal stories about what the music meant to them, and selected fans were interviewed via video call. I wrote the questions, conducted the interviews, and edited each piece for Instagram.",
    media: [{ ig: "DW5LLqojZ50" }, { ig: "DW-KN9_isaf" }],
  },

  "table-for-one-series": {
    color: "#bfcbb7",
    title: "<b>Table for One (2022)</b>",
    role: "Director + Editor + Music Composition",
    desc: "<i>Table for One</i> is a documentary series about people who live alone in New York City, using the meals they cook for themselves as a way into their stories. Each episode follows one person through grocery shopping, cooking, and eating, and lets the meal carry the conversation. I directed, shot, edited, and composed the score for each episode.",
    media: [
      { vimeo: "703401825" },
      { html: "<span class=\"caption\">Episode 1: Hyereen</span><blockquote class=\"caption\">Hyereen is a Korean design student living in Long Island City. We pre-interviewed in her apartment in Korean, her native language, and the final episode keeps the conversation in Korean with subtitles. The score for her episode is a 6/8 waltz for chamber orchestra; I wanted her cooking to feel like instruments coming together into something larger.</blockquote>" },
      { vimeo: "703382018" },
      { html: "<span class=\"caption\">Episode 2: Haley</span><blockquote class=\"caption\">Haley is a dancer who lives in Upper Manhattan. The plan was to film her grocery shop, train ride home, interview, and cook, but we made a detour through Riverbank State Park, her favorite place in the city, and stayed an hour. She showed us cartwheels, a back stand, and ran across the lawn to touch a moon painted on a wall. The score for her episode is a bossa nova with flute over a jazz trio, and ends with an upbeat track for when she talks about not yet knowing what her next dream is.</blockquote>" },
    ],
  },

  "pathways-feature-documentary-teaser": {
    color: "#6a841e",
    title: "<b>Pathways Feature Documentary Teaser (2021)</b>",
    role: "Sound + Editor",
    desc: "<i>Pathways</i> (now titled <i>Sometime, Somewhere</i>) by Ricardo Preve is a feature documentary in development, following immigrants who have come to Virginia after being displaced by climate change, drug violence, and poverty. I edited the trailer and recorded sound for the project .",
    media: [{ vimeo: "909218423" }],
  },

  "joshua-tree": {
    color: "#e16336",
    title: "<b>Joshua Tree (2024)</b>",
    role: "Film Production",
    desc: "For fun!",
    media: [{ yt: "ipmdPzDHdK0" }],
  },
};

const views = id => REEL_VIEWS[id] || 0;
const byViews = (a, b) => views(b.ig) - views(a.ig);

function renderMedia(m) {
  if (m.yt && m.ig) return `<div class="pair">${renderMedia({ yt: m.yt })}${renderReel(m.ig)}</div>${m.note ? `<span class="role pair-note">${m.note}</span>` : ""}`;
  if (m.yt) return `<div class="embed"><iframe src="https://www.youtube.com/embed/${m.yt}?rel=0&modestbranding=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`;
  if (m.vimeo) return `<div class="embed"><iframe src="https://player.vimeo.com/video/${m.vimeo}${m.vimeo.includes("?") ? "&" : "?"}portrait=0&autopause=0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`;
  if (m.gallery) return `<div class="project-gallery">${m.gallery.map(p => `<img src="${FREIGHT}${p}" alt="" loading="lazy">`).join("")}</div>`;
  return `<div class="media-text">${m.html}</div>`;
}

function formatViews(n) {
  return n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}K` : String(n);
}

// A reel cropped to just the video (no likes/comments footer), with its view count underneath
function renderReel(id) {
  return `
    <figure class="reel">
      <div class="reel-frame">
        <iframe src="https://www.instagram.com/reel/${id}/embed/" scrolling="no" allowtransparency="true" loading="lazy" title="Instagram reel"></iframe>
      </div>
      <figcaption class="caption">
        <span class="reel-views">${views(id) ? `▶ ${formatViews(views(id))} views` : ""}</span>
        <a href="https://www.instagram.com/reel/${id}/" target="_blank" rel="noopener">Instagram ↗</a>
      </figcaption>
    </figure>`;
}

function renderReelGrid(ids) {
  if (!ids.length) return "";
  const total = ids.reduce((sum, id) => sum + views(id), 0);
  return `
    <div class="reels">
      <div class="reels-head caption">Reels <span class="reels-total">${ids.length} reels · ${formatViews(total)} views</span></div>
      <div class="reel-grid">${ids.map(renderReel).join("")}</div>
    </div>`;
}

function renderProject(p) {
  const badges = (p.badges || []).map(([src, w]) => `<img class="badge" src="${BADGE}${src}" style="width:${w}%" alt="">`).join("");
  // Episode pairs (YouTube + its reel) and lone reels are ordered by reel views, most viewed first
  const pairs = p.media.filter(m => m.yt && m.ig).sort(byViews);
  const reels = p.media.filter(m => m.ig && !m.yt).sort(byViews).map(m => m.ig);
  const rest = p.media.filter(m => !m.ig);
  return `
    <div class="project-panel" style="background:${p.color}">
      <div class="project-head">
        <div>
          <span class="caption">${p.title}</span>
          <span class="role">${p.role}</span>
          ${badges ? `<div class="badges">${badges}</div>` : ""}
        </div>
        <div class="caption">
          <a href="#works" class="close">(Close)</a><br><br>
          ${p.desc}
        </div>
      </div>
      <div class="project-media">${[...pairs, ...rest].map(renderMedia).join("")}</div>
      ${renderReelGrid(reels)}
      <div class="close-bottom"><a href="#works" class="caption close">(Close)</a></div>
    </div>`;
}
