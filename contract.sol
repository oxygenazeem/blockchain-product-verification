// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductRegistry {
    mapping(string => bool) products;

    // Register a product
    function registerProduct(string memory id) public {
        products[id] = true;
    }

    // Verify if product exists
    function verifyProduct(string memory id) public view returns(bool) {
        return products[id];
    }
}
