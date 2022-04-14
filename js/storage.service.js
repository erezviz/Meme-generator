'use strict'

//TODO  ############ FUNCTION  SAVE TO STORAGE ##################
function saveToStorage(key, val) {
    var json = JSON.stringify(val)
    localStorage.setItem(key, json)
}
//TODO  ############ FUNCTION  LOAD FROM STORAGE ##################
function loadFromStorage(key) {
    const json = localStorage.getItem(key)
    const val = JSON.parse(json)
    return val
}