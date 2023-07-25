import axios from "axios";

const { REACT_APP_GATEWAY_API_URL } = process.env;

// Fetch latest blocks
function fetchBlockchainData(): Promise<[Block]> {
  return axios
    .get<[Block]>(REACT_APP_GATEWAY_API_URL + "/miner/blocks?amount=10")
    .then((response) => response.data);
}

// Fetch miner wallet details
function fetchMinerWalletDetails(minerAdress: string): Promise<WalletDetails> {
  return axios
    .post<WalletDetailsResponse>(minerAdress + "/miner/wallet")
    .then(({ data }) => {
      const camelCaseResponseData: WalletDetails = {
        blockchainAddress: data.blockchain_address,
        privateKey: data.private_key,
        publicKey: data.public_key,
      };

      return camelCaseResponseData;
    });
}

export { fetchBlockchainData, fetchMinerWalletDetails };
