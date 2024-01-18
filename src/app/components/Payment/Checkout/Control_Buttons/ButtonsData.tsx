export const ButtonsData = (status) => [
  {
    title: 'CHEKOUT.BARRIER.BUTTON',
    img: 'media/buttons/Receipt.svg',
  },
  {
    title: status === 'ink_out' ? 'NO INK' : 'CHEKOUT.PRINT.BUTTON',
    img: status === 'ink_out' ? '' : 'media/buttons/Receipt.svg',
  },
  {
    title: 'CHEKOUT.RECEIPT.BUTTON',
    img: 'media/buttons/Receipt.svg',
  },
]
//media/buttons/Print.svg
