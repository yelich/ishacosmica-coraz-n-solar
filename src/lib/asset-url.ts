const LOVABLE_ASSET_ORIGIN =
  "https://project--ed46e4c9-cdb3-4042-b1ed-712cf83fe566-dev.lovable.app";

export function getAssetUrl(url: string) {
  return import.meta.env.BASE_URL === "/" ? url : `${LOVABLE_ASSET_ORIGIN}${url}`;
}