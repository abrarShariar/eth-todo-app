// js talking with blockchain
App = {
    load: async () => {
        // load app ...
        console.log("App loading...");
        await App.loadWeb3();
        await App.loadAccount();
    },

    // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
    loadWeb3: async () => {
        // Modern dapp browsers
        if (window.ethereum) {
            window.web3 = new Web3(ethereum);
            try {
                // Request account access if needed
                await ethereum.enable();
                // Accounts now exposed
                web3.eth.sendTransaction({/*....*/});
            } catch (err) {
                // User denied account access
                console.log("User denied account access");
            }
        }
        //  Legacy dapp browsers ...
        else if (window.web3) {
            window.web3 = new Web3(currentProvider);
            // accounts always exposed
            web3.eth.sendTransaction({/*....*/});
        }
        // Non-dapp browser
        else {
            console.log("Non-Ethereum browser detected. MetaMask Please!");
        }
    },
    
    loadAccount: async () => {
        // set the current blockchain account
        App.account = web3.eth.accounts[0]
    },

    loadContract: async () => {

    }

}

$(() => {
    $(window).load(() => {
        App.load();
    });
})