import React from 'react';
import { T_EliraThemeConfig, T_EliraProvidor } from './types.js';
import './components/Tooltip/T_tooltip.js';

declare const EliraThemeContext: React.Context<T_EliraThemeConfig>;
declare const EliraThemeProvider: React.FC<T_EliraProvidor>;

export { EliraThemeContext, EliraThemeProvider };
