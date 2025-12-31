# Blockchain Product Verification

Welcome to **Blockchain Product Verification**, a crypto-powered system designed to detect fake products using blockchain technology.  
This project uses **Ethereum smart contracts**, **MetaMask**, and a **QR-based verification system** to ensure product authenticity.

---

## Why use this?

Counterfeit products are a serious problem in modern supply chains.  
Traditional databases can be:
- Tampered with
- Deleted
- Breached

This project solves that by using a **blockchain**, where once data is stored, it **cannot be changed or removed**.

---

## How does it work?

1. A **unique Product ID** is registered by an authorized user (manufacturer / staff).
2. MetaMask is used to send this Product ID to the blockchain via a smart contract.
3. The blockchain permanently stores the Product ID.
4. A **QR code** is generated containing a verification link.
5. Customers or staff can scan the QR code or manually enter the Product ID to verify authenticity.

---

## How does verification work?

- When a Product ID is scanned or entered:
  - The website reads data from the blockchain.
  - If the Product ID exists → ✅ **Authentic**
  - If the Product ID does not exist → ❌ **Fake**

Verification is **read-only** and does not modify blockchain data.

---

## What makes this a “blockchain” project?

- The core logic is written in **Solidity**, a blockchain-specific programming language.
- The Solidity smart contract is:
  - Compiled
  - Deployed
  - Stored permanently on the Ethereum blockchain (Sepolia testnet)
- Once deployed, the contract cannot be altered or deleted.

This makes the system **decentralized, transparent, and tamper-resistant**.

---

## What makes it secure?

Unlike traditional databases (e.g., MySQL):
- ❌ Data cannot be edited
- ❌ Data cannot be deleted
- ❌ No single point of failure

Blockchain security comes from:
- Cryptographic hashing
- Distributed ledger validation
- Immutable transaction history

If data were tampered with, the blockchain would immediately reject it.

---

## Tech Stack

- **Solidity** – Smart contracts
- **Ethereum (Sepolia Testnet)** – Blockchain network
- **MetaMask** – Wallet & transaction provider
- **Web3.js** – Blockchain interaction
- **HTML / JavaScript** – Frontend
- **GitHub Pages** – Website hosting
- **QRCode.js** – QR code generation

---

## Important Notice

- ❗ This project **requires MetaMask**:
  - Desktop: MetaMask browser extension
  - Mobile: MetaMask app’s built-in DApp browser
- ❗ Do **NOT** use real cryptocurrency
  - Use a **testnet only**
  - Sepolia Testnet is recommended and tested

---

## Live Demo

[https://oxygenazeem.github.io/blockchain-product-verification/](https://oxygenazeem.github.io/blockchain-product-verification/)

Created by Mohammad Abdul Azeem
