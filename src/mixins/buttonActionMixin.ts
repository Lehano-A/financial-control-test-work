import { ButtonActionProps } from '../components/ProductPanel/ControlDataActions/types/buttonActionProps.types';

const buttonActionMixin = ({
  iconMargin = '0 3px 0 0',
  svgFontSize = '1.75rem',
  gapBetween = '4px',
}: ButtonActionProps = {}) => ({
  fontSize: '11px',
  fontWeight: 300,
  letterSpacing: '0.8px',
  padding: '10px 5px',

  '&:nth-of-type(1n):not(:last-child)': {
    marginRight: gapBetween,
  },

  '& > svg': {
    margin: iconMargin,
    fontSize: svgFontSize,
  },
});

export default buttonActionMixin;
