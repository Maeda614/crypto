package handlers

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
)

// TODO: Describe the purpose of this function
// Get the last 10 blocks of the BlockchainServer
func (h *BlockchainServerHandler) GetBlocks(w http.ResponseWriter, req *http.Request) {
	switch req.Method {
	case http.MethodGet:
		w.Header().Add("Content-Type", "application/json")

		fmt.Println("GET _ _ _ _ _ _ _ BLOCKS")
		LogMethods(h.server)

		bc := h.server.GetBlockchain()
		m, _ := json.Marshal(bc.GetBlocks(10))
		io.WriteString(w, string(m[:]))
	default:
		log.Printf("ERROR: Invalid HTTP Method")
	}
}
