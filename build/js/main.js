!function e(t,r,n){function o(f,u){if(!r[f]){if(!t[f]){var a="function"==typeof require&&require;if(!u&&a)return a(f,!0);if(i)return i(f,!0);throw new Error("Cannot find module '"+f+"'")}var c=r[f]={exports:{}};t[f][0].call(c.exports,function(e){var r=t[f][1][e];return o(r?r:e)},c,c.exports,e,t,r,n)}return r[f].exports}for(var i="function"==typeof require&&require,f=0;f<n.length;f++)o(n[f]);return o}({1:[function(e,t,r){$(document).ready(function(){$("head").append("<link rel='stylesheet' type='text/css' href='css/style.min.css'/>"),$("li").on("click",function(){$("li").removeClass("active"),$(this).addClass("active")}),$("#menu, #footer_nav").on("click","a",function(e){e.preventDefault();var t=$(this).attr("href"),r=$(t).offset().top;$("body,html").animate({scrollTop:r},1500)})})},{}]},{},[1]);