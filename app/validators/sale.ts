import vine from '@vinejs/vine'

export const saleValidator = vine.compile(
  vine.object({
    customerId: vine.number(),
    productId: vine.number(),
    amount: vine.number().withoutDecimals().min(1),
  })
)
