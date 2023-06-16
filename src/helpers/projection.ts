import { Projection, type ProjectionLike } from "ol/proj";

export default function projectionFromProperties(projection: ProjectionLike) {
  if (!projection) return;
  if (typeof projection === "string") return projection;
  if (projection instanceof Projection) return projection;
  return new Projection(projection);
}
