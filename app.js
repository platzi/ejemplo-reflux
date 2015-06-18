/*
 * Module dependencies
 */

import React from 'react';
import ImageActions from './actions/ImageActions';
import ImageGrid from './components/ImageGrid';

// Cada 5 segundos: recargar!
setInterval(function() {
    ImageActions.fetchList(); 
}, 5000);

React.render(
  <ImageGrid />,
  document.getElementById('app-container')
)