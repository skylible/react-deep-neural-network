import React from 'react';
import Divider from '@material-ui/core/Divider';
import HiddenLayerView from '../components/wrapper/hiddenLayerView';
import DataView from '../components/wrapper/dataView';

function Main() {
  return (
    <div className="Main">
      <HiddenLayerView />
      <Divider />
      <DataView />
    </div>

  );
}

export default Main;
