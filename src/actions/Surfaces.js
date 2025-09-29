export const fitSurface = (id) => async (_dispatch, getState) => {
  const [name, port] = id.split('^');
  const currentFitOptions = getState().surfaces.items[id].fitInfo;
  await fit(name, formatFitOptionsForGCP(currentFitOptions), port);
};
