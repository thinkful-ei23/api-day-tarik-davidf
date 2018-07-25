'use strict';
/* global $ */

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/tarik-davidf';
  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  };
  const createItem = function(name, callback) {
    const newItem = JSON.stringify({
      name,
    });
    const query = {
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback      
    };
    $.ajax(query);
  };

  return {
    getItems,
    createItem
  }; 
}());