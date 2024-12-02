interface Feature {
  type: string;
  properties: {
    name: string;
  };
  geometry: {
    type: string;
    coordinates: number[][][] | number[][][][];
  };
  id: string;
}

export type geoFeatureType = {
  type: string;
  features: Feature[];
};
