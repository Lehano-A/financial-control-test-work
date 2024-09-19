import { defaultFakeThumbParams } from '../../../contstants/constants';

function calcKeys(typeScroll: string) {
  const axis: 'X' | 'Y' = typeScroll === 'horizontal' ? 'X' : 'Y';
  const paramSizeCapitalized: 'Width' | 'Height' =
    typeScroll === 'horizontal' ? 'Width' : 'Height';
  const sideDirectionCapitalized: 'Left' | 'Top' =
    typeScroll === 'horizontal' ? 'Left' : 'Top';

  const paramSize: 'width' | 'height' =
    typeScroll === 'horizontal' ? 'width' : 'height';
  const sideDirection: 'left' | 'top' =
    typeScroll === 'horizontal' ? 'left' : 'top';
  const defaultMinSizeFakeThumb =
    typeScroll === 'horizontal'
      ? defaultFakeThumbParams.width
      : defaultFakeThumbParams.height;
  const offsetDimension = `offset${[paramSizeCapitalized]}` as
    | 'offsetWidth'
    | 'offsetHeight';
  const clientDimension = `client${[paramSizeCapitalized]}` as
    | 'clientWidth'
    | 'clientHeight';
  const clientAxis = `client${[axis]}` as 'clientX' | 'clientY';
  const scrollDimension = `scroll${[paramSizeCapitalized]}` as
    | 'scrollWidth'
    | 'scrollHeight';
  const scrollDirection = `scroll${[sideDirectionCapitalized]}` as
    | 'scrollLeft'
    | 'scrollTop';

  return {
    paramSize,
    sideDirection,
    defaultMinSizeFakeThumb,
    offsetDimension,
    clientDimension,
    clientAxis,
    scrollDimension,
    scrollDirection,
  };
}

export default calcKeys;
