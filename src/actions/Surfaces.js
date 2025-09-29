import { fit } from "../api/surface";

export const fitSurface = (id) => async (_dispatch, getState) => {
  const [name, port] = id.split('^');
  const currentFitOptions = getState().surfaces.items[id].fitInfo;
  fit(name, formatFitOptionsForGCP(currentFitOptions), port);
};
