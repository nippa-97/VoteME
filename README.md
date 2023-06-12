# VoteME
The next generation voting platform using Ethereum blockchain with optimized smart contract.

Install these prerequisites to start VoteMe

-NPM: https://nodejs.org
-Truffle: https://github.com/trufflesuite/truffle
-Ganache: http://truffleframework.com/ganache/
-Metamask: https://metamask.io/

## Step 1. Clone the project
`git clone https://github.com/nippa-97/VoteME.git`

## Step 2. Install dependencies
```
$ cd election
$ npm install
```
## Step 3. Start Ganache
Open the Ganache GUI client that you downloaded and installed. This will start your local blockchain instance. See free video tutorial for full explanation.


## Step 4. Compile & Deploy Election Smart Contract
`$ truffle migrate --reset`
You must migrate the election smart contract each time your restart ganache.

## Step 5. Configure Metamask
See free video tutorial for full explanation of these steps:
- Unlock Metamask
- Connect metamask to your local Etherum blockchain provided by Ganache.
- Import an account provided by ganache.

## Step 6. Run the Front End Application
`$ npm run dev`
Visit this URL in your browser: http://localhost:3000
