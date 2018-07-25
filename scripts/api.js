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
  const updateItem = function(id, updateData, callback) {
    const query = {
      url : `${BASE_URL}/items/${id}`,
      method : 'PATCH',
      contentType : 'application/json',
      data : JSON.stringify(updateData),
      success : callback
    };
    $.ajax(query);
  };
  const deleteItem = function(id, callback) {
    const query = {
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      success: callback
    };
    $.ajax(query);
  };
  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  }; 
}());