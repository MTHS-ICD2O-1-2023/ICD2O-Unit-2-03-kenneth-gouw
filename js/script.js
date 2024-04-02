// Copyright (c) 2020 Kenneth All rights reserved
//
// Created by: Kenneth
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const firstName = document.getElementById("first-name").value
  const userAge = parseInt(document.getElementById("age-entered").value)

  // output
  document.getElementById("user-info").innerHTML = "Your info is: " + userAge + ", on " + firstName + "."
}
