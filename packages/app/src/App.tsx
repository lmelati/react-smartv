import type { FunctionComponent } from 'react';
import { type fontData, FontManagerProvider, View } from 'react-lightning';
import './App.css';
import React from 'react';

import { renderMode } from './main';

const basePath = import.meta.env.BASE_URL;

export const App: FunctionComponent = () => {
  const viewRef = React.useRef<View | null>(null);

  const defaultWebGlFont: fontData = {
    mode: renderMode,
    type: 'ssdf',
    options: {
      fontFamily: 'NotoSans',
      descriptors: {},
      atlasUrl: basePath + 'fonts/NotoSans-Regular.ssdf.png',
      atlasDataUrl: basePath + 'fonts/NotoSans-Regular.ssdf.json',
      metrics: {
        ascender: 1000,
        descender: -200,
        lineGap: 0,
        unitsPerEm: 1000,
      },
    },
  };

  return (
    <FontManagerProvider fontData={defaultWebGlFont}>
      <ln-view ref={viewRef} width={1920} height={1080} color={0x000000ff}>
        <ln-view x={10} y={20} width={500} height={500} color={0xff00ffff}>
          <ln-text>Hello World!!!</ln-text>
        </ln-view>
      </ln-view>
    </FontManagerProvider>
  );
};

export default App;
