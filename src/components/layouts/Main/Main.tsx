import React from 'react';
import { MainProps } from './Main.types';

function Main({ children }: MainProps) {
  return <main>{children}</main>;
}

export default Main;
