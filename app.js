// ====== SETUP ======
const web3 = new Web3(Web3.givenProvider || window.ethereum);

// ====== UPDATE THIS ======
const contractAddress = "0x218195D71DeE053e27A399A6984DFfEe0E0aDF39";
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			}
		],
		"name": "registerProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			}
		],
		"name": "verifyProduct",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contract = new web3.eth.Contract(contractABI, contractAddress);

const result = document.getElementById("result");
const qrcodeDiv = document.getElementById("qrcode");

// ====== REGISTER PRODUCT ======
async function register() {
    const id = document.getElementById("regId").value.trim();
    if (!id) {
        result.innerText = "Enter a Product ID ❌";
        return;
    }

    try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        await contract.methods.registerProduct(id).send({ from: accounts[0] });

        result.innerText = "Product Registered ✅";

        // Generate QR with verification link
        qrcodeDiv.innerHTML = "";
        const url = "https://oxygenazeem.github.io/blockchain-product-verification/?product=" + encodeURIComponent(id);
		new QRCode(qrcodeDiv, url);

    } catch (err) {
        console.error(err);
        result.innerText = "Transaction failed ❌";
    }
}

// ====== MANUAL VERIFY ======
async function verifyManual() {
    const id = document.getElementById("verId").value.trim();
    if (!id) {
        result.innerText = "Enter a Product ID ❌";
        return;
    }
    verifyProduct(id);
}

// ====== VERIFY FUNCTION ======
async function verifyProduct(id) {
    try {
        const exists = await contract.methods.verifyProduct(id).call();
        result.innerText = exists
            ? "Product is Authentic ✅"
            : "Product is Fake ❌";
    } catch (err) {
        console.error(err);
        result.innerText = "Verification error! Please try again.";
    }
}

// ====== AUTO VERIFY FROM QR ======
window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("product");

    if (productId) {
        document.getElementById("verId").value = productId;
        verifyProduct(productId);
    }
};

