export interface Transaction {
  receiver: string
  sender: string
  timestamp: string
  message: string
  keyword: string
  amount: {
    _hex: string
  }
}
