/* =====================================================================
   Central image registry.
   Friendly names -> asset paths. Swap a path here to update everywhere.
   ===================================================================== */
const BASE = '/assets/jetchef_images/full-resolution'

export const IMG = {
  // Branding / logos
  logo: `${BASE}/s-1639x481_v-fms_webp_b2aa9ab4-7e9b-42ff-acb9-8bee038bec61.webp`,
  unagiLogo: `${BASE}/s-286x286_webp_0358d007-bba2-4cc9-8356-d793c0ec41f6.webp`,
  yakinikuLogo: `${BASE}/s-286x293_webp_43154a49-58ca-4855-8ae5-5625185c2e91.webp`,

  // Hero / atmosphere
  heroPoster: `${BASE}/s-1280x853_v-fms_webp_533abc07-275e-461b-b48c-cb3cca6bd5a6.webp`,
  bento: `${BASE}/s-885x903_v-fs_webp_254c8109-80c8-4122-baea-6324ae8a9129.webp`,
  appealBg: `${BASE}/s-1437x1004_v-fms_webp_1330d9cb-677b-4c34-8876-9a4ba7850632.webp`,
  footerBg: `${BASE}/s-1280x853_v-fms_webp_533abc07-275e-461b-b48c-cb3cca6bd5a6.webp`,

  // Feature
  heatingContainer: `${BASE}/s-722x512_v-fs_webp_0c2b3c7f-42a5-4196-9387-4db9a0a55dd3.webp`,
  meishin: `${BASE}/s-1080x720_v-fs_webp_28967641-7f22-455a-8ac4-9d2c25f393a0.webp`,

  // Products — unagi
  unaRen: `${BASE}/s-725x544_v-fs_webp_cf9baa44-80a8-4446-81c4-46efb63cf6fd.webp`,
  unaOu: `${BASE}/s-725x544_v-fs_webp_0ff366cc-dcc5-4143-9195-e79403d439d3.webp`,
  unaAoi: `${BASE}/s-725x544_v-fs_webp_dfb76a36-ca5d-4311-93da-8836cd6f55ad.webp`,
  // Products — yakiniku
  butaBibim: `${BASE}/s-725x544_v-fs_webp_4e0ee189-01f8-4c83-bf54-09b900b56908.webp`,
  unagiKalbi: `${BASE}/s-725x544_v-fs_webp_deb248d9-435f-4472-ad92-310085bbe61b.webp`,
  kalbi3: `${BASE}/s-725x544_v-fs_webp_c73a92de-88a1-4ad7-920e-f2fa41686bea.webp`,

  // Use cases
  meeting: `${BASE}/s-1080x720_v-fs_webp_dabf714b-6eca-4ff6-ab59-08e601a534a0.webp`,

  // Order regions (used by OrderPanel)
  areaTokyo: `${BASE}/s-300x200_webp_9a784e28-a687-4798-86af-27d0aa01a219.webp`,
  areaNishiTokyo: `${BASE}/s-300x200_webp_9d5a1a4a-2890-493e-988e-5cdca096bfdd.webp`,
  areaSaitama: `${BASE}/s-300x200_webp_d2e6482d-5cdc-4edb-be83-86ce4bd13440.webp`,
  areaKanagawa: `${BASE}/s-300x200_webp_cdb0b03d-d0bc-43b1-b209-a0698bf77ebc.webp`,
  areaChiba: `${BASE}/s-300x200_webp_e561e150-8c5c-49c9-bd21-5e082d15ddd5.webp`,

  // Order banners
  bannerPersonal: `${BASE}/s-1428x300_v-fms_webp_a078ee95-1111-457e-a8b7-26a9bbc378d9.png`,
  bannerCorporate: `${BASE}/s-1428x300_v-fms_webp_3ec9947a-9b3a-4648-af10-82a910391268.png`,

  // Generated (gpt-image-2)
  barrierFree: '/assets/jetchef_images/generated/food-barrier-free.webp',
  careScene: '/assets/jetchef_images/generated/care-facility-meal.webp',
  sceneMeeting: '/assets/jetchef_images/generated/scene-meeting.webp',
  sceneSeminar: '/assets/jetchef_images/generated/scene-seminar.webp',
  sceneHospitality: '/assets/jetchef_images/generated/scene-hospitality.webp',
  sceneMr: '/assets/jetchef_images/generated/scene-mr.webp',
  sceneEvent: '/assets/jetchef_images/generated/scene-event.webp',
} as const
