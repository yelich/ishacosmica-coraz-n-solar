const LOVABLE_ASSET_ORIGIN =
  "https://id-preview--ed46e4c9-cdb3-4042-b1ed-712cf83fe566.lovable.app";

export function getAssetUrl(url: string) {
  return import.meta.env.BASE_URL === "/" ? url : `${LOVABLE_ASSET_ORIGIN}${url}`;
}